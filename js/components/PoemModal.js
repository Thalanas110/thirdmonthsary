// Poem Modal Component
import { TextToSpeech } from '../services/TextToSpeech.js';
import { PdfExport } from '../services/PdfExport.js';
import { SocialShare } from '../services/SocialShare.js';

export class PoemModal {
    constructor() {
        this.modal = document.getElementById('poem-modal');
        this.isOpen = false;
        this.currentPoem = null;
        this.tts = new TextToSpeech();
        this.pdfExport = new PdfExport();
        this.socialShare = new SocialShare();
        
        this.setupEventListeners();
    }

    setupEventListeners() {
        // Close button
        const closeBtn = document.getElementById('close-modal');
        closeBtn.addEventListener('click', () => this.close());

        // Play button
        const playBtn = document.getElementById('play-poem');
        playBtn.addEventListener('click', () => this.handlePlay());

        // PDF export button
        const pdfBtn = document.getElementById('export-pdf');
        pdfBtn.addEventListener('click', () => this.handlePdfExport());

        // Share button
        const shareBtn = document.getElementById('share-btn');
        shareBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const dropdown = shareBtn.closest('.share-dropdown');
            dropdown.classList.toggle('active');
        });

        // Share menu items
        const shareMenu = document.querySelector('.share-menu');
        shareMenu.addEventListener('click', (e) => {
            const button = e.target.closest('button');
            if (button) {
                const platform = button.dataset.platform;
                this.handleShare(platform);
                shareBtn.closest('.share-dropdown').classList.remove('active');
            }
        });
    }

    open(poem) {
        this.currentPoem = poem;
        this.isOpen = true;
        
        // Update modal content
        document.getElementById('modal-title').textContent = poem.title;
        document.getElementById('modal-author').textContent = `by ${poem.author}`;
        document.getElementById('modal-stanzas').textContent = `${poem.stanzas} stanza${poem.stanzas !== 1 ? 's' : ''}`;
        document.getElementById('modal-content').textContent = poem.content;
        
        // Update tags
        const tagsContainer = document.getElementById('modal-tags');
        tagsContainer.innerHTML = poem.tags.map(tag => 
            `<span class="poem-tag">${this.escapeHtml(tag)}</span>`
        ).join('');

        // Show modal
        this.modal.classList.add('active');
        document.body.style.overflow = 'hidden';

        // Focus management
        const closeBtn = document.getElementById('close-modal');
        closeBtn.focus();

        // Track analytics
        this.trackEvent('poem_opened', { poem_id: poem.id, poem_title: poem.title });
    }

    close() {
        if (!this.isOpen) return;
        
        this.isOpen = false;
        this.modal.classList.remove('active');
        document.body.style.overflow = '';
        
        // Stop any playing audio
        this.tts.stop();
        
        // Update URL
        const url = new URL(window.location);
        url.searchParams.delete('poem');
        window.history.pushState({}, '', url);

        this.trackEvent('poem_closed', { poem_id: this.currentPoem?.id });
    }

    async handlePlay() {
        if (!this.currentPoem) return;

        const playBtn = document.getElementById('play-poem');
        const icon = playBtn.querySelector('i');
        const text = playBtn.childNodes[1];

        try {
            if (this.tts.isPlaying()) {
                this.tts.stop();
                icon.className = 'fas fa-play';
                text.textContent = ' Listen';
                playBtn.classList.remove('playing');
            } else {
                icon.className = 'fas fa-pause';
                text.textContent = ' Pause';
                playBtn.classList.add('playing');
                
                await this.tts.speak(this.currentPoem.content, {
                    onEnd: () => {
                        icon.className = 'fas fa-play';
                        text.textContent = ' Listen';
                        playBtn.classList.remove('playing');
                    },
                    onError: (error) => {
                        console.error('TTS Error:', error);
                        icon.className = 'fas fa-play';
                        text.textContent = ' Listen';
                        playBtn.classList.remove('playing');
                        window.showToast('Failed to play audio. Please try again.', 'error', 'Audio Error');
                    }
                });

                this.trackEvent('poem_played', { 
                    poem_id: this.currentPoem.id, 
                    poem_title: this.currentPoem.title 
                });
            }
        } catch (error) {
            console.error('TTS Error:', error);
            icon.className = 'fas fa-play';
            text.textContent = ' Listen';
            playBtn.classList.remove('playing');
            window.showToast('Audio not supported in this browser.', 'error', 'Audio Error');
        }
    }

    async handlePdfExport() {
        if (!this.currentPoem) return;

        const exportBtn = document.getElementById('export-pdf');
        const originalHtml = exportBtn.innerHTML;
        
        try {
            exportBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generating...';
            exportBtn.disabled = true;

            await this.pdfExport.exportPoem(this.currentPoem);
            
            window.showToast('PDF exported successfully!', 'success', 'Export Complete');
            this.trackEvent('poem_exported', { 
                poem_id: this.currentPoem.id, 
                poem_title: this.currentPoem.title,
                format: 'pdf'
            });
            
        } catch (error) {
            console.error('PDF Export Error:', error);
            window.showToast('Failed to export PDF. Please try again.', 'error', 'Export Error');
        } finally {
            exportBtn.innerHTML = originalHtml;
            exportBtn.disabled = false;
        }
    }

    handleShare(platform) {
        if (!this.currentPoem) return;

        const poemUrl = `${window.location.origin}${window.location.pathname}?poem=${this.currentPoem.id}`;
        const shareText = `"${this.currentPoem.title}" by ${this.currentPoem.author}\n\n${this.currentPoem.preview}...`;

        try {
            this.socialShare.share(platform, {
                url: poemUrl,
                text: shareText,
                title: this.currentPoem.title
            });

            this.trackEvent('poem_shared', { 
                poem_id: this.currentPoem.id, 
                poem_title: this.currentPoem.title,
                platform: platform
            });

            if (platform === 'copy') {
                window.showToast('Link copied to clipboard!', 'success', 'Share');
            } else {
                window.showToast(`Shared to ${platform}!`, 'success', 'Share');
            }
        } catch (error) {
            console.error('Share Error:', error);
            window.showToast('Failed to share. Please try again.', 'error', 'Share Error');
        }
    }

    trackEvent(eventName, data) {
        // Simple analytics tracking
        console.log('Analytics:', eventName, data);
        
        // Here you could integrate with Google Analytics, Mixpanel, etc.
        if (typeof gtag !== 'undefined') {
            gtag('event', eventName, data);
        }
    }

    escapeHtml(text) {
        const map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        };
        return text.replace(/[&<>"']/g, m => map[m]);
    }
}

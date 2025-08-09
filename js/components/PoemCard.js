// Poem Card Component
export class PoemCard {
    constructor(poem, onCardClick) {
        this.poem = poem;
        this.onCardClick = onCardClick;
    }

    render() {
        const card = document.createElement('div');
        card.className = 'poem-card fade-in-up';
        card.style.opacity = '0';
        
        // Add click handler
        card.addEventListener('click', () => {
            this.onCardClick(this.poem);
        });

        // Add keyboard navigation
        card.setAttribute('tabindex', '0');
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.onCardClick(this.poem);
            }
        });

        card.innerHTML = `
            <div class="poem-card-header">
                <h3 class="poem-title">${this.escapeHtml(this.poem.title)}</h3>
                <p class="poem-author">by ${this.escapeHtml(this.poem.author)}</p>
            </div>
            
            <div class="poem-preview">${this.escapeHtml(this.poem.preview)}</div>
            
            <div class="poem-tags">
                ${this.poem.tags.map(tag => 
                    `<span class="poem-tag">${this.escapeHtml(tag)}</span>`
                ).join('')}
            </div>
            
            <div class="poem-actions">
                <button class="action-btn primary" onclick="event.stopPropagation();">
                    <i class="fas fa-book-open"></i>
                    Read Full
                </button>
                <button class="action-btn" onclick="event.stopPropagation(); this.closest('.poem-card').dispatchEvent(new CustomEvent('quickPlay', {detail: ${this.poem.id}}));">
                    <i class="fas fa-play"></i>
                    Listen
                </button>
            </div>
        `;

        // Handle quick play button
        card.addEventListener('quickPlay', (e) => {
            e.stopPropagation();
            this.handleQuickPlay();
        });

        // Animate in after a short delay
        setTimeout(() => {
            card.style.opacity = '1';
        }, 100);

        return card;
    }

    async handleQuickPlay() {
        const { TextToSpeech } = await import('../services/TextToSpeech.js');
        const tts = new TextToSpeech();
        
        try {
            await tts.speak(this.poem.content);
            window.showToast('Playing poem audio', 'info', 'Audio');
        } catch (error) {
            console.error('Failed to play audio:', error);
            window.showToast('Failed to play audio. Please try again.', 'error', 'Audio Error');
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

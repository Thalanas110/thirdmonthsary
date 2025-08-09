// Social Media Sharing Service
export class SocialShare {
    constructor() {
        this.platforms = {
            twitter: {
                name: 'Twitter',
                baseUrl: 'https://twitter.com/intent/tweet',
                params: {
                    text: 'text',
                    url: 'url',
                    hashtags: 'hashtags'
                }
            },
            facebook: {
                name: 'Facebook',
                baseUrl: 'https://www.facebook.com/sharer/sharer.php',
                params: {
                    url: 'u',
                    quote: 'quote'
                }
            },
            whatsapp: {
                name: 'WhatsApp',
                baseUrl: 'https://wa.me/',
                params: {
                    text: 'text'
                }
            },
            linkedin: {
                name: 'LinkedIn',
                baseUrl: 'https://www.linkedin.com/sharing/share-offsite/',
                params: {
                    url: 'url',
                    title: 'title',
                    summary: 'summary'
                }
            },
            reddit: {
                name: 'Reddit',
                baseUrl: 'https://reddit.com/submit',
                params: {
                    url: 'url',
                    title: 'title'
                }
            },
            pinterest: {
                name: 'Pinterest',
                baseUrl: 'https://pinterest.com/pin/create/button/',
                params: {
                    url: 'url',
                    description: 'description'
                }
            }
        };
    }

    async share(platform, options = {}) {
        if (platform === 'copy') {
            return this.copyToClipboard(options.url || window.location.href);
        }

        if (platform === 'native' && this.isWebShareSupported()) {
            return this.nativeShare(options);
        }

        if (!this.platforms[platform]) {
            throw new Error(`Unsupported platform: ${platform}`);
        }

        const shareUrl = this.buildShareUrl(platform, options);
        this.openShareWindow(shareUrl, platform);
        
        return true;
    }

    buildShareUrl(platform, options) {
        const config = this.platforms[platform];
        const url = new URL(config.baseUrl);
        
        // Handle special cases
        if (platform === 'whatsapp') {
            // WhatsApp uses a different format
            const text = encodeURIComponent(`${options.text}\n\n${options.url}`);
            return `${config.baseUrl}?text=${text}`;
        }

        // Build standard query parameters
        Object.entries(config.params).forEach(([optionKey, paramKey]) => {
            if (options[optionKey]) {
                let value = options[optionKey];
                
                // Special handling for different platforms
                if (platform === 'twitter' && optionKey === 'text') {
                    // Twitter has character limits, so truncate if necessary
                    value = this.truncateForTwitter(value, options.url);
                } else if (platform === 'facebook' && optionKey === 'text') {
                    // Facebook uses 'quote' parameter for text
                    paramKey = 'quote';
                }
                
                url.searchParams.append(paramKey, value);
            }
        });

        // Add hashtags for Twitter
        if (platform === 'twitter' && options.hashtags) {
            url.searchParams.append('hashtags', options.hashtags);
        }

        return url.toString();
    }

    openShareWindow(url, platform) {
        const windowFeatures = this.getWindowFeatures(platform);
        
        const shareWindow = window.open(
            url,
            `share-${platform}`,
            windowFeatures
        );

        // Focus the share window
        if (shareWindow) {
            shareWindow.focus();
        }

        return shareWindow;
    }

    getWindowFeatures(platform) {
        const defaultFeatures = {
            width: 600,
            height: 400,
            scrollbars: 'yes',
            resizable: 'yes',
            toolbar: 'no',
            menubar: 'no',
            location: 'no',
            directories: 'no',
            status: 'no'
        };

        // Platform-specific adjustments
        const platformFeatures = {
            twitter: { width: 550, height: 420 },
            facebook: { width: 626, height: 436 },
            linkedin: { width: 520, height: 570 },
            pinterest: { width: 750, height: 320 }
        };

        const features = { ...defaultFeatures, ...(platformFeatures[platform] || {}) };
        
        // Center the window
        const left = Math.round((screen.width / 2) - (features.width / 2));
        const top = Math.round((screen.height / 2) - (features.height / 2));
        
        features.left = left;
        features.top = top;

        // Convert to string format
        return Object.entries(features)
            .map(([key, value]) => `${key}=${value}`)
            .join(',');
    }

    async copyToClipboard(text) {
        try {
            if (navigator.clipboard && window.isSecureContext) {
                // Modern clipboard API
                await navigator.clipboard.writeText(text);
                return true;
            } else {
                // Fallback for older browsers
                return this.fallbackCopyToClipboard(text);
            }
        } catch (error) {
            console.error('Failed to copy to clipboard:', error);
            throw new Error('Failed to copy to clipboard');
        }
    }

    fallbackCopyToClipboard(text) {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.cssText = `
            position: fixed;
            top: -9999px;
            left: -9999px;
            opacity: 0;
            pointer-events: none;
        `;
        
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        
        try {
            const successful = document.execCommand('copy');
            document.body.removeChild(textArea);
            
            if (!successful) {
                throw new Error('Copy command failed');
            }
            
            return true;
        } catch (error) {
            document.body.removeChild(textArea);
            throw error;
        }
    }

    isWebShareSupported() {
        return navigator.share && /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }

    async nativeShare(options) {
        try {
            await navigator.share({
                title: options.title || 'Mwaaaaaa',
                text: options.text || '',
                url: options.url || window.location.href
            });
            return true;
        } catch (error) {
            if (error.name !== 'AbortError') {
                console.error('Native share failed:', error);
                throw error;
            }
            return false;
        }
    }

    truncateForTwitter(text, url = '') {
        const urlLength = url ? 23 : 0; // Twitter's URL length
        const maxLength = 280 - urlLength - 1; // Leave space for URL and spacing
        
        if (text.length <= maxLength) {
            return text;
        }
        
        return text.substring(0, maxLength - 3) + '...';
    }

    // Generate share text for poems
    generatePoemShareText(poem) {
        const preview = poem.preview || poem.content.substring(0, 100) + '...';
        return `"${poem.title}" by ${poem.author}\n\n${preview}`;
    }

    // Generate hashtags for poems
    generatePoemHashtags(poem) {
        const baseHashtags = ['poetry', 'poems', 'literature'];
        const poemHashtags = poem.tags
            .map(tag => tag.replace(/\s+/g, '').toLowerCase())
            .filter(tag => tag.length > 2);
        
        return [...baseHashtags, ...poemHashtags].slice(0, 5).join(',');
    }

    // Get platform-specific share data for poems
    getPoemShareData(poem, platform) {
        const baseUrl = `${window.location.origin}${window.location.pathname}?poem=${poem.id}`;
        const shareText = this.generatePoemShareText(poem);
        
        const shareData = {
            url: baseUrl,
            title: `${poem.title} - Mwaaaaaa`,
            text: shareText
        };

        // Platform-specific customizations
        switch (platform) {
            case 'twitter':
                shareData.hashtags = this.generatePoemHashtags(poem);
                break;
                
            case 'facebook':
                shareData.quote = shareText;
                break;
                
            case 'linkedin':
                shareData.summary = shareText;
                break;
                
            case 'pinterest':
                shareData.description = shareText;
                break;
        }

        return shareData;
    }

    // Get available share platforms
    getAvailablePlatforms() {
        const platforms = Object.keys(this.platforms);
        
        if (this.isWebShareSupported()) {
            platforms.unshift('native');
        }
        
        platforms.push('copy');
        
        return platforms;
    }
}

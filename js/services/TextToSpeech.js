// Text-to-Speech Service
export class TextToSpeech {
    constructor() {
        this.synthesis = window.speechSynthesis;
        this.currentUtterance = null;
        this.isSupported = 'speechSynthesis' in window;
        this.voices = [];
        this.preferredVoice = null;
        
        this.init();
    }

    init() {
        if (!this.isSupported) {
            console.warn('Speech synthesis not supported in this browser');
            return;
        }

        // Load voices
        this.loadVoices();
        
        // Voices loaded event (some browsers load voices asynchronously)
        if (this.synthesis.onvoiceschanged !== undefined) {
            this.synthesis.onvoiceschanged = () => {
                this.loadVoices();
            };
        }
    }

    loadVoices() {
        this.voices = this.synthesis.getVoices();
        this.selectPreferredVoice();
    }

    selectPreferredVoice() {
        if (this.voices.length === 0) return;

        // Prefer English voices
        const englishVoices = this.voices.filter(voice => 
            voice.lang.startsWith('en-')
        );

        // Look for high-quality voices first
        const preferredNames = [
            'Google UK English Female',
            'Google US English',
            'Microsoft Zira - English (United States)',
            'Alex',
            'Samantha',
            'Karen',
            'Moira'
        ];

        for (const name of preferredNames) {
            const voice = englishVoices.find(v => v.name.includes(name));
            if (voice) {
                this.preferredVoice = voice;
                return;
            }
        }

        // Fallback to first English voice or first available voice
        this.preferredVoice = englishVoices[0] || this.voices[0];
    }

    async speak(text, options = {}) {
        if (!this.isSupported) {
            throw new Error('Speech synthesis not supported');
        }

        // Stop any current speech
        this.stop();

        return new Promise((resolve, reject) => {
            const utterance = new SpeechSynthesisUtterance(text);
            
            // Configure utterance
            this.configureUtterance(utterance, options);
            
            // Set up event handlers
            utterance.onend = () => {
                this.currentUtterance = null;
                if (options.onEnd) options.onEnd();
                resolve();
            };

            utterance.onerror = (event) => {
                this.currentUtterance = null;
                const error = new Error(`Speech synthesis error: ${event.error}`);
                if (options.onError) options.onError(error);
                reject(error);
            };

            utterance.onstart = () => {
                if (options.onStart) options.onStart();
            };

            utterance.onpause = () => {
                if (options.onPause) options.onPause();
            };

            utterance.onresume = () => {
                if (options.onResume) options.onResume();
            };

            // Store current utterance
            this.currentUtterance = utterance;
            
            // Start speaking
            this.synthesis.speak(utterance);
        });
    }

    configureUtterance(utterance, options) {
        // Set voice
        if (this.preferredVoice) {
            utterance.voice = this.preferredVoice;
        }

        // Configure speech parameters
        utterance.rate = options.rate || 0.9; // Slightly slower for poetry
        utterance.pitch = options.pitch || 1.0;
        utterance.volume = options.volume || 1.0;
        
        // Set language
        utterance.lang = options.lang || 'en-US';
    }

    stop() {
        if (this.isSupported && this.synthesis.speaking) {
            this.synthesis.cancel();
            this.currentUtterance = null;
        }
    }

    pause() {
        if (this.isSupported && this.synthesis.speaking) {
            this.synthesis.pause();
        }
    }

    resume() {
        if (this.isSupported && this.synthesis.paused) {
            this.synthesis.resume();
        }
    }

    isPlaying() {
        return this.isSupported && this.synthesis.speaking;
    }

    isPaused() {
        return this.isSupported && this.synthesis.paused;
    }

    // Get available voices
    getVoices() {
        return this.voices;
    }

    // Set preferred voice
    setVoice(voiceName) {
        const voice = this.voices.find(v => v.name === voiceName);
        if (voice) {
            this.preferredVoice = voice;
            return true;
        }
        return false;
    }

    // Check if TTS is supported
    isSupported() {
        return this.isSupported;
    }

    // Preprocess text for better speech
    preprocessText(text) {
        return text
            // Add pauses after punctuation
            .replace(/\./g, '.')
            .replace(/,/g, ',')
            .replace(/;/g, ';')
            .replace(/:/g, ':')
            // Add extra pause for line breaks in poetry
            .replace(/\n/g, '... ')
            // Remove excessive whitespace
            .replace(/\s+/g, ' ')
            .trim();
    }

    // Speak poem with appropriate pacing
    async speakPoem(poemText, options = {}) {
        const processedText = this.preprocessText(poemText);
        
        const poemOptions = {
            rate: 0.8, // Slower for poetry
            pitch: 1.1, // Slightly higher pitch for expressiveness
            ...options
        };

        return this.speak(processedText, poemOptions);
    }
}

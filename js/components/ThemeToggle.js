// Theme Toggle Component
import { storage } from '../utils/storage.js';

export class ThemeToggle {
    constructor() {
        this.button = document.getElementById('theme-toggle');
        this.currentTheme = storage.get('theme', 'dark');
        
        this.init();
    }

    init() {
        this.updateIcon();
        this.setupEventListener();
    }

    setupEventListener() {
        this.button.addEventListener('click', () => {
            this.toggle();
        });

        // Keyboard support
        this.button.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.toggle();
            }
        });

        // Listen for system theme changes
        if (window.matchMedia) {
            const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            mediaQuery.addEventListener('change', (e) => {
                if (!storage.get('theme-manual-override', false)) {
                    this.setTheme(e.matches ? 'dark' : 'light');
                }
            });
        }
    }

    toggle() {
        const newTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
        this.setTheme(newTheme);
        storage.set('theme-manual-override', true);
        
        // Add visual feedback
        this.button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.button.style.transform = 'scale(1)';
        }, 150);

        // Track theme change
        console.log('Theme changed to:', newTheme);
    }

    setTheme(theme) {
        this.currentTheme = theme;
        document.body.className = `${theme}-theme`;
        storage.set('theme', theme);
        this.updateIcon();
        this.announceThemeChange(theme);
    }

    updateIcon() {
        const icon = this.button.querySelector('i');
        
        if (this.currentTheme === 'dark') {
            icon.className = 'fas fa-sun';
            this.button.setAttribute('aria-label', 'Switch to light mode');
            this.button.title = 'Switch to light mode';
        } else {
            icon.className = 'fas fa-moon';
            this.button.setAttribute('aria-label', 'Switch to dark mode');
            this.button.title = 'Switch to dark mode';
        }

        // Add transition effect
        icon.style.transform = 'rotate(360deg)';
        setTimeout(() => {
            icon.style.transform = 'rotate(0deg)';
        }, 300);
    }

    announceThemeChange(theme) {
        // Create a live region for screen readers
        const announcement = document.createElement('div');
        announcement.setAttribute('aria-live', 'polite');
        announcement.setAttribute('aria-atomic', 'true');
        announcement.className = 'sr-only';
        announcement.textContent = `Switched to ${theme} mode`;
        
        document.body.appendChild(announcement);
        
        setTimeout(() => {
            document.body.removeChild(announcement);
        }, 1000);
    }

    // Get current theme
    getCurrentTheme() {
        return this.currentTheme;
    }

    // Check if dark mode
    isDarkMode() {
        return this.currentTheme === 'dark';
    }
}

// CSS for screen reader only content
const style = document.createElement('style');
style.textContent = `
    .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
    }
`;
document.head.appendChild(style);

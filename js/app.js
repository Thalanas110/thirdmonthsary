// Main Application Entry Point
import { PoemCard } from './components/PoemCard.js';
import { PoemModal } from './components/PoemModal.js';
import { ThemeToggle } from './components/ThemeToggle.js';
import { SearchFilter } from './components/SearchFilter.js';
import { poems } from './data/poems.js';
import { storage } from './utils/storage.js';

class App {
    constructor() {
        this.poems = poems;
        this.filteredPoems = [...this.poems];
        this.currentFilter = 'all';
        this.searchQuery = '';
        
        this.init();
    }

    async init() {
        try {
            this.initializeTheme();
            await this.initializeComponents();
            this.renderPoems();
            this.setupEventListeners();
            this.handleRouting();
            this.hideLoadingScreen();
        } catch (error) {
            console.error('App initialization error:', error);
            this.hideLoadingScreen();
            window.showToast('App failed to load properly. Please refresh the page.', 'error', 'Loading Error');
        }
    }

    initializeTheme() {
        const savedTheme = storage.get('theme', 'dark');
        document.body.className = `${savedTheme}-theme`;
    }

    async initializeComponents() {
        try {
            // Initialize components
            this.themeToggle = new ThemeToggle();
            this.searchFilter = new SearchFilter(this.handleSearch.bind(this), this.handleFilter.bind(this));
            this.poemModal = new PoemModal();
            
            // Setup global event handlers
            this.setupGlobalEvents();
            
            // Small delay to ensure DOM is ready
            await new Promise(resolve => setTimeout(resolve, 100));
        } catch (error) {
            console.error('Component initialization error:', error);
            throw error;
        }
    }

    setupGlobalEvents() {
        // Close modal on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.poemModal.close();
            }
        });

        // Close modal on backdrop click
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal')) {
                this.poemModal.close();
            }
        });

        // Handle share dropdown
        document.addEventListener('click', (e) => {
            const shareDropdowns = document.querySelectorAll('.share-dropdown');
            shareDropdowns.forEach(dropdown => {
                if (!dropdown.contains(e.target)) {
                    dropdown.classList.remove('active');
                }
            });
        });
    }

    handleSearch(query) {
        this.searchQuery = query.toLowerCase();
        this.filterPoems();
    }

    handleFilter(filter) {
        this.currentFilter = filter;
        this.filterPoems();
    }

    filterPoems() {
        this.filteredPoems = this.poems.filter(poem => {
            const matchesSearch = this.searchQuery === '' || 
                poem.title.toLowerCase().includes(this.searchQuery) ||
                poem.content.toLowerCase().includes(this.searchQuery) ||
                poem.tags.some(tag => tag.toLowerCase().includes(this.searchQuery));

            const matchesFilter = this.currentFilter === 'all' || 
                poem.tags.includes(this.currentFilter);

            return matchesSearch && matchesFilter;
        });

        this.renderPoems();
    }

    renderPoems() {
        const grid = document.getElementById('poems-grid');
        const noResults = document.getElementById('no-results');

        if (this.filteredPoems.length === 0) {
            grid.style.display = 'none';
            noResults.style.display = 'block';
            return;
        }

        grid.style.display = 'grid';
        noResults.style.display = 'none';

        grid.innerHTML = '';
        
        this.filteredPoems.forEach((poem, index) => {
            const poemCard = new PoemCard(poem, this.handlePoemClick.bind(this));
            const cardElement = poemCard.render();
            
            // Add staggered animation delay
            cardElement.style.animationDelay = `${index * 0.1}s`;
            
            grid.appendChild(cardElement);
        });
    }

    handlePoemClick(poem) {
        this.poemModal.open(poem);
        
        // Update URL without page reload
        const url = new URL(window.location);
        url.searchParams.set('poem', poem.id);
        window.history.pushState({ poemId: poem.id }, '', url);
    }

    handleRouting() {
        // Handle initial URL with poem parameter
        const urlParams = new URLSearchParams(window.location.search);
        const poemId = urlParams.get('poem');
        
        if (poemId) {
            const poem = this.poems.find(p => p.id === parseInt(poemId));
            if (poem) {
                this.poemModal.open(poem);
            }
        }

        // Handle browser back/forward buttons
        window.addEventListener('popstate', (e) => {
            if (e.state && e.state.poemId) {
                const poem = this.poems.find(p => p.id === e.state.poemId);
                if (poem) {
                    this.poemModal.open(poem);
                }
            } else {
                this.poemModal.close();
            }
        });
    }

    setupEventListeners() {
        // Smooth scroll for internal links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Header scroll effect
        let lastScrollY = window.scrollY;
        window.addEventListener('scroll', () => {
            const header = document.querySelector('.header');
            const currentScrollY = window.scrollY;
            
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                header.style.transform = 'translateY(-100%)';
            } else {
                header.style.transform = 'translateY(0)';
            }
            
            lastScrollY = currentScrollY;
        });
    }

    hideLoadingScreen() {
        setTimeout(() => {
            const loadingScreen = document.getElementById('loading-screen');
            if (loadingScreen) {
                loadingScreen.classList.add('hidden');
                
                setTimeout(() => {
                    if (loadingScreen && loadingScreen.parentNode) {
                        loadingScreen.remove();
                    }
                }, 500);
            }
        }, 500); // Reduced from 1000ms to 500ms for faster loading
    }

    // Utility method to show toast notifications
    static showToast(message, type = 'info', title = '') {
        const container = document.getElementById('toast-container');
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        
        const iconMap = {
            success: 'fas fa-check-circle',
            error: 'fas fa-exclamation-circle',
            info: 'fas fa-info-circle'
        };

        toast.innerHTML = `
            <i class="toast-icon ${iconMap[type]}"></i>
            <div class="toast-content">
                ${title ? `<div class="toast-title">${title}</div>` : ''}
                <div class="toast-message">${message}</div>
            </div>
        `;

        container.appendChild(toast);

        // Trigger show animation
        setTimeout(() => toast.classList.add('show'), 100);

        // Auto remove after 5 seconds
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => {
                if (toast.parentNode) {
                    toast.parentNode.removeChild(toast);
                }
            }, 300);
        }, 5000);

        return toast;
    }
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.app = new App();
});

// Export for global access
window.showToast = App.showToast;

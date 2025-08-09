// Search and Filter Component
export class SearchFilter {
    constructor(onSearch, onFilter) {
        this.onSearch = onSearch;
        this.onFilter = onFilter;
        this.searchInput = document.getElementById('search-input');
        this.clearButton = document.getElementById('clear-search');
        this.filterButtons = document.querySelectorAll('.filter-btn');
        
        this.debounceTimer = null;
        this.currentFilter = 'all';
        
        this.init();
    }

    init() {
        this.setupSearchListeners();
        this.setupFilterListeners();
        this.setupClearButton();
    }

    setupSearchListeners() {
        // Search input with debouncing
        this.searchInput.addEventListener('input', (e) => {
            const query = e.target.value.trim();
            
            // Show/hide clear button
            if (query.length > 0) {
                this.clearButton.classList.add('visible');
            } else {
                this.clearButton.classList.remove('visible');
            }

            // Debounced search
            clearTimeout(this.debounceTimer);
            this.debounceTimer = setTimeout(() => {
                this.onSearch(query);
                this.trackSearchEvent(query);
            }, 300);
        });

        // Handle Enter key
        this.searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                clearTimeout(this.debounceTimer);
                this.onSearch(this.searchInput.value.trim());
            }
        });

        // Search focus effects
        this.searchInput.addEventListener('focus', () => {
            this.searchInput.parentElement.classList.add('focused');
        });

        this.searchInput.addEventListener('blur', () => {
            this.searchInput.parentElement.classList.remove('focused');
        });
    }

    setupFilterListeners() {
        this.filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                this.setActiveFilter(button);
                const filter = button.dataset.filter;
                this.currentFilter = filter;
                this.onFilter(filter);
                this.trackFilterEvent(filter);
            });

            // Keyboard support
            button.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    button.click();
                }
            });
        });
    }

    setupClearButton() {
        this.clearButton.addEventListener('click', () => {
            this.clearSearch();
        });

        // Keyboard support
        this.clearButton.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.clearSearch();
            }
        });
    }

    setActiveFilter(activeButton) {
        this.filterButtons.forEach(button => {
            button.classList.remove('active');
        });
        activeButton.classList.add('active');

        // Add visual feedback
        activeButton.style.transform = 'scale(0.95)';
        setTimeout(() => {
            activeButton.style.transform = 'scale(1)';
        }, 150);
    }

    clearSearch() {
        this.searchInput.value = '';
        this.clearButton.classList.remove('visible');
        this.onSearch('');
        this.searchInput.focus();

        // Add visual feedback
        this.clearButton.style.transform = 'scale(0.9)';
        setTimeout(() => {
            this.clearButton.style.transform = 'scale(1)';
        }, 150);
    }

    // Public methods for external control
    setSearchQuery(query) {
        this.searchInput.value = query;
        if (query.length > 0) {
            this.clearButton.classList.add('visible');
        } else {
            this.clearButton.classList.remove('visible');
        }
        this.onSearch(query);
    }

    setFilter(filter) {
        const button = document.querySelector(`[data-filter="${filter}"]`);
        if (button) {
            this.setActiveFilter(button);
            this.currentFilter = filter;
            this.onFilter(filter);
        }
    }

    getSearchQuery() {
        return this.searchInput.value.trim();
    }

    getCurrentFilter() {
        return this.currentFilter;
    }

    // Analytics tracking
    trackSearchEvent(query) {
        if (query.length > 0) {
            console.log('Search performed:', query);
            // Here you could send to analytics service
        }
    }

    trackFilterEvent(filter) {
        console.log('Filter applied:', filter);
        // Here you could send to analytics service
    }

    // Accessibility announcements
    announceResults(count) {
        const announcement = document.createElement('div');
        announcement.setAttribute('aria-live', 'polite');
        announcement.setAttribute('aria-atomic', 'true');
        announcement.className = 'sr-only';
        
        let message;
        if (count === 0) {
            message = 'No poems found for your search criteria';
        } else if (count === 1) {
            message = '1 poem found';
        } else {
            message = `${count} poems found`;
        }
        
        announcement.textContent = message;
        document.body.appendChild(announcement);
        
        setTimeout(() => {
            if (document.body.contains(announcement)) {
                document.body.removeChild(announcement);
            }
        }, 1000);
    }

    // Reset all filters and search
    reset() {
        this.clearSearch();
        this.setFilter('all');
    }
}

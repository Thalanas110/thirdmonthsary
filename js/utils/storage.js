// Local Storage Utility
export const storage = {
    // Get value from localStorage with optional default
    get(key, defaultValue = null) {
        try {
            const item = localStorage.getItem(key);
            if (item === null) {
                return defaultValue;
            }
            
            // Try to parse JSON, fallback to string
            try {
                return JSON.parse(item);
            } catch {
                return item;
            }
        } catch (error) {
            console.warn('Failed to get from localStorage:', error);
            return defaultValue;
        }
    },

    // Set value in localStorage
    set(key, value) {
        try {
            const serializedValue = typeof value === 'string' ? value : JSON.stringify(value);
            localStorage.setItem(key, serializedValue);
            return true;
        } catch (error) {
            console.warn('Failed to set localStorage:', error);
            return false;
        }
    },

    // Remove value from localStorage
    remove(key) {
        try {
            localStorage.removeItem(key);
            return true;
        } catch (error) {
            console.warn('Failed to remove from localStorage:', error);
            return false;
        }
    },

    // Clear all localStorage
    clear() {
        try {
            localStorage.clear();
            return true;
        } catch (error) {
            console.warn('Failed to clear localStorage:', error);
            return false;
        }
    },

    // Check if localStorage is available
    isAvailable() {
        try {
            const test = '__storage_test__';
            localStorage.setItem(test, 'test');
            localStorage.removeItem(test);
            return true;
        } catch {
            return false;
        }
    },

    // Get storage usage info
    getStorageInfo() {
        if (!this.isAvailable()) {
            return { available: false };
        }

        try {
            let totalSize = 0;
            let itemCount = 0;
            const items = {};

            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                const value = localStorage.getItem(key);
                const size = (key.length + value.length) * 2; // Rough estimate in bytes
                
                items[key] = {
                    size: size,
                    value: value.substring(0, 50) + (value.length > 50 ? '...' : '')
                };
                
                totalSize += size;
                itemCount++;
            }

            return {
                available: true,
                totalSize: totalSize,
                itemCount: itemCount,
                items: items,
                formattedSize: this.formatBytes(totalSize)
            };
        } catch (error) {
            console.warn('Failed to get storage info:', error);
            return { available: false, error: error.message };
        }
    },

    // Format bytes to human readable format
    formatBytes(bytes, decimals = 2) {
        if (bytes === 0) return '0 Bytes';

        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];

        const i = Math.floor(Math.log(bytes) / Math.log(k));

        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    },

    // Set with expiration
    setWithExpiry(key, value, ttl) {
        const now = new Date().getTime();
        const item = {
            value: value,
            expiry: now + ttl
        };
        return this.set(key, item);
    },

    // Get with expiration check
    getWithExpiry(key, defaultValue = null) {
        const item = this.get(key);
        
        if (!item || typeof item !== 'object' || !item.hasOwnProperty('expiry')) {
            return defaultValue;
        }

        const now = new Date().getTime();
        
        if (now > item.expiry) {
            this.remove(key);
            return defaultValue;
        }
        
        return item.value;
    },

    // App-specific storage methods
    app: {
        // User preferences
        setPreference(key, value) {
            const prefs = storage.get('user_preferences', {});
            prefs[key] = value;
            return storage.set('user_preferences', prefs);
        },

        getPreference(key, defaultValue = null) {
            const prefs = storage.get('user_preferences', {});
            return prefs.hasOwnProperty(key) ? prefs[key] : defaultValue;
        },

        // Favorite poems
        addFavorite(poemId) {
            const favorites = storage.get('favorite_poems', []);
            if (!favorites.includes(poemId)) {
                favorites.push(poemId);
                storage.set('favorite_poems', favorites);
            }
            return favorites;
        },

        removeFavorite(poemId) {
            const favorites = storage.get('favorite_poems', []);
            const filtered = favorites.filter(id => id !== poemId);
            storage.set('favorite_poems', filtered);
            return filtered;
        },

        getFavorites() {
            return storage.get('favorite_poems', []);
        },

        isFavorite(poemId) {
            return this.getFavorites().includes(poemId);
        },

        // Recently viewed poems
        addToHistory(poemId) {
            const history = storage.get('poem_history', []);
            
            // Remove if already exists
            const filtered = history.filter(id => id !== poemId);
            
            // Add to beginning
            filtered.unshift(poemId);
            
            // Keep only last 20 items
            const trimmed = filtered.slice(0, 20);
            
            storage.set('poem_history', trimmed);
            return trimmed;
        },

        getHistory() {
            return storage.get('poem_history', []);
        },

        clearHistory() {
            return storage.remove('poem_history');
        },

        // Search history
        addToSearchHistory(query) {
            if (!query || query.trim().length === 0) return;
            
            const searches = storage.get('search_history', []);
            const trimmedQuery = query.trim().toLowerCase();
            
            // Remove if already exists
            const filtered = searches.filter(search => search !== trimmedQuery);
            
            // Add to beginning
            filtered.unshift(trimmedQuery);
            
            // Keep only last 10 searches
            const trimmed = filtered.slice(0, 10);
            
            storage.set('search_history', trimmed);
            return trimmed;
        },

        getSearchHistory() {
            return storage.get('search_history', []);
        },

        clearSearchHistory() {
            return storage.remove('search_history');
        }
    }
};

// Export for backward compatibility
export default storage;

// PDF Export Service
export class PdfExport {
    constructor() {
        this.isLibraryLoaded = typeof html2canvas !== 'undefined' && typeof jsPDF !== 'undefined';
        
        if (!this.isLibraryLoaded) {
            console.warn('PDF export libraries not loaded');
        }
    }

    async exportPoem(poem) {
        if (!this.isLibraryLoaded) {
            throw new Error('PDF export libraries not available');
        }

        try {
            // Create temporary container for PDF content
            const container = this.createPdfContainer(poem);
            document.body.appendChild(container);

            // Generate canvas from HTML
            const canvas = await html2canvas(container, {
                backgroundColor: null,
                scale: 2, // Higher quality
                useCORS: true,
                allowTaint: true,
                logging: false,
                width: 800,
                height: 1000
            });

            // Clean up temporary container
            document.body.removeChild(container);

            // Create PDF
            const pdf = new jsPDF.jsPDF({
                orientation: 'portrait',
                unit: 'px',
                format: [800, 1000]
            });

            // Add canvas to PDF
            const imgData = canvas.toDataURL('image/png');
            pdf.addImage(imgData, 'PNG', 0, 0, 800, 1000);

            // Download PDF
            const filename = `${this.sanitizeFilename(poem.title)}.pdf`;
            pdf.save(filename);

            return filename;
        } catch (error) {
            console.error('PDF Export Error:', error);
            throw new Error('Failed to generate PDF');
        }
    }

    createPdfContainer(poem) {
        const container = document.createElement('div');
        container.style.cssText = `
            position: fixed;
            top: -9999px;
            left: -9999px;
            width: 800px;
            height: 1000px;
            padding: 60px;
            box-sizing: border-box;
            background: url('../attached_assets/download (2)_1754745388036.jpg') center/cover no-repeat;
            position: relative;
            color: #e2e8f0;
            font-family: 'Playfair Display', serif;
            overflow: hidden;
        `;

        // Add overlay for better text readability
        const overlay = document.createElement('div');
        overlay.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: 
                linear-gradient(rgba(15, 6, 32, 0.7), rgba(15, 6, 32, 0.4)),
                radial-gradient(2px 2px at 20px 30px, rgba(255,255,255,0.8), transparent),
                radial-gradient(2px 2px at 40px 70px, rgba(255,255,255,0.6), transparent),
                radial-gradient(1px 1px at 90px 40px, rgba(255,255,255,0.9), transparent),
                radial-gradient(1px 1px at 130px 80px, rgba(255,255,255,0.7), transparent),
                radial-gradient(2px 2px at 160px 30px, rgba(255,255,255,0.8), transparent);
            background-repeat: repeat;
            background-size: 100% 100%, 200px 100px, 200px 100px, 200px 100px, 200px 100px, 200px 100px;
            opacity: 0.9;
            pointer-events: none;
        `;

        const content = document.createElement('div');
        content.style.cssText = `
            position: relative;
            z-index: 1;
            height: 100%;
            display: flex;
            flex-direction: column;
        `;

        content.innerHTML = `
            <div style="text-align: center; margin-bottom: 40px;">
                <h1 style="font-size: 36px; margin: 0 0 10px 0; background: linear-gradient(135deg, #9f7aea 0%, #ed64a6 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">${this.escapeHtml(poem.title)}</h1>
                <p style="font-size: 18px; color: #cbd5e0; margin: 0; font-style: italic;">by ${this.escapeHtml(poem.author)}</p>
            </div>
            
            <div style="flex: 1; display: flex; align-items: center; justify-content: center;">
                <div style="background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.2); border-radius: 20px; padding: 40px; max-width: 600px; border-left: 4px solid #9f7aea;">
                    <div style="font-size: 18px; line-height: 1.8; white-space: pre-line;">${this.escapeHtml(poem.content)}</div>
                </div>
            </div>
            
            <div style="margin-top: 40px;">
                <div style="display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; margin-bottom: 20px;">
                    ${poem.tags.map(tag => 
                        `<span style="background: rgba(159, 122, 234, 0.2); color: #9f7aea; padding: 4px 12px; border-radius: 16px; font-size: 12px; font-weight: 500;">${this.escapeHtml(tag)}</span>`
                    ).join('')}
                </div>
                <div style="text-align: center; color: #a0aec0; font-size: 14px;">
                    Generated from Mwaaaaaa • ${new Date().toLocaleDateString()}
                </div>
            </div>
        `;

        container.appendChild(overlay);
        container.appendChild(content);

        return container;
    }

    sanitizeFilename(filename) {
        return filename
            .replace(/[^\w\s-]/g, '') // Remove special characters
            .replace(/[-\s]+/g, '-') // Replace spaces and multiple hyphens with single hyphen
            .toLowerCase()
            .trim();
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

    // Export poem as image
    async exportAsImage(poem, format = 'png') {
        if (!this.isLibraryLoaded) {
            throw new Error('Export libraries not available');
        }

        try {
            const container = this.createPdfContainer(poem);
            document.body.appendChild(container);

            const canvas = await html2canvas(container, {
                backgroundColor: null,
                scale: 2,
                useCORS: true,
                allowTaint: true,
                logging: false,
                width: 800,
                height: 1000
            });

            document.body.removeChild(container);

            // Create download link
            const link = document.createElement('a');
            link.download = `${this.sanitizeFilename(poem.title)}.${format}`;
            link.href = canvas.toDataURL(`image/${format}`);
            
            // Trigger download
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            return link.download;
        } catch (error) {
            console.error('Image Export Error:', error);
            throw new Error('Failed to generate image');
        }
    }

    // Check if export is supported
    isSupported() {
        return this.isLibraryLoaded;
    }
}

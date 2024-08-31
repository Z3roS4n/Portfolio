// loard portfolio images from json file
/*
                <div class="gallery-element" id="elem-1">
                    <img src="assets/images/500_Lira_1_Sony.jpg" alt="Photo 1">
                    <h3>
                        500 Lire
                    </h3>
                    <p>
                        Foto di una moneta da 500 Lire Italiane scattata con una Sony A6000.
                    </p>
                </div>
*/

/* 

{
    "gallery": [
        {
            "id": 1,
            "title": "500 Lire",
            "description": "Foto di una moneta da 500 Lire Italiane scattata con una Sony A6000.",
            "image": "./assets/images/500_Lira_1_Sony.jpg"
        }
    ]
}

*/

class LoadPortfolio {

    async loadPortfolio() {
        const response = await fetch('assets/portfolio-data/images-gallery.json');
        const data = await response.json();
        return data;  
    }

    async loadPortfolioImages() {
        const portfolioData = await this.loadPortfolio();
        return portfolioData.gallery;
    }

    async loadPortfolioGallery() {
        const portfolioImages = await this.loadPortfolioImages();
        const galleryElement = document.querySelector('.gallery');
        this.loadGallery(galleryElement, portfolioImages);
    }

    loadGallery(element, images) {

        for (let i = 0; i < (images.length > 10 ? 10 : images.length); i++) {
            const image = images[i];
            const galleryElement = document.createElement('div');
            galleryElement.classList.add('gallery-element');
            galleryElement.id = `elem-${image.id}`;
            galleryElement.innerHTML = `
                <img src="${image.image}" alt="${image.alt}">
                <h3>
                    ${image.title}
                </h3>
                <p>
                    ${image.description}
                </p>
            `;
            element.appendChild(galleryElement);
            if(i == 9) {
                const galleryElement = document.createElement('div');
                galleryElement.classList.add('gallery-expand-btn-div');
                galleryElement.innerHTML = `
                    <span class="gallery-expand-button" id="g-expand">Mostra di più</span>
                `;
                element.appendChild(galleryElement);
            }
        }
    }
}

const Portfolio = new LoadPortfolio();
Portfolio.loadPortfolioGallery();

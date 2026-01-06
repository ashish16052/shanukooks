document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Recipe data - loaded from external JSON file for maintainability
    // For static sites, we embed the data to avoid fetch issues with file:// protocol
    const recipes = [
        {
            "title": "Banana Apple Cinnamon Cake (Air Fryer)",
            "description": "A moist and flavorful cake made with bananas, apples, and warm cinnamon - perfect for your air fryer!",
            "url": "recipes/banana-apple-cinnamon-cake/index.html"
        },
        {
            "title": "Sweet Potato Chocolate Cake (Air Fryer)",
            "description": "Decadent chocolate cake with sweet potato for extra moisture and nutrition - air fryer friendly!",
            "url": "recipes/sweet-potato-chocolate-cake/index.html"
        }
    ];

    // Load recipes into grid
    const recipesContainer = document.querySelector('.recipe-grid');
    if (recipesContainer) {
        recipes.forEach(recipe => {
            // Derive image path from URL (replace index.html with header.JPG)
            const imageUrl = recipe.url.replace('index.html', 'header.JPG');
            const card = document.createElement('div');
            card.className = 'recipe-card';
            card.innerHTML = `
                <img src="${imageUrl}" alt="${recipe.title}" onerror="this.style.display='none'">
                <div class="card-content">
                    <h3>${recipe.title}</h3>
                    <p>${recipe.description}</p>
                </div>
            `;
            card.addEventListener('click', () => {
                window.location.href = recipe.url;
            });
            recipesContainer.appendChild(card);
        });
    }
});
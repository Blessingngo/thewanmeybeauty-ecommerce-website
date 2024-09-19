// script.js

function showCategory(category) {
    const mainContent = document.getElementById('product-main');

    // Define product data
    const products = {
        supplements: `
            <section id="supplements" class="product-category">
                <h2>Supplements</h2>
                <div class="product-grid">
                    <div class="product-item">
                        <img src="images/supplement1.jpg" alt="Supplement Product 1">
                        <h3>Supplement Product 1</h3>
                        <p>Description of Supplement Product 1</p>
                        <p class="product-price">$15.00</p>
                        <button class="add-to-cart">Add to Cart</button>
                    </div>
                    <div class="product-item">
                        <img src="images/supplement2.jpg" alt="Supplement Product 2">
                        <h3>Supplement Product 2</h3>
                        <p>Description of Supplement Product 2</p>
                        <p class="product-price">$20.00</p>
                        <button class="add-to-cart">Add to Cart</button>
                    </div>
                </div>
            </section>
        `,
        skincare: `
            <section id="skincare" class="product-category">
                <h2>Skincare</h2>
                <div class="product-grid">
                    <div class="product-item">
                        <img src="images/skincare1.jpg" alt="Skincare Product 1">
                        <h3>Skincare Product 1</h3>
                        <p>Description of Skincare Product 1</p>
                        <p class="product-price">$35.00</p>
                        <button class="add-to-cart">Add to Cart</button>
                    </div>
                    <div class="product-item">
                        <img src="images/skincare2.jpg" alt="Skincare Product 2">
                        <h3>Skincare Product 2</h3>
                        <p>Description of Skincare Product 2</p>
                        <p class="product-price">$45.00</p>
                        <button class="add-to-cart">Add to Cart</button>
                    </div>
                </div>
            </section>
        `,
        haircare: `
            <section id="haircare" class="product-category">
                <h2>Haircare</h2>
                <div class="product-grid">
                    <div class="product-item">
                        <img src="images/haircare1.jpg" alt="Haircare Product 1">
                        <h3>Haircare Product 1</h3>
                        <p>Description of Haircare Product 1</p>
                        <p class="product-price">$25.00</p>
                        <button class="add-to-cart">Add to Cart</button>
                    </div>
                    <div class="product-item">
                        <img src="images/haircare2.jpg" alt="Haircare Product 2">
                        <h3>Haircare Product 2</h3>
                        <p>Description of Haircare Product 2</p>
                        <p class="product-price">$30.00</p>
                        <button class="add-to-cart">Add to Cart</button>
                    </div>
                </div>
            </section>
        `,
        wellness: `
            <section id="wellness" class="product-category">
                <h2>Health & Wellness</h2>
                <div class="product-grid">
                    <div class="product-item">
                        <img src="images/wellness1.jpg" alt="Wellness Product 1">
                        <h3>Wellness Product 1</h3>
                        <p>Description of Wellness Product 1</p>
                        <p class="product-price">$40.00</p>
                        <button class="add-to-cart">Add to Cart</button>
                    </div>
                    <div class="product-item">
                        <img src="images/wellness2.jpg" alt="Wellness Product 2">
                        <h3>Wellness Product 2</h3>
                        <p>Description of Wellness Product 2</p>
                        <p class="product-price">$50.00</p>
                        <button class="add-to-cart">Add to Cart</button>
                    </div>
                </div>
            </section>
        `,
        fitness: `
            <section id="fitness" class="product-category">
                <h2>Fitness</h2>
                <div class="product-grid">
                    <div class="product-item">
                        <img src="images/fitness1.jpg" alt="Fitness Product 1">
                        <h3>Fitness Product 1</h3>
                        <p>Description of Fitness Product 1</p>
                        <p class="product-price">$55.00</p>
                        <button class="add-to-cart">Add to Cart</button>
                    </div>
                    <div class="product-item">
                        <img src="images/fitness2.jpg" alt="Fitness Product 2">
                        <h3>Fitness Product 2</h3>
                        <p>Description of Fitness Product 2</p>
                        <p class="product-price">$65.00</p>
                        <button class="add-to-cart">Add to Cart</button>
                    </div>
                </div>
            </section>
        `
    };

    // Clear current content
    mainContent.innerHTML = '';

    // Insert the selected category's products
    mainContent.innerHTML = products[category] || '<p>No products found for this category.</p>';
}
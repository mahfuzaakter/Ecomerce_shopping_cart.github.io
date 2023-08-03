    // Product data
    const products = [
        { id: 1, name: "Product 1", price: 10 },
        { id: 2, name: "Product 2", price: 15 },
        { id: 3, name: "Product 3", price: 20 },
        { id: 4, name: "Product 3", price: 30 },
        { id: 5, name: "Product 3", price: 50 }
        
    ];

    // Shopping cart
    let cart = [];

    // Function to add item to the cart
    function addToCart(productId) {
        const product = products.find(p => p.id === productId);

        if (product) {
            cart.push(product);
            updateCartDisplay();
        }
    }

    // Function to remove item from the cart
    function removeFromCart(productId) {
        cart = cart.filter(item => item.id !== productId);
        updateCartDisplay();
    }

    // Function to update the cart display
    function updateCartDisplay() {
        const cartElement = document.getElementById("cart");
        cartElement.innerHTML = "";

        cart.forEach(item => {
            const cartItemDiv = document.createElement("div");
            cartItemDiv.classList.add("cart-item");
            cartItemDiv.innerHTML = `
                <span>${item.name} - $${item.price}</span>
                <button class="remove-button" onclick="removeFromCart(${item.id})">Remove</button>
            `;
            cartElement.appendChild(cartItemDiv);
        });
    }
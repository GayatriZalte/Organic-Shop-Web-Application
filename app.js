const firebaseConfig = {
    apiKey: "AIzaSyDdJmHBWFFiZHvgIiwB32nWeOtkAQ-IAoI",
    authDomain: "mini-shop-db722.firebaseapp.com",
    databaseURL: "https://mini-shop-db722-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "mini-shop-db722",
    storageBucket: "mini-shop-db722.appspot.com",
    messagingSenderId: "887038683373",
    appId: "1:887038683373:web:9e30265f881361b9e644e4"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

class Plant {
    constructor(plaName, colour, image, desc, price) {
        this.plantName = plaName;
        this.colour = colour;
        this.imageURL = image;
        this.description = desc;
        this.price = price;
    }
}

class ElementAttribute {
    constructor(attrName, attValue) {
        this.name = attrName;
        this.value = attValue;
    }
}

class Component {
    constructor(renderHookID, shouldRender = true) {
        this.hookId = renderHookID;
        if (shouldRender) {
            this.render();
        }
    }

    render() {}

    createRootElement(tag, cssClasses, attributes) {
        const rootElement = document.createElement(tag);
        if (cssClasses) {
            rootElement.className = cssClasses;
        }
        if (attributes && attributes.length > 0) {
            for (const attr of attributes) {
                rootElement.setAttribute(attr.name, attr.value);
            }
        }
        document.getElementById(this.hookId).append(rootElement);
        return rootElement;
    }
}

// Enhanced Checkout Form Component with Professional Styling
class CheckoutForm extends Component {
    constructor(renderHookID, cartItems) {
        super(renderHookID, false);
        this.cartItems = cartItems;
        this.injectStyles();
        this.render();
    }

    injectStyles() {
        if (document.getElementById('professional-checkout-styles')) return;
        
        const style = document.createElement('style');
        style.id = 'professional-checkout-styles';
        style.textContent = `
            .checkout-container {
                max-width: 800px;
                margin: 0 auto;
                padding: 20px;
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
                min-height: 100vh;
            }

            .checkout-header {
                text-align: center;
                margin-bottom: 30px;
                padding: 20px;
                background: linear-gradient(135deg, #2c5530 0%, #4caf50 100%);
                color: white;
                border-radius: 15px;
                box-shadow: 0 8px 25px rgba(76, 175, 80, 0.3);
            }

            .checkout-header h2 {
                margin: 0 0 10px 0;
                font-size: 2.2em;
                font-weight: 600;
            }

            .checkout-header h3 {
                margin: 0;
                font-size: 1.2em;
                opacity: 0.9;
                font-weight: 400;
            }

            .checkout-form {
                background: white;
                padding: 30px;
                border-radius: 15px;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
                border: 1px solid #e0e0e0;
            }

            .form-group {
                margin-bottom: 25px;
            }

            .form-group label {
                display: block;
                margin-bottom: 8px;
                font-weight: 600;
                color: #2c5530;
                font-size: 1.1em;
            }

            .form-group input,
            .form-group textarea,
            .form-group select {
                width: 100%;
                padding: 12px 15px;
                border: 2px solid #e0e0e0;
                border-radius: 10px;
                font-size: 1em;
                transition: all 0.3s ease;
                box-sizing: border-box;
            }

            .form-group input:focus,
            .form-group textarea:focus,
            .form-group select:focus {
                outline: none;
                border-color: #4caf50;
                box-shadow: 0 0 0 3px rgba(76, 175, 80, 0.1);
            }

            /* Professional Order Summary Styling */
            .order-summary-section {
                background: linear-gradient(135deg, #e8f5e8 0%, #ffffff 100%);
                border: 2px solid #e3f2fd;
                border-radius: 15px;
                padding: 25px;
                margin: 30px 0;
                box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
            }

            .order-summary-section h4 {
                margin: 0 0 20px 0;
                font-size: 1.4em;
                color: #2c5530;
                font-weight: 700;
                text-align: center;
                border-bottom: 2px solid #4caf50;
                padding-bottom: 15px;
            }

            .order-items {
                margin-bottom: 25px;
            }

            .order-item {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 15px 20px;
                margin-bottom: 12px;
                background: white;
                border: 1px solid #e8f5e8;
                border-radius: 12px;
                box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);
                transition: transform 0.2s ease, box-shadow 0.2s ease;
            }

            .order-item:hover {
                transform: translateY(-2px);
                box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
            }

            .item-details {
                flex: 1;
            }

            .item-name {
                font-weight: 700;
                font-size: 1.1em;
                color: #2c5530;
                margin-bottom: 5px;
            }

            .item-desc {
                color: #666;
                font-size: 0.9em;
                margin-bottom: 5px;
            }

            .item-qty {
                background: linear-gradient(135deg, #4caf50, #45a049);
                color: white;
                padding: 4px 12px;
                border-radius: 20px;
                font-size: 0.8em;
                font-weight: 600;
            }

            .item-price {
                font-weight: 700;
                font-size: 1.2em;
                color: #2c5530;
                background: linear-gradient(135deg, #e8f5e8,#d1efcb);
                padding: 8px 15px;
                border-radius: 25px;
                border: 2px solid #c8e6c9;
            }

            .order-totals {
                background: linear-gradient(135deg, #2c5530 0%, #4caf50 100%);
                color: white;
                padding: 20px;
                border-radius: 12px;
                box-shadow: 0 5px 15px rgba(44, 85, 48, 0.3);
            }

            .total-line {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 8px 0;
                font-size: 1.1em;
            }

            .total-line:not(:last-child) {
                border-bottom: 1px solid rgba(255, 255, 255, 0.2);
            }

            .total-final {
                font-weight: 700;
                font-size: 1.3em;
                margin-top: 10px;
                padding-top: 15px;
                border-top: 2px solid rgba(255, 255, 255, 0.3) !important;
            }

            /* Professional Button Styling */
            .form-actions {
                display: flex;
                gap: 20px;
                margin-top: 30px;
                justify-content: center;
                flex-wrap: wrap;
            }

            .btn-primary,
            .btn-secondary {
                padding: 15px 35px;
                border: none;
                border-radius: 50px;
                font-size: 1.1em;
                font-weight: 600;
                cursor: pointer;
                transition: all 0.3s ease;
                text-transform: uppercase;
                letter-spacing: 1px;
                box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
                min-width: 180px;
            }

            .btn-primary {
                background: linear-gradient(135deg, #4caf50 0%, #45a049 100%);
                color: white;
            }

            .btn-primary:hover {
                background: linear-gradient(135deg, #45a049 0%, #3d8b40 100%);
                transform: translateY(-3px);
                box-shadow: 0 8px 25px rgba(76, 175, 80, 0.4);
            }

            .btn-secondary {
                background: linear-gradient(135deg, #6c757d 0%, #5a6268 100%);
                color: white;
            }

            .btn-secondary:hover {
                background: linear-gradient(135deg, #5a6268 0%, #495057 100%);
                transform: translateY(-3px);
                box-shadow: 0 8px 25px rgba(108, 117, 125, 0.4);
            }

            .btn-primary:disabled,
            .btn-secondary:disabled {
                opacity: 0.6;
                cursor: not-allowed;
                transform: none;
            }

            /* Confirmation Page Styling */
            .confirmation-container {
                background: white;
                padding: 40px;
                border-radius: 20px;
                box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
                text-align: center;
                border: 2px solid #e8f5e8;
            }

            .confirmation-header {
                margin-bottom: 30px;
                padding: 20px;
                background: linear-gradient(135deg, #e8f5e8 0%, #f1f8e9 100%);
                border-radius: 15px;
                border: 2px solid #c8e6c9;
            }

            .confirmation-header h2 {
                color: #2c5530;
                font-size: 2.2em;
                margin: 0 0 15px 0;
                font-weight: 700;
            }

            .confirmation-header p {
                color: #4caf50;
                font-size: 1.3em;
                margin: 0;
                font-weight: 600;
            }

            .order-details {
                background: #f8f9fa;
                padding: 25px;
                border-radius: 15px;
                margin: 25px 0;
                text-align: left;
                border: 1px solid #e0e0e0;
            }

            .order-details h4 {
                color: #2c5530;
                font-size: 1.4em;
                margin: 0 0 20px 0;
                font-weight: 700;
                text-align: center;
                border-bottom: 2px solid #e0e0e0;
                padding-bottom: 10px;
            }

            .order-details p {
                margin: 12px 0;
                font-size: 1.1em;
                line-height: 1.6;
            }

            .order-details strong {
                color: #2c5530;
                font-weight: 600;
            }

            .confirmation-actions {
                display: flex;
                gap: 20px;
                justify-content: center;
                margin-top: 30px;
                flex-wrap: wrap;
            }

            /* Responsive Design */
            @media (max-width: 768px) {
                .checkout-container {
                    padding: 15px;
                }
                
                .checkout-form {
                    padding: 20px;
                }
                
                .form-actions,
                .confirmation-actions {
                    flex-direction: column;
                    align-items: center;
                }
                
                .btn-primary,
                .btn-secondary {
                    width: 100%;
                    max-width: 300px;
                }
                
                .order-item {
                    flex-direction: column;
                    text-align: center;
                    gap: 10px;
                }
                
                .item-price {
                    align-self: center;
                }
            }
        `;
        document.head.appendChild(style);
    }

    getGroupedItems() {
        const grouped = {};
        this.cartItems.forEach(item => {
            if (grouped[item.plantName]) {
                grouped[item.plantName].quantity += 1;
                grouped[item.plantName].totalPrice += item.price;
            } else {
                grouped[item.plantName] = {
                    ...item,
                    quantity: 1,
                    totalPrice: item.price,
                    unitPrice: item.price
                };
            }
        });
        return Object.values(grouped);
    }

    calculateTotals() {
        const subtotal = this.cartItems.reduce((total, item) => total + item.price, 0);
        const shipping = this.cartItems.length > 0 ? 5.99 : 0;
        const tax = subtotal * 0.08;
        const total = subtotal + shipping + tax;
        
        return { subtotal, shipping, tax, total };
    }

    render() {
        const { subtotal, shipping, tax, total } = this.calculateTotals();
        const groupedItems = this.getGroupedItems();
        
        const checkoutEl = this.createRootElement('div', 'checkout-container');
        checkoutEl.innerHTML = `
            <div class="checkout-header">
                <h2>🌿 Organic Plant Shop</h2>
                <h3>Complete Your Order</h3>
            </div>
            
            <form id="checkout-form" class="checkout-form">
                <div class="form-group">
                    <label for="customer-name">Your Name</label>
                    <input type="text" id="customer-name" name="customerName" required placeholder="Enter your full name">
                </div>
                
                <div class="form-group">
                    <label for="customer-email">Email Address</label>
                    <input type="email" id="customer-email" name="customerEmail" required placeholder="your.email@example.com">
                </div>
                
                <div class="form-group">
                    <label for="customer-address">Delivery Address</label>
                    <textarea id="customer-address" name="customerAddress" rows="3" required placeholder="Enter your complete delivery address"></textarea>
                </div>
                
                <div class="form-group">
                    <label for="payment-method">Payment Method</label>
                    <select id="payment-method" name="paymentMethod">
                        <option value="cash-on-delivery">Cash on Delivery</option>
                        <option value="card">Credit/Debit Card</option>
                        <option value="upi">UPI Payment</option>
                    </select>
                </div>
                
                <div class="order-summary-section">
                    <h4>📋 Order Summary</h4>
                    
                    <div class="order-items">
                        ${groupedItems.map(item => `
                            <div class="order-item">
                                <div class="item-details">
                                    <div class="item-name">${item.plantName}</div>
                                    <div class="item-desc">${item.description}</div>
                                    ${item.quantity > 1 ? `<span class="item-qty">Qty: ${item.quantity}</span>` : ''}
                                </div>
                                <div class="item-price">₹${item.totalPrice.toFixed(2)}</div>
                            </div>
                        `).join('')}
                    </div>
                    
                    <div class="order-totals">
                        <div class="total-line">
                            <span>Subtotal:</span>
                            <span>₹${subtotal.toFixed(2)}</span>
                        </div>
                        <div class="total-line">
                            <span>Shipping:</span>
                            <span>₹${shipping.toFixed(2)}</span>
                        </div>
                        <div class="total-line">
                            <span>Tax (8%):</span>
                            <span>₹${tax.toFixed(2)}</span>
                        </div>
                        <div class="total-line total-final">
                            <span>Total Amount:</span>
                            <span>₹${total.toFixed(2)}</span>
                        </div>
                    </div>
                </div>
                
                <div class="form-actions">
                    <button type="button" id="back-to-shop" class="btn-secondary">← Back to Shop</button>
                    <button type="submit" id="complete-order" class="btn-primary">Complete Order</button>
                </div>
            </form>
        `;

        this.attachEventListeners();
    }

    attachEventListeners() {
        const form = document.getElementById('checkout-form');
        const backButton = document.getElementById('back-to-shop');

        form.addEventListener('submit', this.handleFormSubmit.bind(this));
        backButton.addEventListener('click', this.goBackToShop.bind(this));
    }

    handleFormSubmit(event) {
        event.preventDefault();
        
        const formData = new FormData(event.target);
        const groupedItems = this.getGroupedItems();
        
        const orderData = {
            customer: {
                name: formData.get('customerName'),
                email: formData.get('customerEmail'),
                address: formData.get('customerAddress')
            },
            paymentMethod: formData.get('paymentMethod'),
            items: groupedItems.map(item => ({
                plantName: item.plantName,
                unitPrice: item.unitPrice,
                quantity: item.quantity,
                totalPrice: item.totalPrice,
                colour: item.colour,
                description: item.description
            })),
            totals: this.calculateTotals(),
            orderDate: new Date().toISOString(),
            status: 'processing'
        };

        this.saveOrderToFirebase(orderData);
    }

    saveOrderToFirebase(orderData) {
        const loadingBtn = document.getElementById('complete-order');
        const originalText = loadingBtn.textContent;
        loadingBtn.textContent = 'Processing...';
        loadingBtn.disabled = true;

        const newOrderRef = firebase.database().ref('orders').push();
        newOrderRef.set(orderData)
            .then(() => {
                const orderId = newOrderRef.key;
                this.showOrderConfirmation(orderId, orderData);
            })
            .catch((error) => {
                console.error('Error saving order:', error);
                alert('There was an error processing your order. Please try again.');
                loadingBtn.textContent = originalText;
                loadingBtn.disabled = false;
            });
    }

    showOrderConfirmation(orderId, orderData) {
        const checkoutContainer = document.querySelector('.checkout-container');
        checkoutContainer.innerHTML = `
            <div class="confirmation-container">
                <div class="confirmation-header">
                    <h2>✅ Order Confirmed!</h2>
                    <p>Thank you for your order, ${orderData.customer.name}!</p>
                </div>
                
                <div class="order-details">
                    <h4>📋 Order Details</h4>
                    <p><strong>Order ID:</strong> #${orderId}</p>
                    <p><strong>Customer Name:</strong> ${orderData.customer.name}</p>
                    <p><strong>Email:</strong> ${orderData.customer.email}</p>
                    <p><strong>Delivery Address:</strong> ${orderData.customer.address}</p>
                    <p><strong>Payment Method:</strong> ${orderData.paymentMethod}</p>
                    <p><strong>Total Amount:</strong> ₹${orderData.totals.total.toFixed(2)}</p>
                    <p><strong>Order Date:</strong> ${new Date(orderData.orderDate).toLocaleDateString()}</p>
                </div>
                
                <div class="confirmation-actions">
                    <button id="new-order" class="btn-primary">🛒 Start New Order</button>
                    <button id="download-receipt" class="btn-secondary">📄 Download Receipt</button>
                </div>
            </div>
        `;

        document.getElementById('new-order').addEventListener('click', () => {
            location.reload();
        });

        document.getElementById('download-receipt').addEventListener('click', () => {
            this.downloadReceipt(orderId, orderData);
        });
    }

    downloadReceipt(orderId, orderData) {
        const receiptContent = `
ORGANIC PLANT SHOP - ORDER RECEIPT
=================================
Order ID: #${orderId}
Date: ${new Date(orderData.orderDate).toLocaleDateString()}

Customer Details:
Name: ${orderData.customer.name}
Email: ${orderData.customer.email}
Address: ${orderData.customer.address}

Items Ordered:
${orderData.items.map(item => `- ${item.plantName} (Qty: ${item.quantity}): ₹${item.totalPrice.toFixed(2)}`).join('\n')}

Order Summary:
Subtotal: ₹${orderData.totals.subtotal.toFixed(2)}
Shipping: ₹${orderData.totals.shipping.toFixed(2)}
Tax: ₹${orderData.totals.tax.toFixed(2)}
Total: ₹${orderData.totals.total.toFixed(2)}

Payment Method: ${orderData.paymentMethod}

Thank you for shopping with Organic Plant Shop! 🌿
        `;

        const blob = new Blob([receiptContent], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `receipt-${orderId}.txt`;
        a.click();
        URL.revokeObjectURL(url);
    }

    goBackToShop() {
        const paymentSection = document.getElementById('payment-section');
        const appContent = document.getElementById('app');
        
        if (paymentSection) {
            paymentSection.style.display = 'none';
        }
        if (appContent) {
            appContent.style.display = 'grid';
        }
    }
}

// Modified Shopping Cart Component - Shows only total amount on main page
class ShoppingCart extends Component {
    items = [];

    set cartItems(value) {
        this.items = value;
        this.updateCart();
    }

    get totalAmount() {
        return this.items.reduce((total, item) => total + item.price, 0);
    }

    constructor(renderHookID) {
        super(renderHookID, false);
        this.orderPlants = this.orderPlants.bind(this);
        this.render();
    }

    orderPlants() {
        if (this.items.length === 0) {
            alert('Your cart is empty! Please add some plants before ordering.');
            return;
        }

        // Hide main app and show checkout form
        const appContent = document.getElementById(this.hookId);
        if (appContent) {
            appContent.style.display = 'none';
        }

        let paymentSection = document.getElementById('payment-section');
        if (!paymentSection) {
            paymentSection = document.createElement('div');
            paymentSection.id = 'payment-section';
            document.body.appendChild(paymentSection);
        }
        
        paymentSection.style.display = 'block';
        paymentSection.innerHTML = '';
        
        new CheckoutForm('payment-section', this.items);
    }

    addProduct(plant) {
        const updatedItems = [...this.items];
        updatedItems.push(plant);
        this.cartItems = updatedItems;
    }

    render() {
        const cartEl = this.createRootElement('aside', 'cart');
        this.updateCart();
    }

    updateCart() {
        const cartEl = document.querySelector('.cart');
        if (!cartEl) return;

        const itemCount = this.items.length;
        const totalAmount = this.totalAmount; // Only show total of products, no tax/shipping

        cartEl.innerHTML = `
            <div class="cart-header">
                <h3>Shopping Cart</h3>
                <span class="cart-count">${itemCount} item${itemCount !== 1 ? 's' : ''}</span>
            </div>
            
            ${itemCount === 0 ? 
                '<div class="empty-cart">Your cart is empty<br>🛒</div>' : 
                `<div class="cart-total">
                    <div class="total-amount">
                        <span class="total-label">Total:</span>
                        <span class="total-value">₹${totalAmount.toFixed(2)}</span>
                    </div>
                </div>`
            }
            
            <button class="order-btn" ${itemCount === 0 ? 'disabled' : ''} id="order-btn">
                ${itemCount === 0 ? 'Add Items to Cart' : 'Order Now'}
            </button>
        `;

        const orderButton = cartEl.querySelector('#order-btn');
        if (orderButton && itemCount > 0) {
            orderButton.addEventListener('click', this.orderPlants);
        }
    }
}

class PlantItem extends Component {
    constructor(plant, renderHookID) {
        super(renderHookID, false);
        this.plant = plant;
        this.render();
    }

    addToCart() {
        App.addPlantToCart(this.plant);
        
        // Show confirmation
        const button = document.querySelector(`[data-plant="${this.plant.plantName}"]`);
        const originalText = button.textContent;
        button.textContent = '✓ Added!';
        button.style.background = 'linear-gradient(135deg, #27ae60, #2ecc71)';
        
        setTimeout(() => {
            button.textContent = originalText;
            button.style.background = '';
        }, 1500);
    }

    render() {
        const plantEl = this.createRootElement('li', 'plant-item');
        plantEl.innerHTML = `
            <div>
                <img src="${this.plant.imageURL}" alt="${this.plant.plantName}">
                <div class="plant-item_content">
                    <h2>${this.plant.plantName}</h2>
                    <h3>₹${this.plant.price.toFixed(2)}</h3>
                    <p>${this.plant.description}</p>
                    <button data-plant="${this.plant.plantName}">Add to Cart</button>
                </div>
            </div>
        `;
        const addCartButton = plantEl.querySelector('button');
        addCartButton.addEventListener('click', this.addToCart.bind(this));
    }
}

class PlantList extends Component {
    plants = [];

    constructor(renderHookID) {
        super(renderHookID, false);
        this.fetchPlants();
        this.render();
    }

    fetchPlants() {
        this.plants = [
            new Plant('Turmeric', 'yellow', 'assets/styles/images/Turmeric-2.jpg', 'Raw turmeric 250 g', 26.0),
            new Plant('Mint', 'green', 'assets/styles/images/Mint-1.jpg', 'Fresh Mint leaves 100 g', 38.0),
            new Plant('Alovera', 'green', 'assets/styles/images/aloe-vera 2.jpg', 'Fresh Aloe Vera Gel 100 g', 250.0),
            new Plant('Ashwagandha', 'green', 'assets/styles/images/ashwagandha 2.jpg', 'Ashwagandha powder 100 g', 550.0),
            new Plant('Lemongrass', 'green', 'assets/styles/images/Lemongrass tea.jpg', 'Lemongrass leaves 100 g', 25.0)
        ];
    }

    renderPlants() {
        for (const plant of this.plants) {
            new PlantItem(plant, 'plant-list');
        }
    }

    render() {
        const productsSection = this.createRootElement('section', 'products-section');
        productsSection.innerHTML = `
            <h2 class="products-title">🌱 Our Products</h2>
            <ul class="plant-list" id="plant-list"></ul>
        `;
        this.renderPlants();
    }
}

class Shop {
    constructor() {
        this.render();
    }

    render() {
        this.cart = new ShoppingCart('app');
        new PlantList('app');
    }
}

class App {
    static cart;

    static init() {
        const shop = new Shop();
        this.cart = shop.cart;
    }

    static addPlantToCart(plant) {
        this.cart.addProduct(plant);
    }

    static resetCart() {
        this.cart.cartItems = [];
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    App.init();
});
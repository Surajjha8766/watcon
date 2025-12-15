// Product Data - 10+ products with heavy content

// Add this to your existing DOMContentLoaded in script.js
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');
if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });
}
const products = {
    all: [
        {
            id: 1,
            name: "NN-FC-TM SERIES Filtration Combo",
            category: "filtration",
            description: "Advanced filtration system with multi-stage purification technology for crystal clear water.",
            price: "$1,299.00",
            image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=600&fit=crop",
            specs: [
                "Flow Rate: 1200-1500 LPH",
                "Filtration Area: 45 sq.ft",
                "Max Pressure: 50 PSI",
                "Material: Corrosion-resistant ABS",
                "Energy Efficient: 0.75 kW",
                "Dimensions: 24\" x 24\" x 36\"",
                "Weight: 85 lbs",
                "Warranty: 5 Years",
                "Installation: Professional recommended",
                "Certifications: NSF/ANSI 50"
            ]
        },
        {
            id: 2,
            name: "Variable Speed Pump VSP-PRO",
            category: "pumps",
            description: "Intelligent variable speed pump with energy savings up to 80% compared to traditional pumps.",
            price: "$899.00",
            image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
            specs: [
                "Horsepower: 1.5 - 3.0 HP",
                "Speed Range: 600-3450 RPM",
                "Voltage: 115/230V",
                "Maximum Flow: 150 GPM",
                "Energy Efficiency: 0.95 W/GA",
                "Noise Level: < 50 dB",
                "Controller: Digital touchscreen",
                "Connectivity: Wi-Fi enabled",
                "Protection: Thermal overload",
                "Warranty: 3 Years"
            ]
        },
        {
            id: 3,
            name: "Robotic Pool Cleaner RC-2000",
            category: "cleaning",
            description: "Smart robotic cleaner with advanced navigation and powerful scrubbing capabilities.",
            price: "$1,499.00",
            image: "https://images.unsplash.com/photo-1504309092620-4d0ec726efa4?w=800&h=600&fit=crop",
            specs: [
                "Cleaning Coverage: 1500 sq.ft",
                "Power Source: 24V DC",
                "Cable Length: 60 ft",
                "Filter Capacity: 5 liters",
                "Cleaning Time: 2 hours",
                "Climbing Ability: 90° walls",
                "Waterline Cleaning: Yes",
                "Programmable Schedules: 7-day",
                "Remote Control: Bluetooth",
                "Warranty: 2 Years"
            ]
        },
        {
            id: 4,
            name: "Titanium Heat Pump HP-5000",
            category: "heaters",
            description: "High-efficiency heat pump with titanium heat exchanger for maximum durability.",
            price: "$3,299.00",
            image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&h=600&fit=crop",
            specs: [
                "Heating Capacity: 140,000 BTU",
                "COP: 5.2",
                "Temperature Range: 40-104°F",
                "Power Input: 5.5 kW",
                "Water Flow: 30-70 GPM",
                "Heat Exchanger: Titanium",
                "Controller: Digital LCD",
                "Ambient Temp: 45-115°F",
                "Dimensions: 48\" x 32\" x 36\"",
                "Warranty: 5 Years"
            ]
        },
        {
            id: 5,
            name: "Commercial Sand Filter SF-600",
            category: "filtration",
            description: "Heavy-duty commercial sand filter for large volume water filtration.",
            price: "$2,499.00",
            image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=800&h=600&fit=crop",
            specs: [
                "Tank Diameter: 36 inches",
                "Media Capacity: 600 lbs sand",
                "Flow Rate: 200 GPM",
                "Max Pressure: 50 PSI",
                "Backwash Flow: 50 GPM",
                "Valve: 6-position multiport",
                "Material: Fiberglass reinforced",
                "Installation: Concrete pad required",
                "Service Factor: 1.5",
                "Warranty: 10 Years"
            ]
        },
        {
            id: 6,
            name: "Solar Pool Heater SH-400",
            category: "heaters",
            description: "Eco-friendly solar heating system with high-efficiency collectors.",
            price: "$1,899.00",
            image: "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?w=800&h=600&fit=crop",
            specs: [
                "Collector Area: 400 sq.ft",
                "Efficiency: 85%",
                "Maximum Output: 100,000 BTU",
                "Collector Type: Polypropylene",
                "Frame: Aluminum",
                "Flow Rate: 40-80 GPM",
                "Temperature Rise: 8-15°F",
                "Mounting: Roof or ground",
                "Controller: Differential thermostat",
                "Warranty: 12 Years"
            ]
        },
        {
            id: 7,
            name: "Automatic Pool Cover PC-3000",
            category: "accessories",
            description: "Motorized safety cover with remote control operation.",
            price: "$4,999.00",
            image: "https://images.unsplash.com/photo-1566041510394-cf7c8fe21800?w=800&h=600&fit=crop",
            specs: [
                "Cover Material: Solid vinyl",
                "Track System: Stainless steel",
                "Motor: 1 HP DC",
                "Control: Remote/keypad",
                "Safety Features: Auto-reverse",
                "Power Source: 120V AC",
                "Installation: Recessed",
                "Load Capacity: 3000 lbs",
                "UV Resistance: Yes",
                "Warranty: 5 Years"
            ]
        },
        {
            id: 8,
            name: "Chemical Feeder CF-200",
            category: "chemicals",
            description: "Automatic chemical feeder for precise water chemistry control.",
            price: "$599.00",
            image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&h=600&fit=crop",
            specs: [
                "Capacity: 15 lbs chemical",
                "Feed Rate: 0-5 lbs/day",
                "Controller: Digital",
                "Pump: Peristaltic",
                "Sensors: pH, ORP, temperature",
                "Connectivity: RS-485",
                "Enclosure: NEMA 4X",
                "Power: 24V DC",
                "Alarms: High/low chemical",
                "Warranty: 2 Years"
            ]
        },
        {
            id: 9,
            name: "Water Feature Pump WF-500",
            category: "pumps",
            description: "High-head pump for water features, fountains, and waterfalls.",
            price: "$749.00",
            image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop",
            specs: [
                "Maximum Head: 50 feet",
                "Flow Rate: 100 GPM",
                "Power: 1.0 HP",
                "Voltage: 115/230V",
                "Impeller: Brass",
                "Seal: Mechanical",
                "Housing: Cast iron",
                "Installation: Above ground",
                "Noise Level: < 60 dB",
                "Warranty: 3 Years"
            ]
        },
        {
            id: 10,
            name: "Ozone Generator OZ-100",
            category: "chemicals",
            description: "Advanced ozone system for chemical-free water sanitation.",
            price: "$1,199.00",
            image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
            specs: [
                "Ozone Output: 10 g/hr",
                "Power Consumption: 150W",
                "Voltage: 120V",
                "Installation: Venturi injector",
                "Monitor: Ozone sensor",
                "Destruct Unit: Included",
                "Flow Rate: 20-100 GPM",
                "Enclosure: Stainless steel",
                "Maintenance: Annual",
                "Warranty: 3 Years"
            ]
        },
        {
            id: 11,
            name: "Pool Lights LED-500",
            category: "accessories",
            description: "Color-changing LED lights with smart control system.",
            price: "$299.00",
            image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=800&h=600&fit=crop",
            specs: [
                "Light Output: 5000 lumens",
                "Colors: 16 million",
                "Voltage: 12V",
                "Beam Angle: 120°",
                "Material: Polycarbonate",
                "Installation: Niche or surface",
                "Controller: Wireless remote",
                "Programs: 20 pre-set",
                "Music Sync: Yes",
                "Warranty: 3 Years"
            ]
        },
        {
            id: 12,
            name: "Automatic Vacuum AV-800",
            category: "cleaning",
            description: "Suction-side automatic cleaner with advanced debris handling.",
            price: "$449.00",
            image: "https://images.unsplash.com/photo-1504309092620-4d0ec726efa4?w=800&h=600&fit=crop",
            specs: [
                "Hose Length: 40 ft",
                "Cleaning Pattern: Random",
                "Debris Bag: 5 liters",
                "Climbing Ability: Yes",
                "Waterline Cleaning: Yes",
                "Hose Type: Swivel",
                "Weight: 15 lbs",
                "Connection: Standard skimmer",
                "Flow Required: 20-40 GPM",
                "Warranty: 1 Year"
            ]
        }
    ]
};

// Load featured products on home page
function loadFeaturedProducts() {
    const container = document.getElementById('featured-products');
    if (!container) return;
    
    const featured = products.all.slice(0, 6);
    container.innerHTML = featured.map(product => `
        <div class="product-card" data-aos="fade-up" onclick="openProductModal(${product.id})">
            <img src="${product.image}" alt="${product.name}">
            <div class="card-content">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <div class="price">${product.price}</div>
            </div>
        </div>
    `).join('');
}

// Load all products on products page
function loadAllProducts() {
    const container = document.getElementById('all-products');
    if (!container) return;
    
    container.innerHTML = products.all.map(product => `
        <div class="product-card" data-aos="fade-up" onclick="openProductModal(${product.id})">
            <img src="${product.image}" alt="${product.name}">
            <div class="card-content">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <div class="price">${product.price}</div>
            </div>
        </div>
    `).join('');
}

// Filter products by category
function filterProducts(category) {
    const buttons = document.querySelectorAll('.category-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    const container = document.getElementById('featured-products') || document.getElementById('all-products');
    if (!container) return;
    
    let filteredProducts;
    if (category === 'all') {
        filteredProducts = products.all;
    } else {
        filteredProducts = products.all.filter(product => product.category === category);
    }
    
    container.innerHTML = filteredProducts.map(product => `
        <div class="product-card" data-aos="fade-up" onclick="openProductModal(${product.id})">
            <img src="${product.image}" alt="${product.name}">
            <div class="card-content">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <div class="price">${product.price}</div>
            </div>
        </div>
    `).join('');
    
    // Reinitialize AOS for newly added elements
    AOS.refresh();
}

// Show all products
function showAllProducts() {
    filterProducts('all');
}

// Open product modal
function openProductModal(productId) {
    const product = products.all.find(p => p.id === productId);
    if (!product) return;
    
    const modalBody = document.getElementById('modalBody');
    if (modalBody) {
        modalBody.innerHTML = `
            <div class="row">
                <div class="col-md-6">
                    <img src="${product.image}" alt="${product.name}" class="img-fluid">
                </div>
                <div class="col-md-6">
                    <h4>${product.name}</h4>
                    <p class="text-primary h5">${product.price}</p>
                    <p>${product.description}</p>
                    
                    <h5 class="mt-4">Specifications:</h5>
                    <ul class="list-unstyled">
                        ${product.specs.map(spec => `<li>• ${spec}</li>`).join('')}
                    </ul>
                    
                    <div class="mt-4">
                        <button class="btn btn-primary" onclick="window.location.href='product-detail.html'">View Details</button>
                        <button class="btn btn-outline-primary ms-2" onclick="openQuoteForm('${product.name}')">Get Quote</button>
                    </div>
                </div>
            </div>
        `;
        
        const modal = new bootstrap.Modal(document.getElementById('productModal'));
        modal.show();
    } else {
        // If no modal, redirect to product detail page
        window.location.href = `product-detail.html?id=${productId}`;
    }
}

// Open quote form
function openQuoteForm(productName) {
    const quoteModal = new bootstrap.Modal(document.getElementById('quoteModal'));
    document.getElementById('productNameInput').value = productName;
    quoteModal.show();
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.includes('products.html')) {
        loadAllProducts();
    }
    
    // Mobile menu functionality
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            const navLinks = document.querySelector('.nav-links');
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        });
    }
    
    // Newsletter form submission
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for subscribing to our newsletter!');
            this.reset();
        });
    }
});
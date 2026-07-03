const homeItems = [
    {
        name: "Leather Bag",
        price: "545",
        category: "Accessories",
        description: "Vintage brown leather messenger bag.",
        image: "https://images.unsplash.com/photo-1603504567672-bc39a18c3371?q=80&w=687&auto=format&fit=crop"
    },
    {
        name: "Vintage Watch",
        price: "755",
        category: "Accessories",
        description: "Analog vintage style watch with leather strap.",
        image: "https://images.unsplash.com/photo-1628608569034-e214532ddfde?q=80&w=687&auto=format&fit=crop"
    },
    {
        name: "Sneakers",
        price: "538",
        category: "Shoes",
        description: "Minimalist white sneakers, very comfortable.",
        image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=698&auto=format&fit=crop"
    },
    {
        name: "Backpack",
        price: "118",
        category: "Accessories",
        description: "Durable waterproof backpack with laptop sleeve.",
        image: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?q=80&w=688&auto=format&fit=crop"
    },
    {
        name: "Oversized Hoodie",
        price: "430",
        category: "Clothing",
        description: "Super soft oversized grey hoodie.",
        image: "https://plus.unsplash.com/premium_photo-1673356302169-574db56b52cd?q=80&w=1170&auto=format&fit=crop"
    },
    {
        name: "Vintage Denim Jacket",
        price: "1200",
        category: "Clothing",
        description: "Classic 90s fit, light wash. No tears or stains, fits like a Large.",
        image: "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?q=80&w=369&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "Oversized Football FC Barcelona Jersey",
        price: "750",
        category: "Clothing",
        description: "Pre-loved heavyweight cotton FC Barcelona Pedri jersey. Perfectly baggy fit.",
        image: "https://images.unsplash.com/photo-1764116679116-759d9e02c88d?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "Scientific Calculator",
        price: "1000",
        category: "Electronics",
        description: "Casio-FX series, gently used for only one semester. All buttons responsive and batteries included.",
        image: "https://images.unsplash.com/photo-1757256137041-0aab889db199?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "Leather Chelsea Boots",
        price: "2100",
        category: "Shoes",
        description: "Genuine espresso leather with elastic side panels. Features a nice worn-in patina, soles in great shape.",
        image: "https://images.unsplash.com/photo-1608629601270-a0007becead3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "Silk Patterned Scarf",
        price: "400",
        category: "Accessories",
        description: "Vibrant floral print, no snags or stains.",
        image: "https://images.unsplash.com/photo-1743199965692-c344ac9bb6d5?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "Wired Retro Headphones Set",
        price: "550",
        category: "Electronics",
        description: "Foldable silver design, fully functional with 3.5mm jack.",
        image: "https://images.pexels.com/photos/11229999/pexels-photo-11229999.jpeg?_gl=1*1gy3qi3*_ga*MTIyNzMwNTQ1My4xNzY3OTg0ODQ3*_ga_8JE65Q40S6*czE3Njc5ODQ4NDYkbzEkZzEkdDE3Njc5ODgyNDkkajE1JGwwJGgw"
    },
    {
        name: "Handmade Bracelet",
        price: "200",
        category: "Accessories",
        description: "One-of-a-kind piece featuring crystals and durable elastic cord.",
        image: "https://cdn.pixabay.com/photo/2015/03/09/10/00/carnelian-665319_1280.jpg"
    },
    {
        name: "Hello Kitty Trousers",
        price: "800",
        category: "Clothing",
        description: "Adorable Sanrio-themed cotton trousers. Features vibrant character print, gently used and good quality.",
        image: "https://images.pexels.com/photos/18188510/pexels-photo-18188510.jpeg?_gl=1*1athrvc*_ga*MTIyNzMwNTQ1My4xNzY3OTg0ODQ3*_ga_8JE65Q40S6*czE3Njc5ODQ4NDYkbzEkZzEkdDE3Njc5ODkyMDckajckbDAkaDA."
    },
    {
        name: "Shinchan Figurine",
        price: "200",
        category: "Accessories",
        description: "Fun Crayon Shinchan character figurine. High-quality material, perfect for decoration.",
        image: "https://images.pexels.com/photos/34723613/pexels-photo-34723613.jpeg?_gl=1*1lzy8v2*_ga*MTIyNzMwNTQ1My4xNzY3OTg0ODQ3*_ga_8JE65Q40S6*czE3Njc5ODQ4NDYkbzEkZzEkdDE3Njc5ODk0NzUkajU5JGwwJGgw"
    },
    {
        name: "Embroidered Tote Bag",
        price: "700",
        category: "Accessories",
        description: "Canvas bag with hand-stitched flowers. Spacious enough for books or groceries, eco-friendly.",
        image: "https://images.pexels.com/photos/9587440/pexels-photo-9587440.jpeg?_gl=1*1t3yzax*_ga*MTIyNzMwNTQ1My4xNzY3OTg0ODQ3*_ga_8JE65Q40S6*czE3Njc5ODQ4NDYkbzEkZzEkdDE3Njc5ODk4NjkkajE0JGwwJGgw"
    },
    {
        name: "Purple Crocs",
        price: "1100",
        category: "Shoes",
        description: "Pre-loved signature purple crocs flip-flops with simple design.",
        image: "https://images.pexels.com/photos/18188548/pexels-photo-18188548.jpeg?_gl=1*fesj77*_ga*MTIyNzMwNTQ1My4xNzY3OTg0ODQ3*_ga_8JE65Q40S6*czE3Njc5ODQ4NDYkbzEkZzEkdDE3Njc5OTAzMjIkajU5JGwwJGgw"
    },
    {
        name: "Real Madrid Cap",
        price: "250",
        category: "Accessories",
        description: "Football club Real Madrid cap hat, perfect condition and great accessory for fans.",
        image: "https://cdn.pixabay.com/photo/2016/05/25/20/23/real-madrid-1415775_1280.jpg"
    }
];

function createCard(item) {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
        <div class="card-img">
            <img src="${item.image}" alt="${item.name}">
        </div>
        <div class="card-info">
            <h3>${item.name}</h3>
            <p class="price">Rs ${item.price}</p>
            <p class="category">${item.category}</p>
            <p class="description">${item.description}</p>
            <a href="contact.html" class="btn-buy">Buy Now</a>
        </div>
    `;
    return div;
}

const featuredContainer = document.getElementById("featured-container");
const lovedContainer = document.getElementById("loved-container");

if (featuredContainer && lovedContainer) {
    // Before Sale Banner: First 3 items
    homeItems.slice(0, 3).forEach(item => featuredContainer.appendChild(createCard(item)));
    // After Sale Banner: Next 3 items
    homeItems.slice(3, 6).forEach(item => lovedContainer.appendChild(createCard(item)));
}

// --- Marketplace Page Logic ---
const fullContainer = document.getElementById("items-container");
if (fullContainer) {
    let userAddedItems = JSON.parse(localStorage.getItem("items")) || [];
    let allItems = [...homeItems, ...userAddedItems];
    fullContainer.innerHTML = ""; // Clear placeholders
    allItems.forEach(item => fullContainer.appendChild(createCard(item)));
}

// ===== 4. SELL FORM LOGIC (The part you moved) =====
const form = document.getElementById("sellForm");
if (form) {
    form.addEventListener("submit", function(e) {
        e.preventDefault();

        const nameInput = document.getElementById("name").value.trim();
        const categoryInput = document.getElementById("category").value.trim();
        const priceInput = document.getElementById("price").value;
        const descInput = document.getElementById("description").value.trim();
        const imageFile = document.getElementById("image").files[0];

        if (!nameInput || !categoryInput || !priceInput || !descInput || !imageFile) {
            alert("Please fill all fields and upload an image.");
            return;
        }

        const reader = new FileReader();
        reader.onload = function() {
            const newItem = {
                name: nameInput,
                category: categoryInput,
                price: priceInput,
                description: descInput,
                image: reader.result
            };

            // Save to LocalStorage
            let items = JSON.parse(localStorage.getItem("items")) || [];
            items.push(newItem);
            localStorage.setItem("items", JSON.stringify(items));

            alert(`Item "${nameInput}" added successfully!`);
            form.reset();
        };
        reader.readAsDataURL(imageFile);
    });
}
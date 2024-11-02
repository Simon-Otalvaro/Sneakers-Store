const products = [

{id: 1,
name: "Jordan Retro IV Off-White",
description: "Los Jordan Retro 4 Off-White combinan el diseño clásico de Jordan con el estilo único de Off-White. Con un tono beige claro, materiales translúcidos y detalles en gamuza, estos tenis ofrecen una estética moderna y elegante. Perfectos para coleccionistas y amantes de la moda urbana.",
price: 290.000,
stack: 40,
color: "Beige",
size: "38-40",
img: 'img/Jordan-Off White.webp'
},

{id: 2,
name: "Jordan Retro IV - Military",
description: "Los Jordan Retro 4 Military Black presentan un diseño clásico en blanco, negro y gris, ideal para cualquier ocasión. Con materiales de alta calidad y detalles en cuero y gamuza, ofrecen un estilo versátil y moderno que combina perfectamente con looks casuales y urbanos.",
price: 250.000,
stack: 20,
color: "Blanco, Negro, Gris",
size: "37-38",
img: 'img/Jordan-Military Black.jpg'
},

{id: 3,
name: "Jordan 3",
description: "Los Jordan Retro 3 ofrecen un diseño icónico con detalles en cuero premium y el clásico estampado de elefante en el talón y en la puntera. Disponibles en color blanco clásico, estos tenis destacan por su estilo atemporal y comodidad, ideales para los amantes del estilo retro y urbano.",
price: 260.000,
stack: 10,
color: "Blanco, Negro",
size: "37-38",
img: 'img/Jordan 3.jpg'
},
    
{id: 4,
name: "Air Force One - Dior",
description: "Los Air Force 1 Dior son una colaboración exclusiva que fusiona el diseño clásico de Nike con la elegancia de Dior. Presentan materiales de alta calidad, con detalles en cuero y el patrón característico de Dior en los paneles laterales. Con su estilo sofisticado y detalles de lujo, estos tenis son ideales para quienes buscan exclusividad y alta moda en un calzado deportivo.",
price: 300.000,
stack: 6,
color: "Gris, Blanco",
size: "38-39-40",
img: 'img/Air Force One - Dior.jpg'
},
    
{id: 5,
name: "Jordan 1 Clasicas",
description: "Las Jordan 1 Clásicas ofrecen el diseño icónico que definió una era, combinando materiales de alta calidad y un estilo atemporal. Disponibles en su color clásico, estos tenis son una elección imprescindible para los amantes del streetwear y de las zapatillas clásicas.",
price: 230.000,
stack: 50,
color: "Negro, Blanco, Rojo",
size: "38-39-40",
img: 'img/jordan1.jpg' 
},

{id: 6,
name: "New Balance 550",
description: "Las New Balance 550 combinan un diseño retro de los años 80 con un estilo urbano moderno. Con detalles en cuero y una suela resistente, ofrecen comodidad y versatilidad, ideales para quienes buscan un look casual y atemporal.",
price: 190.000,
stack: 30,
color: "Mixto",
size: "38-40",
img: 'img/New Balance 550.jpg'
},

{id: 7,
name: "Nike Air Max 97",
description: "Los Nike Air Max 97 destacan por su diseño inspirado en las ondas del agua y sus líneas futuristas. Con la icónica unidad Air de amortiguación completa y una combinación de materiales reflectantes y de alta calidad, estos tenis ofrecen comodidad y estilo, perfectos para un look moderno y llamativo.",
price: 150.000,
stack: 20,
color: "Gris, Blanco",
size: "38-39-40",
img: 'img/Nike Air Max 97.webp'
},

{id: 8,
name: "Adidas Campus 00s",
description: "Los Adidas Campus 00s son una reinvención moderna del clásico modelo Campus, con un diseño robusto y detalles retro de los años 2000. Fabricados en gamuza premium, con las emblemáticas tres franjas y una suela gruesa, ofrecen un look casual y nostálgico, ideal para el día a día.",
price: 190.000,
stack: 35,
color: "Negro",
size: "38-39-40",
img: 'img/Campus 00.jpeg'
},

]

const cart = [];

function displayProducts() {
    const store = document.getElementById('store');
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product');
        productCard.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Size: ${product.size}</p>
            <p>Color: ${product.color}</p>
            <p>Precio: $${product.price.toLocaleString()}</p>
            <br>
            <hr>
            <br>
            <button onclick="addToCart(${product.id})">Añadir al carrito</button>
        `;
        store.appendChild(productCard);
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product && cart.filter(p => p.id === productId).length < product.stack) {
        cart.push(product);
        product.stack--; // Restar uno del stock del producto
        updateCart();
    } else {
        alert("No hay suficiente stock.");
    }
}

function updateCart() {
    const cartItemsDiv = document.getElementById('cartItems');
    cartItemsDiv.innerHTML = '';
    let total = 0;

    cart.forEach((product, index) => {
        const cartItem = document.createElement('div');
        cartItem.innerHTML = `
            <p>${product.name} - $${product.price.toLocaleString()}</p>
            <button onclick="removeFromCart(${index})">Eliminar</button>
        `;
        cartItemsDiv.appendChild(cartItem);
        total += product.price;
    });

    document.getElementById('totalPrice').innerText = `Total: $${total.toLocaleString()}`;
}

function removeFromCart(index) {
    const product = cart[index];
    cart.splice(index, 1);
    products.find(p => p.id === product.id).stack++;
    updateCart();
}

function toggleCart() {
    const cartDiv = document.getElementById('cart');
    cartDiv.style.display = cartDiv.style.display === 'none' ? 'block' : 'none';
}

function checkout() {
    if (cart.length > 0) {
        alert("¡Compra exitosa!");
        cart.length = 0; // Vaciar el carrito
        updateCart();
        toggleCart(); // Cerrar el carrito
    } else {
        alert("El carrito está vacío.");
    }
}
function toggleCart() {
    const cartDiv = document.getElementById('cart');
    // Cambiar el estilo de visualización entre 'block' y 'none'
    cartDiv.style.display = cartDiv.style.display === 'none' ? 'block' : 'none';
}

document.addEventListener('DOMContentLoaded', displayProducts);
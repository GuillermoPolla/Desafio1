const ProductManager = require('./ProductManager');



const productManager = new ProductManager();

productManager.addProduct({
    title: "Gorra",
    description: "Gorra de Flash",
    price: 13.99,
    thumbnail: "thumbnail_url",
    code: "P1",
    stock: 100
});

productManager.addProduct({
    title: "Remera",
    description: "Remera de Flash",
    price: 25.00,
    thumbnail: "thumbnail_url",
    code: "P2",
    stock: 50
});

console.log(productManager.getProducts());
console.log(productManager.getProductById(1));
console.log(productManager.getProductById(2)); 
console.log(productManager.getProductById(3)); // Should display "Not found"

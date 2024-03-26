class ProductManager {
    constructor() {
        this.products = [];
        this.nextId = 1;
    }

    addProduct(product) {
        if (!product.title || !product.description || !product.price || !product.thumbnail || !product.code || !product.stock) {
            console.error("All fields are mandatory");
            return;
        }

        if (this.products.some(p => p.code === product.code)) {
            console.error("Product with same code already exists");
            return;
        }

        product.id = this.nextId++;
        this.products.push(product);
        console.log("Product added successfully");
    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        const product = this.products.find(p => p.id === id);
        if (!product) {
            console.error("Not found");
        }
        return product;
    }
}

module.exports = ProductManager;

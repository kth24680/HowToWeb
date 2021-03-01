var app = new Vue({
    el: '#app',
    data: {
        product: "Socks",
        image: "./image/bee1.jpg",
        inStock: true,
        details: ["80% cotton", "20% polyester", "Gender-neutral"],
        variants: [
            {
                variantId: 2234,
                variantColor: "green",
                variantImage: "./image/bee2.jpg"

            },
            {
                variantId: 2235,
                variantColor: "blue",
                variantImage: "./image/bee3.jpg"
            }
        ],
        cart: 0
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateProduct(variantImage) {
            this.image = variantImage
        }
    }
})
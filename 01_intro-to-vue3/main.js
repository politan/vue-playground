const app = Vue.createApp({
    // ES6
    data() {
        return {
            cart: [],
            premium: true
            // product: 'Socks',
            // brand: 'Vue Mastery',
            // description: 'A pair of warm, fuzzy socks',
            // selectedVariant: 0,
            // // inStock: true,
            // inventory: 100,
            // onSale: false,
            // details: ['50% cotton', '30% wool', '20% polyester'],
            // variants: [
            //     { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
            //     { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 }
            // ],
            // sizes: ['S', 'M', 'L', 'XL'],
            // onSale: false
        }
    },
    methods: {
        updateCart(id) {
            this.cart.push(id)
        },
        // addToCart() {
        //     this.cart += 1;
        // },
        removeFromCart(id) {
             if (this.cart === 0) return
             const idx = this.cart.indexOf(id);
             if (idx > -1) {
                 this.cart.splice(idx, 1);
             }
            // this.cart -= 1;
        },
        // updateVariant(index) {
        //     this.selectedVariant = index;
        // },
        // updateImage(variantImage) {
        //     this.image = variantImage;
        // },
    },
    computed: {
        // title() {
        //     return this.brand + '' + this.product;
        // },
        // image() {
        //     return this.variants[this.selectedVariant].image;
        // },
        // inStock() {
        //     return this.variants[this.selectedVariant].quantity;
        // },
        // sale() {
        //     return this.onSale ? this.brand + ' ' + this.product + ' are on sale!' : '';
        // }
    }

    // Old JS
    // data: function () {
    //     return {
    //         product: 'Socks'
    //     }
    // }
})
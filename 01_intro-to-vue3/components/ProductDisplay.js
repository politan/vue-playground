app.component('product-display', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template: 
    /* html */
    `<div class="product-display">
      <div class="product-container">
        <div class="product-image">
          <img :class="{ 'out-of-stock-img': !inStock }" :src="image" :title="description">
        </div>
        <div class="product-info">
          <h1>{{ onSale ? sale : title }}</h1>
          <!-- <p v-show="inStock">In Stock</p> -->
          <p v-if="inStock > 10">In Stock</p>
          <p v-else-if="inStock <= 10 && inStock > 0">Almost sold out!</p>
          <p v-else>Out of Stock</p>

          <p>Shipping: {{ shipping }}</p>
          
          <product-details :details="details"></product-details>
          <!-- <ul></ul>
            <li v-for="size in sizes">{{ size }}</li>
          </ul> -->

          <div v-for="(variant, index) in variants" :key="variant.id" @mouseover="updateVariant(index)" class="color-circle" :style="{ backgroundColor: variant.color}"></div>

          <!-- TERNARY OPERATORS -->
          <!-- <div :class="[ isActive ? 'active' : '']"></div> -->

          <!-- <div v-for="variant in variants" :key="variant.id" v-on:mouseover="updateImage(variant.image)">{{ variant.color }}</div> -->

          <!-- <p v-if="onSale">On Sale!</p> -->

          <button class="button" :class="{ disabledButton: !inStock }" :disabled="!inStock" @:click="addToCart">Add</button>
          <button class="button" v-on:click="removeFromCart">Remove</button>
        </div>
      </div>
      <review-list v-if="reviews.length" :reviews="reviews"></review-list>
      <review-form @review-submitted="addReview"></review-form>
    </div>`,
    data() {
        return {
            product: 'Socks',
            brand: 'Vue Mastery',
            description: 'A pair of warm, fuzzy socks',
            selectedVariant: 0,
            // inStock: true,
            inventory: 100,
            onSale: false,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 }
            ],
            sizes: ['S', 'M', 'L', 'XL'],
            onSale: false,
            reviews: []
        }
    },
    methods: {
        addToCart() {
            this.$emit('add-to-cart', this.variants[this.selectedVariant].id);
        },
        removeFromCart() {
            if (this.cart === 0) return
            // this.cart -= 1;
            this.$emit('remove-from-cart', this.variants[this.selectedVariant].id);
        },
        updateVariant(index) {
            this.selectedVariant = index;
        },
        // updateImage(variantImage) {
        //     this.image = variantImage;
        // },
        addReview(review) {
            this.reviews.push(review);
        }
    },
    computed: {
        title() {
            return this.brand + '' + this.product;
        },
        image() {
            return this.variants[this.selectedVariant].image;
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity;
        },
        sale() {
            return this.onSale ? this.brand + ' ' + this.product + ' are on sale!' : '';
        },
        shipping() {
            if (this.premium) {
                return 'Free';
            }
            return 2.99;
        }
    }
})
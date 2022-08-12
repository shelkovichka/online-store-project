<template>
  <section v-if="$store.state.cart.length < 1" class="empty">
      <h2>Your bag is empty</h2>
  </section>
  <section v-else>
    <div class="container">
        <div class="products" v-for="product in $store.state.cart" 
            :key="product" :id="product.id">
                <button class="remove" @click="removeFromCart">x</button>
                <img :src=product.img data-aos="fade-bottom" data-aos-duration="1500" data-aos-easing="linear">
                <router-link :to="'/product/' + product.name">{{ product.title }} {{ product.add }}</router-link>
                <div class="count"><button @click="removeItem">-</button><p>{{ product.quantity }}</p><button @click="addToCart">+</button></div>
                <p>{{ product.val }}{{ product.final }}</p>
        </div>
    </div>
    <div class="sum"> 
        <div class="total">
            <h2>Total: €{{ totalPrice }}</h2>
            <button @click="finalOrder">Chekout</button>
        </div>
    </div>
  </section>
</template>

<script>
export default {
    methods:{
        removeFromCart({target}) {
            for (let product of this.$store.state.cart) {
                if (product.id == target.parentNode.id) {
                    this.$store.commit('removeFromCart', product)
                }
            }
        },
        addToCart({target}){
            for (let product of this.$store.state.products) {
                if (product.id == target.parentNode.parentNode.id) {
                    this.$store.commit('addToCart', product)
                }
            }
        },
        removeItem({target}) {
            for (let product of this.$store.state.cart) {
                if (product.id == target.parentNode.parentNode.id) {
                    this.$store.commit('removeItem', product)
                }
            }
        },
        finalOrder() {
            console.log(this.$store.state.cart)
        }
    },
    computed:{
        totalPrice() {
            let total = this.$store.state.cart.reduce((sum, prod) => sum += prod.final, 0);
                return Math.round(total * 100) / 100 
        }
    }
}
</script>

<style scoped>
@media (max-width: 539px) {
    .products {
        width: 90%;
    }
    .products a {
        margin-top: 11%;
        width: 100%;
    }
    p {
        margin-top: 15%;    
    }
}
@media (min-width: 540px) and (max-width: 767px) {
    .products {
        width: 80%;
    }
    .products a {
        margin-top: 9%;
    }
    p {
        margin-top: 14%;
    }
}
@media (min-width: 768px) {
    .products {
        width: 80%;
    }
    .products p, a {
        margin-top: 13%;
    }  
}
@media (min-width: 992px) {
    .products {
        width: 60%;
    }
    .products p, a {
        margin-top: 13%;
    }
}
.empty {
    text-align: center;
    margin-top: 20vh;
}
.container {
    flex-wrap: wrap;
    margin-bottom: 40px;
    text-align: center;
    margin-top: 20vh;
}
.products {
    display: flex;
    flex-direction: row;
    font-size: 0.9rem;
    margin: 0;
    padding: 0;
    outline: 0.5px solid #00A4D4;
    background-color: white;
}
.products img {
    width: 30%;
    height: auto;
    margin-left: 0;
    padding: 3%;  
}
.products p, a {
    width: 80%;
}
.products a {
    padding-bottom: 20px;
}
.products .remove {
    font-size: 20px;
    background-color: white;
    padding: 30px;
    color: #00A4D4;
    text-align: center;
}
.count {
    display: flex;
    flex-direction: row;
    margin-left: 5%;
    border: 1px solid #00A4D4;
    margin-top: 12%;
    height: 40px;
}
.products .count button {
    background-color: white;
    color: #00A4D4;
}
.sum {
    display: flex;
    flex-wrap: wrap;
    margin-top: 30px;
    margin-bottom: 40px;
    justify-content: center;
    align-content: center;
    text-align: center;
}
.total {
    display: flex;
    flex-direction: column;
    width: 40%;
    align-content: center;
    justify-content: center;
    text-align: center;
}
.sum button {
    display: flex;
    justify-content: center;
    align-content: center;
    text-align: center;
    margin-top: 3vh;
}
</style>
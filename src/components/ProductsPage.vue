<template>
  <section class="container">
        <div class="products" v-for="product in $store.state.products" :key="product.id" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="linear">
            <div :id="product.id">
                <img :src=product.img>
                <router-link :to="'/product/' + product.name">{{ product.title }} {{ product.add }}</router-link>
                <p class="price">{{ product.val }}{{ product.price }}</p>
                <button @click="addToCart" v-show="!product.isAdded">Add to bag</button>
                <button @click="addToCart" v-show="product.isAdded">Added</button>
            </div>
        </div>
  </section> 
</template>

<script>
export default {
    methods:{
        addToCart ({target}){
            for (let product of this.$store.state.products) {
                if (product.id == target.parentNode.id) {                  
                    this.$store.commit('addToCart', product)
                }
            }
        }
    }
}
</script>

<style scoped>
@media (max-width: 539px) {
    .products {
        width: 80%; 
    }
}
@media (min-width: 540px) and (max-width: 767px) {
    .products {
        width: 50%; 
    }
}
@media (min-width: 768px) {
    .products {
        width: 30%; 
    }
}
@media (min-width: 992px) {
    .products {
        width: 25%; 
    }
}
.container {
    flex-wrap: wrap;
    background-color: white;
}
.products {
    display: flex; 
}
.products div {
    display: flex;
    flex-direction: column;
    font-size: 0.9rem;
    align-items: center;
    margin: 20px 30px;
    padding: 0;
    width: 100%;
    height: auto;
}
.products div img {
    width: 90%;
    height: auto;
    margin-left: 0;  
}
.products div a {
    text-align: center;
    width: 60%;
    padding-bottom: 8%;
}
.products div button {
    padding: 10px;
    color: white;
    border-radius: 5px;
}
.products div .price {
    margin-top: auto;
}
</style>


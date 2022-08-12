<template>
  <section class="container">
        <div class="products" v-for="product in singleProduct" :key="product" data-aos="fade-bottom" data-aos-duration="500" data-aos-easing="linear">
            <img :src=product.img>
            <div :id="product.id">
                <h3>{{ product.title }}</h3>
                <p class="add">{{ product.add }}</p>
                <p class="price">{{ product.val }}{{ product.price }}</p>
                <p>{{ product.description }}</p>
                <button @click="addToCart" v-show="!product.isAdded">Add to bag</button>
                <button @click="addToCart" v-show="product.isAdded">Added</button>
            </div>
        </div>
  </section>
</template>

<script>
export default {
  computed: {
    singleProduct: function(){
        let current = this.$route.params.name;
        return this.$store.state.products.filter(function(product){
            if (product.name == current){
                return product 
            }   
        })
    }
  },
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
* {
    background-color: #E2E2E2;
}
@media (max-width: 539px) {
    .products {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 80%; 
    }
    img {
        width: 100%;
        height: auto;
        padding: 50px;
    }
    .products div {
        padding: 50px;
    }
}
@media (min-width: 540px) and (max-width: 767px) {
    .products {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 80%; 
    }
    img {
        width: 100%;
        height: auto;
        padding: 50px;   
    }
    .products div {
        padding: 50px;
    }
}
@media (min-width: 768px) {
    .products div {
        padding: 0;
        margin: 70px 35px;
    }
    img {
        width: 55%;
        height: auto;
        margin-right: 0;
        padding: 0; 
}
}
@media (min-width: 992px) {
    .products div {
        padding: 0;
        margin: 70px 35px;
    }
    img {
        width: 55%;
        height: auto;
        margin-right: 0;
        padding: 0; 
    }
}
.container {
    flex-wrap: wrap;
    background-color: white;
}
.products {
    display: flex;
    width: 80%; 
}
.products div {
    display: flex;
    flex-direction: column;
    font-size: 0.9rem;
    align-items: flex-start;
    width: 100%;
    height: auto;
}
.add {
    margin-top: 0;
}
.price {
    font-family: 'NunitoSans-SemiBold';
}
button {
    background-color: black;
    border: black;
    color: white;
    padding: 10px;
    border-radius: 5px;
    width: 100%;
    height: auto;
    margin-top: auto;
}
button:hover {
    background-color: #00A4D4;
}
</style>
<template>
  <div class="home">
      <img id="pic1-sm" src="../assets/pics/Saltee3.jpg">
      <img id="pic2-sm" src="../assets/pics/coral.jpg">
      <div class="desc">
        <h2>EXPERIENCE LUXURY SPF</h2>
        <p>Every product in our luxury suncare range is evocatively scented, with fragrances 
            to awaken cherished holiday memories and spark dreams of your next exotic adventure; 
            where will Saltee take you?</p>
        <router-link to="/products">Discover</router-link> 
      </div>
  </div>
  <section class="line">
    <div class="pros">
        <div>
            <img src="../assets/pics/rabbit.png">
            <p>All Saltee products are vegan friendly, cruelty free and paraben free</p>
        </div>
        <div>
            <img src="../assets/pics/globe-copy.png">
            <p>Responsibly sourced and Oxybenzone free, making it safer for our oceans</p>
        </div>
        <div>
            <img src="../assets/pics/mail.png">
            <p>Free worldwide shipping when you spend £40 or more</p>
        </div>
        <div>
            <img src="../assets/pics/palm-tree.png">
            <p>For those dreaming of their next grand adventure</p>
        </div>
    </div>
  </section>
  <div>
    <h2>SHOP BESTSELLERS</h2>
  </div>
  <section class="line">
        <div class="best" v-for="product in bestProducts" :key="product" data-aos="fade-up" data-aos-duration="1500" data-aos-easing="linear">
            <div :id="product.id">
                <img :src=product.img>
                <router-link :to="'/product/' + product.name">{{ product.title }}</router-link>
                <p class="price">{{ product.val }}{{ product.price }}</p>
                <button @click="addToCart" v-show="!product.isAdded">Add to bag</button>
                <button @click="addToCart" v-show="product.isAdded">Added</button>
            </div>
        </div> 
  </section>
  <section class="brand">
      <h2>AS SEEN IN</h2>
      <img src="../assets/pics/brands.png">
  </section> 
  <div>
    <h2>DISCOVER A NEW ADVANTURE</h2>
  </div>
  <section class="articles">
        <div class="best" v-for="article in someArticles" :key="article" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="linear">
            <div>
                <img :src=article.img>
                <router-link :to="'/article/' + article.name" class="title">
                  {{ article.title }}
                </router-link>
            </div>
        </div> 
  </section> 
</template>

<script>
export default {  
    computed: {
        bestProducts: function () {
            return this.$store.state.products.filter(function (product) {
                return product.id <= 4;
            })
        },
        someArticles: function () {
            return this.$store.state.articles.filter(function (article) {
                return article.id <= 3;
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
@media (max-width: 539px) {
    #pic1-sm {
        width: 50%;
        height: auto;
    }
    #pic2-sm {
        display: none;
    }
    .pros {
        display: flex;
        flex-direction: row;
        width: 100%;  
    }
}
@media (min-width: 540px) and (max-width: 767px) {
    #pic1-sm {
        width: 50%;
        height: auto;
    }
    #pic2-sm {
        display: none;
    }
    .pros {
        display: flex;
        flex-direction: row;
        width: 100%;  
    }  
}
@media (min-width: 768px) {
    .pros {
        width: 80%;  
    }
}
@media (min-width: 992px) {
    .pros {
        width: 80%;  
    } 
}
.home {
    display: flex;
    justify-content: flex-start;
    margin-bottom: 50px;
    margin-top: 10vh;
}
.home img {
    width: 30%;
    height: auto;
}
.pros {
    display: flex;
    flex-direction: row; 
}
.pros div {
    font-size: 0.9rem;
    align-items: center;
    margin: 20px 30px;
    padding: 0;
    width: 50%;
}
.pros div img {
    width: 30%;
    height: auto;
    margin-left: 25%;  
}
div p {
    text-align: center;
    width: 80%;
}
.desc {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.desc a {
    text-decoration: none;
    background-color: #00A4D4;
    padding: 10px;
    color: white;
    border-radius: 5px;
    margin-top: 20px;
}
.desc a:hover {
    background-color: black;
    padding: 10px;
    color: white;
    border-radius: 5px;
    margin-top: 20px;
}
h2 {
    margin: 40px 10px;
    text-align: center;
}
.line {
    display: flex;
    align-content: center;
    justify-content: center;
    background-color: white;
}
.articles {
    display: flex;
    align-content: center;
    justify-content: center;
    background-color: #E2E2E2;
}
.best {
    display: flex;
    flex-direction: row;
    width: 80%;  
    margin-bottom: 15vh;
}
.best div a, p {
    text-align: center;
    width: 50%;
    padding-bottom: 10%;
}
.best div {
    display: flex;
    flex-direction: column;
    font-size: 0.9rem;
    align-items: center;
    margin: 20px 30px;
    padding: 0;
    width: 100%;
}
.best div img {
    width: 90%;
    margin-left: 0;
    margin-bottom: 5vh;  
}
.title {
    text-align: center;
    width: 60%;
}
.price {
    margin-top: auto;
}
.articles .best .title:hover{
    color: #00A4D4;
}
.brand h2 {
    background-color: white;
    margin: 0;
    padding-bottom: 10vh;
}
.brand img {
    width: 100%;
    margin-top: 0;
    margin-bottom: 10vh;
}
</style>
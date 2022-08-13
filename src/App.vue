<template>

  <body>
  <div class="menu">
    <div class="logo">
        <router-link to="/"><img src="./assets/pics/saltee_logotype_black.png"></router-link>
    </div>
    <nav>
        <router-link to="/products">Shop</router-link>
        <router-link to="/foundation">Saltee Foundation</router-link>
        <router-link to="/journal">Journal</router-link>
        <router-link to="/contacts">Contacts</router-link>
        <router-link to="/delivery">Delivery</router-link>
    </nav>
    <div>
      <router-link to="/basket" class="basket">
        <img id="basket" src="./assets/pics/shopping-cart.png">
        <p id="count">( {{ $store.state.cartCount }} )</p>
      </router-link>
      <div class="search-container">  
        <input class="search" v-model="userInput" type="text" placeholder="Search">
        <div v-if="userInput" class="results" data-aos="fade-bottom" data-aos-duration="300" data-aos-easing="linear">
            <div v-for="product in validItems.slice(0, 4)" :key="product.id">
              <div class="item">
                <div>
                  <router-link :to="'/product/' + product.name"><img :src=product.img></router-link>
                </div>
                <div>
                  <router-link :to="'/product/' + product.name">{{ product.title }}</router-link>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
  <div class="view-page">
  <router-view/>
  </div>
  </body>
</template>

<script>
export default {
  data(){
    return {
      userInput: ''
    }
  },
  computed: {
    validItems(){ 
      return this.$store.state.products.filter(
        item => item.title.
          toLowerCase().indexOf(this.userInput.toLowerCase().trim()) > -1
      );
    }
  }
}
</script>

<style>
  * {
    box-sizing: border-box;
    font-family: NunitoSans-ExtraLight;
  }
  @font-face {
    font-family: 'NunitoSans-ExtraLight';
    src: local('NunitoSans-ExtraLight'), 
      url('./assets/fonts/Nunito_Sans/NunitoSans-ExtraLight.ttf') format('truetype');
  }
  @font-face {
    font-family: 'NunitoSans-SemiBold';
    src: local('NunitoSans-SemiBold'), 
      url('./assets/fonts/Nunito_Sans/NunitoSans-SemiBold.ttf') format('truetype');
  }
  @font-face {
    font-family: 'NunitoSans-Light';
    src: local('NunitoSans-Light'), 
      url('./assets/fonts/Nunito_Sans/NunitoSans-Light.ttf') format('truetype');
  }
  strong {
    font-family: 'NunitoSans-SemiBold';
  }
  body {
    background-color: #E2E2E2;
    margin: 0;
  }
  h1, h2, h3 {
    font-family: NunitoSans-SemiBold;
  }
  .logo {
    text-align: center;
  }
@media (max-width: 539px) {
  .logo a img {
    width: 18%;
  }
  .search-container {
    display: none;
  }
  #basket {
    width: 4.5vw;
    height: 30px;
  }
  .page {
    width: 80%;
  }
}
@media (min-width: 540px) and (max-width: 767px) {
  .logo a img {
    width: 16%;
  }
  .search-container {
    display: none;
  }
  #basket {
    width: 4vw;
    height: 33px;
  }
  .page {
    width: 80%;
  }
}
@media (min-width: 768px) {
  .logo a img {
    width: 13%;
  }
  #basket {
    width: 3.6vw;
    height: 35px;
  }
  .page {
    width: 50%;
  }
}
@media (min-width: 992px) {
  .logo a img {
    width: 9%;
  }
  #basket {
    width: 2.7vw;
    height: 37px;
  }
  .page {
    width: 50%;
  }
}
.logo a img {
  height: auto;
  padding-bottom: 10px;
}
.menu {
  display: inline;
  margin: 0;
  background-color: white;
  overflow: hidden;
  text-align: center;
  position: fixed;
  z-index: 2; 
  top: 0;
  left: 0;
  right: 0; 
  width: 100%;
  padding: 10px 0; 
}
nav a {
  font-family: NunitoSans-Light;
  margin-left: inherit;
  color: black;
  padding: 14px 16px;
  text-decoration: none;
}
a {
  text-decoration: none;
  color: black;
}
a:hover {
  color: #00A4D4;
  transition-duration: 0.7s;
}
button {
  background-color: black;
  border: black;
  padding: 10px;
  color: white;
  border-radius: 5px;
}
button:hover {
  background-color: #00A4D4;
  color: white;
  transition-duration: 0.7s;
}
.basket {
  display: flex;
  position: absolute;
  top: 8px;
  right: 2vw;
}
#count {
  font-size: 14px;
  margin-left: 7px;
}
.search {
  display: flex;
  position: absolute;
  top: 67%;
  right: 2vw;
  border: 1.5px solid black;
  border-radius: 5px;
  width: 10%;
  z-index: 2;
}
.search:focus {
  outline: none;
  border: 1.5px solid #00A4D4;
}
.results {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: auto;
  right: 0;
  width: 20vw;
  height: auto;
  background-color: white;
  padding: 10px;
  z-index: 1; 
}
.item {
  display: flex;
  flex-direction: column;
  padding: 10px; 
}
.item img {
  width: 30%;
  height: auto;
}
.container {
  display: flex;
  align-content: center;
  justify-content: center;
  margin-top: 15vh;
}
</style>

<template>
  <section class="container">
        <div class="articles" v-for="article in $store.state.articles" :key="article" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="linear">
            <div>
                <img :src=article.img>
                <router-link :to="'/article/' + article.name" class="title">
                  {{ article.title }}
                </router-link>
            </div>
        </div>
  </section> 
</template>

<style scoped>
@media (max-width: 539px) {
    .articles {
        width: 80%; 
    }
}
@media (min-width: 540px) and (max-width: 767px) {
    .articles {
        width: 80%; 
    }
}
@media (min-width: 768px) {
    .articles {
        width: 50%; 
    }
}
@media (min-width: 992px) {
    .articles {
        width: 33%; 
    }
}
.container {
    flex-wrap: wrap;
    background-color: white;
}
.articles {
    display: flex;
}
.articles div {
    display: flex;
    flex-direction: column;
    font-size: 0.9rem;
    align-items: center;
    margin: 20px 30px;
    padding: 0;
    width: 100%;
    height: auto;
}
.articles div img {
    width: 90%;
    height: auto;
    margin-left: 0;
    padding-bottom: 8%; 
}
.articles div p {
    color: black;
    text-align: center;
    width: 60%;
    padding-bottom: 8%;
}
.title {
    text-align: center;
    width: 60%;
    padding-bottom: 7%;
}
.title:hover{
    color: #00A4D4;
}
.btn {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    background-color: black;
    padding: 5px;
    color: white;
    border-radius: 5px;
    width: 25%;
    height: 6.5vh;
    margin-top: auto;
}
.btn:hover {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    background-color: #00A4D4;
    padding: 5px;
    color: white;
    border-radius: 5px;
    width: 25%;
    height: 6.5vh;
    margin-top: auto;
}
</style>
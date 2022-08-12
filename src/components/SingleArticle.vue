<template>
  <section class="container">
        <div class="article" v-for="article in singleArticle" :key="article">
            <div>
                <h3>{{ article.title }}</h3>
                <p>{{ article.date }}</p>
                <img :src=article.img>
                <p class="text">{{ article.text }}</p>
            </div>
        </div>
  </section>
</template>

<script>
export default {
  computed: {
    singleArticle: function() {
        let current = this.$route.params.name;
        return this.$store.state.articles.filter(function (article) {
            if (article.name == current) {
                return article; 
            }   
        })
    }
  }
}
</script>

<style scoped>
.article {
    display: flex;
    flex-direction: column;
    width: 60%;
}
.text {
    text-align: start;
    white-space: pre-line;
}
h3, p {
    text-align: center;
    margin-bottom: 30px;
}
img {
    width: 100%;
    height: auto;
}
</style>
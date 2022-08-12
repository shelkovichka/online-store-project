import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import ProductsPage from '../components/ProductsPage.vue'
import SingleProduct from '../components/SingleProduct.vue'
import InfoPage from '../components/InfoPage.vue'
import JournalPage from '../components/JournalPage.vue'
import SingleArticle from '../components/SingleArticle.vue'
import ContactsPage from '../components/ContactsPage.vue'
import DeliveryPage from '../components/DeliveryPage.vue'
import BasketPage from '../components/BasketPage.vue'

const routes = [
  {
    path: '/',
    name: 'saltee',
    alias: '/saltee',
    component: HomePage
  },
  {
    path: '/products',
    name: 'products',
    component: ProductsPage
  },
  { 
    path: '/product/:name',
    name: 'product',
    component: SingleProduct
  },
  {
    path: '/foundation',
    name: 'foundation',
    component: InfoPage
  },
  {
    path: '/journal',
    name: 'journal',
    component: JournalPage
  },
  { 
    path: '/article/:name',
    name: 'article',
    component: SingleArticle
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: ContactsPage
  },
  {
    path: '/delivery',
    name: 'delivery',
    component: DeliveryPage
  },
  {
    path: '/basket',
    name: 'basket',
    component: BasketPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(savedPosition){
    if(savedPosition){
      return { left: 0, top: 0}
    }
  }
})

export default router

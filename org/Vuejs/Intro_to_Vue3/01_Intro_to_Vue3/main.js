const product = 'Socks'


const app = Vue.createApp({
  data() {
    return {
      product: 'Socks',
      image: './assets/images/socks_green.jpg',
      inStock: true, // new data property;
      inventory: 100
    }
  }
})

const mountedApp = app.mount('#app');
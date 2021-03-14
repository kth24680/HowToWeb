const product = 'Socks'


const app = Vue.createApp({
  data() {
    return {
      product: 'Socks',
      image: './assets/images/socks_green.jpg'
    }
  }
})

const mountedApp = app.mount('#app');
let app = Vue.createApp({
  data() {
    return {
      quotes,
      currentQuote:quotes[Math.floor(Math.random() * quotes.length)],
      toggle:true,
      bgActive:false
    }
  },
  methods: {
    changeQuote() {
      this.toggle=!this.toggle
       let num=quotes[Math.floor(Math.random() * quotes.length)]
       setTimeout(() => {
        this.toggle=!this.toggle
      }, 1000);
        this.currentQuote= num
    },
    activeBg(){
      this.bgActive=!this.bgActive
    }
  },
})


app.mount('#app')

import Vue from 'vue'
import Hello from './Hello.vue'

new Vue({
  el: '#app',
  data: {
    message: "Vue on Webpack"
  },
  components: { Hello },
  template: `
  <div>
    <h1>{{message}}</h1>
    <Hello />
  </div>
  `
})
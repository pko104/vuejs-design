import Vue from 'vue'
import App from './App.vue'
import Nav from './Nav.vue'

new Vue({
  el: '#app',
  render: h => h(App)
})

new Vue({
  el: '#nav-bar',
  render: h => h(Nav)
})
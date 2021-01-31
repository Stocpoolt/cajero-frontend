// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

    //"dev": "webpack-dev-server --inline --progress --config build/webpack.dev.conf.js",
    //"start": "npm run dev",
    //"build": "node build/build.js"
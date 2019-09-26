import Vue from 'vue'
import App from './App.vue'
import * as fb from 'firebase/app'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App),
  created () {
    var firebaseConfig = {
      apiKey: 'AIzaSyBZJHGXPg0yjVP5o-3MWVyhIROSykUnZiw',
      authDomain: 'testdb-32619.firebaseapp.com',
      databaseURL: 'https://testdb-32619.firebaseio.com',
      projectId: 'testdb-32619',
      storageBucket: 'testdb-32619.appspot.com',
      messagingSenderId: '249322938490',
      appId: '1:249322938490:web:1040dae601940eade85bc3'
    }
    // Initialize Firebase
    fb.initializeApp(firebaseConfig);
  }
}).$mount('#app')

<template>
  <div class="fondo">
    <div id="app" class="app">
      <div class="header">
        <h1>National University Bank</h1>
        <nav>
          <button v-on:click="init" v-if="is_auth" ><font-awesome-icon icon="home"/> Home</button>
          <button v-on:click="getBalance" v-if="is_auth" ><font-awesome-icon icon="money-bill" class="mr-2"/>Balance</button>
          <button v-on:click="doTransaction" v-if="is_auth" ><font-awesome-icon icon="credit-card" class="mr-2"/>Transaction</button>
          <button v-on:click="logOut" v-if="is_auth" ><font-awesome-icon icon="door-open"/>Sign off</button>
        </nav>
      </div>
      <div class="main-component">
        <router-view  v-on:log-in="logIn" ></router-view>
      </div>
      <div class="footer">
        <h2>
          &copy; National University Bank 2021
        </h2>
      </div>
    </div>
  </div>
</template>


<script>
import vueRouter from 'vue-router'
export default {
  name: 'App',
  data: function(){
      return{ 
        is_auth: localStorage.getItem('isAuth') || false
      }    
  },

  components: {
  },

  methods:{
    updateAuth: function(){
      var self = this
      self.is_auth  = localStorage.getItem('isAuth') || false

      if(self.is_auth == false)
        self.$router.push({name: "user_auth"})

      else{
        let username = localStorage.getItem("current_username")
        self.$router.push({name: "user", params:{ username: username }})
      }  
    },

    logIn: function(username){
      localStorage.setItem('current_username', username)
      localStorage.setItem('isAuth', true)
      this.updateAuth()
    },

    logOut: function(){
      localStorage.removeItem('isAuth')
      localStorage.removeItem('current_username')
      this.updateAuth()
    },

    init: function(){
      if(this.$route.name != "user"){
        let username = localStorage.getItem("current_username")
        this.$router.push({name: "user", params:{ username: username }})
      }
      
    },

    getBalance: function(){
      if(this.$route.name != "user_balance"){
        let username = localStorage.getItem("current_username")
        this.$router.push({name: "user_balance", params:{ username: username }})
      }
    },


    doTransaction: function(){
      
        let username = localStorage.getItem("current_username")
        this.$router.push({name: "user_transaction", params:{ username: username }})
    }
  },

  created: function(){
    this.$router.push({name: "root"})
    this.updateAuth()
  }
}
</script>


<style>
  body {
    margin: 0%;
}
/* Encabezado */
  .header{
    margin: 0%;
    padding: 0;
    width: 100%;
    height: 10vh;
    min-height: 100px;
    background-color: #000314c5 ;
    color:#E5E7E9 ;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  /* Distancia entre el borde y el titulo (NU Bank) */
  .header h1{
    width: 30%;
    text-align: center;
  }
  .header nav {
    height: 100%;
    /* Espacio entre botones */
    width: 45%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 20px;
  }
  .header nav button{
    /* Color letra de botón; del botón; del borde */
    color: #fff;
    display: inline-block;
    border: 1px solid transparent;
    line-height: 1.5;
    margin-top: .25rem;
    margin-bottom: .25rem;
    font-weight: 1000;
    border-radius: 2em;
    padding: .375rem .75rem;
    background-color: #000314c5;
    border-color: #f7f7f7e0;
    width: 180px;
    /* Redondes del borde del botón; ancho y alto */
    border-radius: 5px;
    padding: 10px 20px;
  }
  .header nav button:hover{
    color: #700505;
    background: #E5E7E9;
    border: 1px solid #E5E7E9;
  }
  .main-component{
    height: 75vh;
    margin: 0%;
    padding: 0%;
  }
  .footer{
    margin: 0;
    padding: 0;
    width: 100%;
    height: 10vh;
    min-height: 100px;
    /* Color parte de abajo; letra de dicha parte */
    background-color: #000314c5;
    color: #E5E7E9;
  }
  .footer h2{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .fondo{
    background-image: linear-gradient(rgba(19, 45, 94, 0.65), rgba(80, 34, 13, 0.65)), url('../src/assets/principal.jpg');
    width: 100%;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
  }
</style>
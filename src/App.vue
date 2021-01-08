<template>
  <div id="app">
    <div class="header">
    
    <h1>NU Bank</h1>
    <nav>
      <button v-on:click="init" v-if="is_auth" > Inicio </button>
      <button v-on:click="getBalance" v-if="is_auth" > Saldo </button>
      <button v-if="is_auth" > Transacción </button>
      <button v-if="is_auth" >Cerrar Sesión</button>
    </nav>
    </div>

    <div class="main-component">
      <router-view></router-view>
    </div>

    <div class="footer">
      <h2>Misión TIC 2022</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data: function(){
    return {
      is_auth: localStorage.getItem('isAuth') || false
    }
  },
  
  methods: {

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

    },

    beforeCreate: function(){
      localStorage.setItem('current_username', 'andres24')
      localStorage.setItem('isAuth', true)

      this.$router.push({name: "user", params:{ username: 'andres24' }})
    }
  }
</script>

<style>
  body{
    margin: 0 0 0 0;
  }
/* Encabezado */
  .header{
    margin: 0%;
    padding: 0;
    width: 100%;
    height: 10vh;
    min-height: 100px;
    background-color: #700505 ;
    color:#E5E7E9 ;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  /* Distancia entre el borde y el titulo (NU Bank) */
  .header h1{
    width: 20%;
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
    color: #E5E7E9;
    background: #9e0d0d;
    border: 1px solid #E5E7E9;
    
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
    background: #FDFEFE ;
  }
  .footer{
    margin: 0;
    padding: 0;
    width: 100%;
    height: 10vh;
    min-height: 100px;
    /* Color parte de abajo; letra de dicha parte */
    background-color: #700505;
    color: #E5E7E9;
  }
  .footer h2{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
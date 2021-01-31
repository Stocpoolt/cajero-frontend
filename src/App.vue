<template>
  <div id="app">
    <div>
      <ul class="navbar">
        <li class="nav"><router-link class="bar" to="/home">Home</router-link></li>
        <li class="nav"><router-link class="bar" to="/consultar">Consultar</router-link></li>
        <li class="nav"><router-link class="bar" to="/reservar">Reservar</router-link></li> 
        <li class="dropdown nav">
          <a class="dropbtn">Actualizar</a>
          <div class="dropdown-content">
            <router-link class="loco" to="/actualizar/datos_reserva">Actualizar datos de la reserva</router-link>
            <router-link class="loco" to="/actualizar/datos_usuario">Actualizar datos del usuario</router-link>
          </div>
        </li>
        <li class="nav"><router-link class="bar" to="/aboutus">¿Quienes somos?</router-link></li> 
      </ul>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'App'
}
</script>
<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
.navbar {
  list-style-type: none;
  margin: 0;
  padding: 0;
  border: 1px solid #e7e7e7;
  overflow: hidden;
  background-color: #f3f3f3;
  top: 0;
  width: 100%;
}

.nav {
  float: left;
}

.nav a, .dropbtn {
  display: inline-block;
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

.nav a:hover, .dropdown:hover .dropbtn {
  background-color: #4CAF50;
}

li.dropdown {
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content a:hover {background-color: #f1f1f1;}

.dropdown:hover .dropdown-content {
  display: block;
}


</style>
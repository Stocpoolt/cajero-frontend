<template>
    <div class="actualizarDatos">
        <h1>Actualice sus datos</h1>
        <form action="">
          <fieldset>
            <legend> Autenticacion</legend>
            <div>
              <label>Email address: </label>
              <input type="text" v-model="email" class="form-control"  aria-describedby="emailHelp" placeholder="email@example.com">
              <label >Numero de documento: </label>
              <input type="text" v-model="numero_documento" class="form-control" id="numero_identificacion" aria-describedby="emailHelp" placeholder="Identificacion">
            </div>
          </fieldset>
          <br>
          <fieldset>
            <legend>Datos del usuario a actualizar</legend>
            <label for="fname">Nombre</label>
            <input type="text" v-model="nombre" placeholder="Your name..">
            <label for="lname">Apellido</label>
            <input type="text" v-model="apellido" placeholder="Your last name..">
            <label >Telefono: </label>
            <input type="text" v-model="numero_celular" class="form-control"  aria-describedby="emailHelp" placeholder="Telefono">
            <label>Tipo de documento: </label>
            <select class="form-control" v-model="tipo_documento" >
                <option>Seleccione...</option>
                <option>Cedula de ciudadania</option>
                <option>Pasaporte</option>
            </select>
            </fieldset>
        </form>
        <br>
        <button v-on:click.prevent="actualizarDatos" class="button button2">Actualizar datos</button>
    </div>
</template>


<script>
import axios from 'axios';
export default{
  name:'actualizarDatos',
  data: function(){
    return{
      nombre:"",
      apellido:"",
      email:"",
      numero_celular:null,
      tipo_documento:"",
      numero_documento:null
    }
  },
  methods:{
    actualizarDatos: function(){
      let self = this
      axios.put("https://stocpoolt-hotel-frontend.herokuapp.com/actualizar/datos_usuario/",
                "http://localhost:8081/actualizar/datos_usuario/",
      {
        nombre: this.nombre,
        apellido: this.apellido,
        email: this.email,
        tipo_documento: this.tipo_documento,
        numero_documento: this.numero_documento,
        numero_celular: this.numero_celular
      }).then(response =>{
        console.log("Actualizacion exitosa")
      }).catch(e => {alert("SERVER ERROR")})
    }

  }
}
</script>


<style scoped>
.actualizarDatos{
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
form{
    width: 50%;
    margin-left: auto;
    margin-right: auto;

}
body {font-family: Arial, Helvetica, sans-serif;}
* {box-sizing: border-box;}

input[type=text], select, textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}
input[type=submit] {
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
input[type=submit]:hover {
  background-color: #45a049;
}
fieldset{
    background-color: #f2f2f2;
}
.button {
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
}
.button2:hover {
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
}
</style>
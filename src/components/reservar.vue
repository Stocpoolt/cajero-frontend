<template>
    <div class="reservar">
        <h1>Reservar</h1>
        <form>
            <fieldset>
                <legend>Datos del usuario</legend>
                <label for="fname">Nombre</label>
                <input type="text"  v-model="nombre" placeholder="Your name..">

                <label for="lname">Apellido</label>
                <input type="text"  v-model="apellido" placeholder="Your last name..">
                <label>Email address: </label>
                <input type="text" class="form-control"  v-model="email" aria-describedby="emailHelp" placeholder="email@example.com">
                <label >Telefono: </label>
                <input type="text" class="form-control" v-model="numero_celular"  aria-describedby="emailHelp" placeholder="Telefono">
                <label>Tipo de documento: </label>
                
                <select type="text" class="form-control"  v-model="tipo_documento" >

                    <option>Seleccione...</option>
                    <option>Cedula de ciudadania</option>
                    <option>Pasaporte</option>
                </select>
                
                <label >Numero de documento: </label>
                <input type="text" class="form-control" v-model="numero_documento"  aria-describedby="emailHelp" placeholder="Identificacion">
            </fieldset>
            <br>
            <br>

            <fieldset class="form-group">
                <legend>Datos de la reserva</legend>
                <div>
                    
                    <label >Fecha de Ingreso:</label>
                    <input type="date" v-model="date_in"  name="trip-start"
                    value="2018-07-22"
                    min="2018-01-01" max="2030-12-31">
                
                    <label >Fecha de salida:</label>
                    <input type="date" v-model="date_out"  name="trip-finish"
                    value="2018-07-22"
                    min="2018-01-01" max="2030-12-31">


                </div>
                <div class="form-group">
                    <label >Cantidad de adultos: </label>
                    <input type="text" v-model="num_adults" class="form-control"  aria-describedby="emailHelp" placeholder="Cant adultos">
                </div>
                <div class="form-group">
                    <label >Cantidad de niños: </label>
                    <input type="text" v-model="num_childs" class="form-control"  aria-describedby="emailHelp" placeholder="Cant niños">
                </div>
                <div>
                    <label>Tipo de acomodacion: </label>
                    
                    <select type="text" class="down"  v-model="tipo_acomodacion" >
                        <option>Seleccione...</option>
                        <option>Sencilla</option>
                        <option>Doble</option>
                        <option>suit nutcial</option>
                        <option>VIP precidencial</option>
                    </select>
                    

                </div>  
            
            </fieldset>
    
        </form>
        <br>
        <button class="button button2" v-on:click.prevent="realizarReserva">Reservar</button>

    </div>
</template>

<script>
import axios from 'axios';
export default{
    name:'reservar',
    data: function(){
        return{
            nombre:"",
            apellido:"",
            email:"",
            numero_celular:null,
            tipo_documento:"",
            numero_documento:null,
            date_in:"",
            date_out:"",
            num_childs:null,
            num_adults:null,
            tipo_acomodacion:""

        }
    },
    methods:{
            realizarReserva: function(){
                let self = this
                axios.post("https://hotel-app-g5.herokuapp.com/reservar/", {
                    nombre: this.nombre,
                    apellido: this.apellido,
                    email: this.email,
                    tipo_documento: this.tipo_documento,
                    numero_documento: this.numero_documento,
                    numero_celular: this.numero_celular,
                    date_in: this.date_in,
                    date_out: this.date_out,
                    num_childs: this.num_childs,
                    num_adults: this.num_adults,
                    tipo_acomodacion: this.tipo_acomodacion

                }).then(response => {
                    console.log("hola")
                }).catch(e => {alert("Server Error")}
                )
            }
        }
}
</script>
<style scoped>
.reservar{
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;


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
form{
width: 50%;
margin-left: auto;
margin-right: auto;

}
body {font-family: Arial, Helvetica, sans-serif;}
* {box-sizing: border-box;}

input[type=text], select, textarea, input[type=date] {
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
 
</style>

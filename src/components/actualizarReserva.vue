<template>
    <div id="actualizarReserva">
        <h1>Actualizar datos de la reserva</h1>
        <form>
            <fieldset>
                <legend>Auntenticacion</legend>
                <br>
                <div>
                    <label> Email:</label>
                    <input type="text" v-model="email" placeholder="email">
                    <label> Numero de documento:</label>
                    <input type="text" v-model="numero_documento" placeholder="identificacion">
                </div>
            </fieldset>
            <br>
            <fieldset class="form-group">

                <legend>Nuevos datos de reserva</legend>
                <br>
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
        <button class="button button2" v-on:click.prevent="actualizarReserva">Actualizar reserva</button>


    </div>

</template>

<script>
import axios from 'axios';
export default{
    name:'actualizarReserva',
    data: function(){
        return{
            email:"",
            numero_documento:null,
            date_in:"",
            date_out:"",
            num_childs:null,
            num_adults:null,
            tipo_acomodacion:""

        }
    },
    methods:{
        actualizarReserva: function(){
            let self = this
            axios.put("https://hotel-app-g5.herokuapp.com/actualizar/reserva",{
                email: this.email,
                numero_documento: this.numero_documento,
                date_in: this.date_in,
                date_out: this.date_out,
                num_childs: this.num_childs,
                num_adults: this.num_adults,
                tipo_acomodacion: this.tipo_acomodacion
            }).then(response => {
                console.log("actualizacion de reserva exitosa")
            }).catch(e => { alert("ERROR SERVER")})
        }

    }
}
</script>

<style scoped>
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

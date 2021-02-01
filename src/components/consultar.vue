<template>
    <div id="consultar">
        <img class="loguito" src="../assets/hotel-spiaga.png">
        <br>
        <h2>Consultar reserva</h2>
        <ul>
            <fieldset >
                <legend>Ingrese sus datos</legend>
                <div>
                    <ul>
                        <li>
                            <label >Ingrese su email:</label>
                            <input type="text" v-model="email" id="email" placeholder="email">
                        </li>
                        <li>
                            <label >Numero de identificacion:</label>
                            <input type="text" v-model="numero_documento" id="num_identificacion">
                        </li>
                    </ul>
                </div>
            </fieldset>
            <br>
            <fieldset class="form-group">
                <legend>Datos de la reserva</legend>
                <ul>
                    <li> <b>Nombre:</b>  {{nombre}}  {{apellido}}</li>
                    <li> <b>Fecha de ingreso:</b> {{date_in}}</li>
                    <li> <b>fecha de salida:</b> {{date_out}}</li>
                    <li><b>numero de niños:</b> {{num_childs}}</li>
                    <li><b>numero de adultos:</b> {{num_adults}}</li>
                    <li><b>Tipo de acomodacion:</b> {{tipo_acomodacion}}</li>
                </ul>   
            </fieldset>
        </ul>
        <button class="button button2" v-on:click.prevent="search">Consultar</button>
        <br>
        <br>
        <ul>
            <li>
                <a class="dos" href="http://www.facebook.com/" target="_blank">
                <img alt="Siguenos en Facebook" src="https://lh6.googleusercontent.com/-CYt37hfDnQ8/T3nNydojf_I/AAAAAAAAAr0/P5OtlZxV4rk/s32/facebook32.png" width=40 height=40  />
                </a>
            </li>
            <li>
                <a class="dos" href="https://www.instagram.com/" target="_blank">
                <img alt="Siguenos en Blogger" src="https://lh5.googleusercontent.com/-vBqtz2iv2BE/UIqE3LQyFMI/AAAAAAAABgA/TJ4W-vIBjsc/s32/instagram32.png" width=40 height=40  />
                </a>
            </li>
            <li>
                <a class="dos" href="https://www.tripadvisor.com/" target="_blank">
                <img alt="Siguenos en Blogger" src="https://www.marquesdeguadiaro1.com/wp-content/uploads/tirpadvisor-marques-guadiaro1-malaga.png" width=50 height=40  />
                </a>
            </li>
        </ul>
    </div>
</template>


<script>
import axios from 'axios';
 export default{
     name:'consultar',
     data: function(){
         return{
             email:"",
             numero_documento:null,
             nombre: "",
             apellido:"",
             date_in:"",
             date_out:"",
             num_childs:null,
             num_adults:null,
             tipo_acomodacion:""
             }
        },
        methods:{
            search: function(){
                let self = this
                axios.post("https://stocpoolt-hotel-frontend.herokuapp.com/consultar/",
                           "http://localhost:8081/consultar/",
                           {
                            'email':this.email,
                            'numero_documento':this.numero_documento    
                }).then(response => {
                    this.nombre = response.data.nombre
                    this.apellido = response.data.apellido
                    this.date_in = response.data.date_in
                    this.date_out = response.data.date_out
                    this.num_childs = response.data.num_childs
                    this.num_adults = response.data.num_adults
                    this.tipo_acomodacion = response.data.tipo_acomodacion
                }).catch(e => {alert("Server Error")}
                )
            }
        },
        created: function(){
        }
    }
</script>


<style scoped>
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
    h1, h2 {
    font-weight: normal;
    }
    ul {
    list-style-type: none;
    padding: 0;
    }
    li {
    display: inline-block;
    margin: 0 40px;
    }
    .dos {
    color: #42b983;
    }
    label {
        display: block;
        font: 1rem 'Fira Sans', sans-serif;
    }
    input,button,
    label {
        margin: .4rem 0;
    }
    fieldset{
        width: 25%;
        margin-left: auto;
        margin-right: auto;
    }
    .loguito{
        width: 50%;
        margin-left: auto;
        margin-right: auto;
    }
</style>
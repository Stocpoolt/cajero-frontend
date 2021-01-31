<template>
  <div class="home">

    <img class="loguito" src="../assets/hotel-spiaga.png">
    <h2>Para obtener informacion de promociones y demas, REGISTRATE.</h2>

    <button onclick="document.getElementById('id01').style.display='block'" style="width:auto;">Registrarme</button>
    <div id="id01" class="modal">
      <span onclick="document.getElementById('id01').style.display='none'" class="close" title="Close Modal">&times;</span>
      <form class="modal-content" action="/action_page.php">
        <div class="container">
          <h1>Formulario de registro</h1>
          <p>Por favor llenar los campos para registrarte en la pagina del hotel</p>
          <hr>
          <label><b>Nombre:</b></label>
          <input type="text" v-model="nombre" placeholder="Nombre"  required>

          <label><b>Apellido:</b></label>
          <input type="text" v-model="apellido" placeholder="Apellido"  required>

          <label><b>Email:</b></label>
          <input type="text" v-model="email" placeholder="Enter Email"  required>

          <label><b>Telefono:</b></label>
          <input type="text" v-model="telefono" placeholder="Enter telefono"  required>

          <label>
            <input type="checkbox" checked="checked" name="remember" style="margin-bottom:15px"> Remember me
          </label>

          <p>Al registrar tus datos estas de acuerco con <a href="#" style="color:dodgerblue">Terminos & Condiciones</a>.</p>

          <div class="clearfix">
            <button type="button" onclick="document.getElementById('id01').style.display='none'" class="cancelbtn">Cancelar</button>
            <button v-on:click.prevent="agregarCliente" type="submit" class="signupbtn">Registrar</button>
          </div>
        </div>
      </form>
    </div>
    <br>
    <br>

    <div>
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
    

  </div>
</template>
<script>
import axios from 'axios';
export default{
  name:'home',
  data: function(){
    return{
      nombre:"",
      apellido:"",
      email:"",
      telefono:null

    }
  },
  methods:{
    agregarCliente: function(){
      let self = this
      axios.post("https://hotel-app-g5.herokuapp.com/home",{
        email:this.email,
        nombre:this.nombre,
        apellido:this.apellido,
        telefono:this.telefono
      }).then(response => {
        console.log("cliente añadido exitosamente")
      }).catch(e =>{alert('SERVER ERROR')})

      

    }

  }
}
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {font-family: Arial, Helvetica, sans-serif;}
* {box-sizing: border-box;}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 40px;
}

/* Full-width input fields */
input[type=text], input[type=password] {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}

/* Add a background color when the inputs get focus */
input[type=text]:focus, input[type=password]:focus {
  background-color: #ddd;
  outline: none;
}

/* Set a style for all buttons */
button {
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
}

button:hover {
  opacity:1;
}

/* Extra styles for the cancel button */
.cancelbtn {
  padding: 14px 20px;
  background-color: #f44336;
}

/* Float cancel and signup buttons and add an equal width */
.cancelbtn, .signupbtn {
  float: left;
  width: 50%;
}

/* Add padding to container elements */
.container {
  padding: 16px;
}

/* The Modal (background) */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: #474e5d;
  padding-top: 50px;
}

/* Modal Content/Box */
.modal-content {
  background-color: #fefefe;
  margin: 5% auto 15% auto; /* 5% from the top, 15% from the bottom and centered */
  border: 1px solid #888;
  width: 80%; /* Could be more or less, depending on screen size */
}

/* Style the horizontal ruler */
hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}
 
/* The Close Button (x) */
.close {
  position: absolute;
  right: 35px;
  top: 15px;
  font-size: 40px;
  font-weight: bold;
  color: #f1f1f1;
}

.close:hover,
.close:focus {
  color: #f44336;
  cursor: pointer;
}

/* Clear floats */
.clearfix::after {
  content: "";
  clear: both;
  display: table;
}

/* Change styles for cancel button and signup button on extra small screens */
@media screen and (max-width: 300px) {
  .cancelbtn, .signupbtn {
     width: 100%;
  }
}

.loguito{
    width: 70%;
    margin-left: auto;
    margin-right: auto;
}
</style>

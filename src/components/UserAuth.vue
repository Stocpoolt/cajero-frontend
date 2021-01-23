<template>
    <div id="AuthUser" class="auth_user">
        <div class="container_auth_user">
            <h1>Autenticarse</h1>
            <form v-on:submit.prevent="processAuthUser" >
                <input type="text" v-model="user_in.username" placeholder="Insert your username">
                <br>
                <input type="password" v-model="user_in.password" placeholder="Insert your password">
                <br>
                <button type="submit">Iniciar sesion</button>
            </form>
        </div>
    </div>
</template>


<script>
import axios from 'axios';
export default {
    name: "UserAuth",
    data: function(){
        return {
            user_in: {
                username:"",
                password:""
            }
        }
    },

    methods: {
        processAuthUser: function(){
            var self = this
            axios.post("https://stocpoolt-cajero-backend.herokuapp.com/user/auth/", self.user_in,  {headers: {}})
                .then((result) => {
                    alert("Autenticación exitosa");
                    self.$emit('log-in', self.user_in.username)
                })
                .catch((error) => {
                    if (error.response.status == "404")
                        alert("ERROR 404: Usuario no encontrado.");
                    if (error.response.status == "403")
                        alert("ERROR 403: Contraseña incorrecta.");  
                });
        }
    }
}
</script>


<style>
    .auth_user{
        margin: 0;
        padding: 0%;
        height: 100%;
        width: 100%;
    
        display: flex;
        justify-content: center;
        align-items: center;
    }
    /* Recuadro */
    .container_auth_user {
        /* Color contorno */
        border: 3px solid  #ffffff;

        /* Redondes esquinas */
        border-radius: 12px;
        
        /* Ancho */
        width: 35%;

        /* Alto */
        height: 63.5%;
        
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    /* Palabra "Autenticarse" */
    .auth_user h1{
        color: #ececec;
    }
/* Boxtext de user y password */    
    /* Ancho */
    .auth_user form{
        width: 65%;
    }
    /* Alto */
    .auth_user input{
        height: 40px;
        width: 100%;

        box-sizing: border-box;
        padding: 10px 20px;
        /* Separación entre Boxtexts */
        margin: 5px 0;
        /* Color borde */
        border: 1px solid #700505        
    }
    /* Botón */
    .auth_user button{
        /* Ancho y alto */
        width: 100%;
        height: 50px;
        /* Color letra */
        color: #E5E7E9;
        /* Color relleno */
        background: #9e0d0d;
        /* Color borde */
        border: 1px solid #E5E7E9;
        /* Redondes */
        border-radius: 5.8px;
        /* Posición texto del botón */
        padding: 10px 25px;
        margin: 5px 0;
    }

    .auth_user button:hover{
        color: #E5E7E9;
        /* Color cuando el puntero esta sobre el botón */
        background: #da1515;
        border: 1px solid #283747;
    }
</style>
<template>
    <div id="UserTransaction">
        <div class="continer_user_transaction">
            <h1> Transacción de {{username}}</h1>
            <form v-on:submit.prevent="processTransaction" >
                <input type="tetx" v-model="value" placeholder="Inserte aquí el valor de la transacción">
                <br>
                <button type="submit">Realizar transacción</button>
            </form>
        </div>
    </div>
</template>


<script>
import axios from 'axios';
export default {
    name: "UserTransaction",
    data: function(){
        return{
            username: "none",
            value: ""
        }
    },

    methods:{
        processTransaction: function(){
            var self = this
            let transaction_in = {
                username: this.username,
                value: this.value
            }
            axios.put("https://stocpoolt-cajero-backend.herokuapp.com/user/transaction/", transaction_in,  {headers: {}})
                .then((result) => {
                    alert("Transaction Correcta, Saldo Restante: " + result.data.actual_balance);
                    
                })
                .catch((error) => {
                      alert("ERROR Transaction Incorrecta: Saldo Insuficiente");
                });
        }
    },

    created: function(){
        this.username = this.$route.params.username
    }

}
</script>


<style>
    #UserTransaction{
        margin: 0;
        padding: 0%;
        height: 100%;
        width: 100%;
        margin: 0px auto;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    /* Marco */
    .continer_user_transaction {
        /* Redondes y color */
        border: 3px solid  #ffffff;
        border-radius: 10px;
        /* Ancho y alto */
        width: 35%;
        height: 52%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
    }
    /* Frase "Transacción --- */
    #UserTransaction h1{
        color: #e0d7d7;
        margin: 32px auto;
    }

    #UserTransaction form{
        width: 60%;
    }

    #UserTransaction input{
        height: 40px;
        width: 100%;
        box-sizing: border-box;
        padding: 10px 30px;
        margin: 10px 0;
        border: 1px solid #283747;
    }
    /* Botón */
    #UserTransaction button{
        width: 100%;
        height: 50px;
        /* Color relleno */
        color: #E5E7E9;
        background: #9e0d0d;
        border: 1px solid #E5E7E9;
        border-radius: 5px;
        padding: 10px 25px;
        margin: 10px 0;
    }

    #UserTransaction button:hover{
        color: #E5E7E9;
        background: #460505;
        border: 1px solid #283747;
    }
</style>
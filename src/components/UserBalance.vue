<template>
    <div id="UserBalance" class="user_balance">
        <div class="continer_user_transaction">
            <div class="fondoUser">
                <h1><br>
                    {{username}}, NU Bank informs you: <br>
                    Your available balance is: <span>  ${{balance}} COP </span>
                </h1>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'UserBalance',
    data: function (){
        return {
            username: "none",
            balance: 0
        }
    },

    created: function(){
        this.username = this.$route.params.username
        let self = this
 
        axios.get("http://localhost:8000/user/balance/" + this.username).then((result) => {
            self.balance = result.data.balance
        })
    }
}
</script>


<style>
    #UserBalance{
        width: 100%;
        height: 100%;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;    
        align-items: center;
    }
    #UserBalance h1{
        font-size: 50px;
        color: #e9ffeb;
        margin: 0px auto;
    }
    #UserBalance span{
        color: #8bb7eb;
        font-weight: bold;
    }
    .continer_user_transaction {
        /* Redondes y color */
        border: 3px solid  #ffffff;
        border-radius: 10px;
        /* Ancho y alto */
        width: 80%;
        height: 38%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .fondoUser{
        background-image: linear-gradient(rgba(99, 10, 10, 0.65), rgba(15, 23, 47, 0.65)), url('../assets/principal.jpg');
        width: 100%;
        height: 100vh;
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
    }
</style>
<template>
    <div id="UserBalance" class="user_balance">
        <div class="continer_user_transaction">
        <h2>
            {{username}}, NU Bank te informa: <br>
            Tu saldo disponible es: <span>  ${{balance}} COP </span>
        </h2>
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
 
        axios.get("http://127.0.0.1:8000/user/balance/" + this.username).then((result) => {
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

    #UserBalance h2{
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
        width: 70%;
        height: 62%;
        
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>
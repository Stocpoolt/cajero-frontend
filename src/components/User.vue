<template>
    <div id="User">
        <img class="logo" src="../assets/logo.png">
        <h2>
            Hello  <span> {{username}}, </span>  Welcome to the<br>
            National University Bank!<br>
            Your favorite place in this world
        </h2>
    </div>
</template>


<script>
    export default {
        name: "User",
        data:function(){
            return {
                username: "none"
            }
        },
        created: function(){
            this.username = this.$route.params.username
        }
    }
</script>


<style>
    #User{
        width: 100%;
        height: 100%;
        font-family: Arimo;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    /* Color letra oración "Hello, Welcome ..." */
    #User h2{
        font-family: Arimo;
        font-size: 50px;
        color: #ffffff;
        margin: 50px;
    }
    /* Color letra nombre usuario */
    #User span{
        color: #36b4ee;
        font-weight: bold;
        font-family: 'Raleway';
    }

    .badye {
        font-family: 'Lora';
        background: linear-gradient(rgba(47, 23, 15, 0.65), rgba(47, 23, 15, 0.65));
        background-attachment: fixed;
        background-position: center;
        background-size: cover;
    }
</style>
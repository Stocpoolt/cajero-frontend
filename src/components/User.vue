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

        display: flex;
        justify-content: center;    
        align-items: center;
    }
    /* Color letra oración "Hello, Welcome ..." */
    #User h2{
        font-size: 50px;
        color: #052908;
    }
    /* Color letra nombre usuario */
    #User span{
        color: #345d8b;
        font-weight: bold;
    }
</style>
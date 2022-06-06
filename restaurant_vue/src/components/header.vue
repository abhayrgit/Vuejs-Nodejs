<template>
    <div class='nav'>
      <router-link to="/">Home</router-link>
    <router-link v-on:click="logout" to="#" v-if="setlogin">Logout</router-link>
      <router-link to="/login" v-else>Login</router-link>
      <router-link to="/add">Add Restaurant</router-link>
      <!-- <router-link to="/add">Add Restaurant</router-link> -->

  </div>
</template>

<script>
export default {
    name:'headerComponent',
    data(){
        return{
            setlogin:false
        }
    },
    methods:{
        logout()
        {
            localStorage.clear();
            this.$router.push({ name:"loginComponent" })
        }
    },
    mounted() {
        let user = localStorage.getItem("user-info");
        if (user) {
            this.setlogin=true
        }
  }
}
</script>

<style scoped>
.nav{
    background-color: #333;
    overflow: hidden;
    position: fixed;
     top: 0; 
  width: 100%;
}
.nav a{
    float: left;
    color: white;
    text-align: center;
    padding: 16px 16px;
    text-decoration: none;
    font-size: 14px;
    margin-right:4px ;
}
.nav a:hover{
    background-color: #ddd;
    color: #222;
}
</style>
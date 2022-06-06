<template>
  <headerComponent />
  <h1>Login</h1>
    <div>
    <input type="text" v-model="email" placeholder="Enter Email" />
    <input type="password" v-model="password" placeholder="Enter Password" />
    <button type="button" v-on:click="login">Login</button>
    <p>
      <router-link to="signup">SIgn Up</router-link>
    </p>
  </div>
</template>

<script>
import headerComponent from './header.vue'
import axios from 'axios'

export default {
    name:'loginComponent',
    components:{
      headerComponent
    },
    data(){
      return{
          email:'',
          password:''
      }
    },
    methods:{
      async login(){
        await axios.post('http://localhost:3030/api/user/login',{
                email:this.email,
                password:this.password
        }).then(res=>{
          if(res.data){
            console.log(res.data);
            localStorage.setItem("user-info",res.data.email)
            this.$router.push({ name: "homeComponent" });
          }
        }).catch(error=>{
          console.log(error);
        })
      }
    },
    mounted() {
    let user = localStorage.getItem("user-info");
    if (user) {
      this.$router.push({ name: "homeComponent" });
    }
  }
}
</script>

<style scoped>

</style>
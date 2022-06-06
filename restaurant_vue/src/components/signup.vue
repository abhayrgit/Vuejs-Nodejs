<template>
  <headerComponent />
  <h1>Sign Up</h1>
  <form action="">
  <div>
    <input type="text" v-model="name" placeholder="Enter Name" />
    <input type="text" v-model="email" placeholder="Enter Email" />
    <input type="password" v-model="password" placeholder="Enter Password" />
    <button type="button" v-on:click="signup()">Sign Up</button>
    <p>
      <router-link to="login">Login</router-link>
    </p>
  </div>
  </form>
</template>

<script>
import axios from 'axios'
import headerComponent from './header.vue'

export default {
    name:'sigupComponent',
    components:{headerComponent},
    data(){
        return{
            name:'',
            email:'',
            password:''
        }
    },
    methods:{
        async signup(){
            const result = await axios.post('http://localhost:3030/api/user/signup',{
                name:this.name,
                email:this.email,
                password:this.password
            });
            console.log("result",result);
            if (result.status == 200) {
                  localStorage.setItem("user-info", JSON.stringify(result.data));
                  this.$router.push({ name: "homeComponent" });
      }
        }
    },
    mounted(){
      let user = localStorage.getItem("user-info")
      if(user){
        this.$router.push({name:"homeComponent"})
      }
    }

}
</script>

<style scoped>

</style>
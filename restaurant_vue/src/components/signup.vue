<template>
<img class="logo" :src="reso_logo" alt="">
  <h2>Sign Up</h2>
  <form action="">
  <div>
    <input type="text" v-model="name" placeholder="Enter Name" />
    <input type="text" v-model="email" placeholder="Enter Email" />
    <input type="password" v-model="password" placeholder="Enter Password" />
    <button type="button" v-on:click="signup()">Sign Up</button>
    <p>
      <router-link to="login">Already have an account? Login</router-link>
    </p>
  </div>
  </form>
</template>

<script>
import axios from 'axios'
import logo from '../assets/resto_logo.jpg'


export default {
    name:'sigupComponent',
    data(){
        return{
            name:'',
            email:'',
            password:'',
            reso_logo:logo
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
h2{
  font-size: 40px;
  color: rgb(34, 31, 31);
  font-style: italic;
}
</style>
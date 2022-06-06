<template>
  <headerComponent />
  <h1>Add Restaurant</h1>
  <div>
    <form action="">
        <input type="text" v-model="restaurant.name" placeholder="Enter Name" />
        <input type="text" v-model="restaurant.address" placeholder="Enter Address" />
        <input type="text" v-model="restaurant.contact" placeholder="Enter Contact" />
        <button type="button" v-on:click="add()">Add Restaurant</button>
    </form>
    <!-- <p>
      <router-link to="login">Login</router-link>
    </p> -->
  </div>
</template>

<script>
import axios from 'axios'
import headerComponent from './header.vue'
export default {
    name:'addComponent',
    components:{headerComponent},
    data(){
        return{
            restaurant: {
                    name: "",
                    address: "",
                    contact: "",
      },
        }
    },
    methods:{
        async add(){
        let result = await axios.post("http://localhost:3030/api/restaurant/addRestaurant/", {
        name: this.restaurant.name,
        address: this.restaurant.address,
        contact: this.restaurant.contact,
      });
      console.log(result);
      if(result.status==200){
          this.$router.push({name:"homeComponent"})
      }
    }

}}
</script>

<style>
h1{
  padding-top:50px
}
</style>
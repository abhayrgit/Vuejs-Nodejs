<template>
  <headerComponent />
    <img class="logo" :src="reso_logo" alt="" />
  <h2>Update Restaurant</h2>
  <div>
    <form action="">
        <input type="text" v-model="restaurant.name" placeholder="Enter Name" />
        <input type="text" v-model="restaurant.address" placeholder="Enter Address" />
        <input type="text" v-model="restaurant.contact" placeholder="Enter Contact" />
        <button type="button" v-on:click="update()">Update Restaurant</button>
    </form>
  </div>
</template>

<script>
import headerComponent from './header.vue'
import axios from 'axios'
import logo from "../assets/resto_logo.jpg";

export default {
    name:'updateComponent',
    components:{
      headerComponent
    },
    data(){
      return{
        restaurant:{
          name:'',
          address:'',
          contact:''
        },
        reso_logo: logo,
      }
    },
    methods:{
      async update(){
        let result = await axios.put(`http://localhost:3030/api/restaurant/updateRestaurant/${this.$route.params.id}`,{
              name: this.restaurant.name,
              address: this.restaurant.address,
              contact: this.restaurant.contact,
        });
        if (result.status == 200) {
        this.$router.push({ name: "homeComponent" });
      }
      }
    },
    async mounted(){
      const oldresult = await axios.get(`http://localhost:3030/api/restaurant/getRestaurant/${this.$route.params.id}`)
      console.log(oldresult);
      this.restaurant = oldresult.data
    }
}
</script>

<style scoped>
h2{
  font-size: 40px;
  color: rgb(34, 31, 31);
  font-style: italic;
};
</style>
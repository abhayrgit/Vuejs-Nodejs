<template>
<headerComponent />
    <h1>Restaurants</h1>
    <table>
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Address</th>
            <th>Contact No</th>
            <th>Modify</th>
        </tr>
        <tr v-for="restaurant in restaurants" :key="restaurant._id">
            <td>{{restaurant._id}}</td>
            <td>{{restaurant.name}}</td>
            <td>{{restaurant.address}}</td>
            <td>{{restaurant.contact}}</td>
            <td><router-link :to="'/update/'+restaurant._id">Update</router-link>&nbsp;&nbsp;
            <button class=newButton @click="deleteRestaurant(restaurant._id)">Delete</button>
            </td>
        </tr>
    </table>
</template>

<script>
import axios from 'axios'
import headerComponent from './header.vue'

export default {
    name:'homeComponent',
    components:{
        headerComponent
    },
    data(){
        return{
            name:'',
            address:'',
            phone:'',
            restaurants:[]
        }
    },
    methods:{
        async loadData(){
            let user = localStorage.getItem("user-info");
            if (!user) {
                this.$router.push({ name: "signupComponent" });
            }
            const result = await axios.get('http://localhost:3030/api/restaurant/getAllrestaurnat/')
            this.restaurants=result.data
        },
        async deleteRestaurant(id){
            let result = await axios.delete("http://localhost:3030/api/restaurant/deleteRestaurant/"+id);
            if(result.status==200){
                this.loadData()
            }
        }
    },
    mounted(){
        this.loadData()
    }

}
</script>

<style scoped>
table, td, th {  
  border: 1px solid #ddd;
  text-align: left;
}
th{
    background-color: rgb(192, 181, 181);
}

table {
  border-collapse: collapse;
  width: 100%;
}

th, td {
  padding: 15px;
}
.newButton{
  color: black;
  width: 55px;
  background-color: white;
  height: 24px;
  transition-duration: 0.4s;
  border-radius: 5px;
}
.newButton:hover{
  background-color: black; /* Green */
  color: white;
}
</style>
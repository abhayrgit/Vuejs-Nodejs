<template>
  <img class="logo" :src="reso_logo" alt="" />

  <div class="login">
      <h2>Login</h2>
    <input type="text" v-model="email" placeholder="Enter Email" />
    <input type="password" v-model="password" placeholder="Enter Password" />
    <button type="button" v-on:click="login">Login</button>
    <p>
      <router-link to="signup">Doesn't have any account? Sign Up</router-link>
    </p>
  </div>
</template>

<script>
import logo from "../assets/resto_logo.jpg";
import axios from "axios";

export default {
  name: "loginComponent",
  data() {
    return {
      email: "",
      password: "",
      reso_logo: logo,
    };
  },
  methods: {
    async login() {
      await axios
        .post("http://localhost:3030/api/user/login", {
          email: this.email,
          password: this.password,
        })
        .then((res) => {
          if (res.data) {
            console.log(res.data);
            localStorage.setItem("user-info", res.data.email);
            this.$router.push({ name: "homeComponent" });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (user) {
      this.$router.push({ name: "homeComponent" });
    }
  },
};
</script>

<style scoped>
h2{
  font-size: 40px;
  color: rgb(34, 31, 31);
  font-style: italic;
}
</style>
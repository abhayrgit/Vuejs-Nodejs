<template>
<router-view /> 
</template>

<script>


export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
  padding:0;
  margin: 0;
}
.logo {
  padding-top: 50px;
  width: 100px;
}
input {
  width: 300px;
  height: 40px;
  padding-left: 10px;
  display: block;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid skyblue;
}
button {
  width: 320px;
  height: 40px;
  border: 1px solid skyblue;
  color: white;
  background-color: skyblue;
  cursor: pointer;
}
</style>

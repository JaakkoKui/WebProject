<template>
  <router-link to="/"></router-link>
  <router-view/>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

export default {}
</script>

<style>
html {
  background-color: lightgray;
}

div.content {
  float: right;
  height: 200px;
  width: auto;
  min-width: 85%;
}

.input-group {
  justify-content: flex-end;
  padding: 20px 20px 20px 20px;
}



button.like {
  width: 30px;
  height: 30px;
  margin: 0 auto;
  border-radius: 50%;
  color: rgba(0, 150, 136, 1);
  background-color: rgba(38, 166, 154, 0.3);
  border-color: rgba(0, 150, 136, 1);
  border-width: 1px;
  font-size: 15px;
}

button.dislike {
  width: 30px;
  height: 30px;
  margin: 0 auto;
  border-radius: 50%;
  color: rgba(255, 82, 82, 1);
  background-color: rgba(255, 138, 128, 0.3);
  border-color: rgba(255, 82, 82, 1);
  border-width: 1px;
  font-size: 15px;
}

.floatRight {
  float: right;
}

</style>

<template>
  <div>
    <nav class="navbar navbar-light" id="ylapalkki" style="background-color: aqua; border: solid 1px black; ">
      <a class="navbar-brand navBarText" href="/">Megaforum</a>
      <div class="login-container">
        <form action="/action_page.php">
          <input class="navBarBox" type="text" placeholder="Username" name="username">
          <input class="navBarBox" type="password" placeholder="Password" name="psw">
          <button class="button" type="submit">Login</button>
        </form>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "navBar"
}

</script>

<style scoped>
.navBarBox {
  margin: 5px 5px 5px 5px;
  border-radius: 2px;
  width:40%;
}

#ylapalkki {
  width: 100%;
  border: solid 1px black;
  border-radius: 2px;
  background: rgb(1, 67, 99);
  background: linear-gradient(90deg, rgba(1, 67, 99, 1) 6%, rgba(89, 175, 255, 1) 81%);
}

.navBarText {
  font-family: "Rockwell", Serif, Agency FB;
  font-weight: bold;
  margin-left: 30px;
  font-size: 25px;
  font-style: italic;
  text-shadow: 1px 1px 6px grey, 1px 1px 6px cyan;
}

.button {
  transition-duration: 0.4s;
  background-color: lightblue;
  border: 2px solid lightskyblue;
  border-radius: 10px;
  margin-right: 5px;
}

.button:hover {
  background-color: dodgerblue;
  color: white;
}

</style>
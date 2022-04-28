<template>
<div>
  <nav class="navbar navbar-light" id="ylapalkki" style="background-color: aqua; border: solid 1px black; ">
    <a class="navbar-brand" href="#">Megaforum</a>
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

</style>
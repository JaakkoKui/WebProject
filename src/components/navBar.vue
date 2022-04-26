<template>
<div>
  <nav class="navbar navbar-light" style="background-color: aqua ">
    <a class="navbar-brand" href="#">Megaforum</a>
    <div class="login-container">
      <form action="/action_page.php">
        <input class="navBarBox" type="text" placeholder="Username" name="username">
        <input class="navBarBox" type="password" placeholder="Password" name="psw">
        <button class="navBarBox" type="submit">Login</button>
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
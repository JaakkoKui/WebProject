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
.navBarBox{
    margin: 5px 5px 5px 5px;
    border-radius: 2px;

}

#ylapalkki{
    width: auto;
    border: solid 1px black;
    border-radius:2px;
    background: rgb(1,67,99);
    background: linear-gradient(90deg, rgba(1,67,99,1) 6%, rgba(89,175,255,1) 81%);
}

</style>
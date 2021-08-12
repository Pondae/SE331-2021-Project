<template>
  <!-- Image and text -->
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We"
    crossorigin="anonymous"
  />

  <FlashMessage
    position="right bottom"
    time="1150"
    group="ko"
    style="text-align: center"
  />

  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
#nprogress .bar {
  background: #42b983 !important;
}

#nprogress .peg {
  box-shadow: 0 0 10px #1b65a6, 0 0 5px #1b65a6;
}
.text {
  text-align: center;
  padding: 15px 100px 5px 100px;
}
._vue-flash-msg-body__title {
  color: #f2f2f2;
  font-weight: bold;
}
</style>

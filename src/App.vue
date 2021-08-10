<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>|
    <router-link to="/list">see all patients</router-link>
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
  background: #FFBB00 !important;
}

#nprogress .peg {
  box-shadow: 0 0 10px #FFBB00, 0 0 5px #FFBB00;
}

#nprogress .spinner-icon {
  border-top-color: #FFBB00;
  border-left-color: #FFBB00;
  
}
</style>

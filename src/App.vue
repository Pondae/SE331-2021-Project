<template>
<link rel="stylesheet" href="css/style.css">
<link rel="stylesheet" href="css/menu.css">
<FlashMessage position="right bottom" time="1150" group="ko" style="text-align:center"/>
  <div class="menu-wrap">
    <input type="checkbox" class="toggler">
    <div class="hamburger"><div></div></div>
    <div class="menu">
      <div>
        <div>
          <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/about">About</router-link></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <router-view />
  <div class="footer">
    <footerLayout />
  </div>
</template>
<script>
import footerLayout from '@/views/footer.vue'
export default {
  components:{
    footerLayout
  }
}
</script>
<style>
.footer{
  clear: both;
  position: relative;
  margin-top: 10%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
._vue-flash-msg-body_info {
  z-index: 1;
  position: relative;
}

/*menu bar */
.menu-wrap {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
}

.menu-wrap .toggler {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  cursor: pointer;
  width: 50px;
  height: 50px;
  opacity: 0;
}

.menu-wrap .hamburger {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 60px;
  height: 60px;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Hamburger Line */
.menu-wrap .hamburger > div {
  position: relative;
  flex: none;
  width: 100%;
  height: 2px;
  background: black;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s ease;
}

/* Hamburger Lines - Top & Bottom */
.menu-wrap .hamburger > div::before,
.menu-wrap .hamburger > div::after {
  content: '';
  position: absolute;
  z-index: 1;
  top: -10px;
  width: 100%;
  height: 2px;
  background: inherit;
}




/* Moves Line Down */
.menu-wrap .hamburger > div::after {
  top: 10px;
}

/* Toggler Animation */
.menu-wrap .toggler:checked + .hamburger > div {
  transform: rotate(135deg);
}

/* Turns Lines Into X */
.menu-wrap .toggler:checked + .hamburger > div:before,
.menu-wrap .toggler:checked + .hamburger > div:after {
  top: 0;
  transform: rotate(90deg);
}

/* Rotate On Hover When Checked */
.menu-wrap .toggler:checked:hover + .hamburger > div {
  transform: rotate(225deg);
}

/* Show Menu */
.menu-wrap .toggler:checked ~ .menu {
  visibility: visible;
}

.menu-wrap .toggler:checked ~ .menu > div {
  transform: scale(1);
  transition-duration: var(--menu-speed);
}

.menu-wrap .toggler:checked ~ .menu > div > div {
  opacity: 1;
  transition:  opacity 0.4s ease 0.4s;
}




.menu-wrap .menu {
  position: fixed;
  top: 50px;
  left: 0;
  transition: color 0.4s ease;
  visibility: hidden;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}


.menu-wrap .menu > div > div {
  text-align: center;
  max-width: 90vw;
  max-height: 100vh;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.menu-wrap .menu > div > div > ul > li {
  list-style: none;
  color: #F2F2F2;
  background-color: rgba(48, 97, 140, .95);
  border: 1px solid black;
  margin: 5px;
  border-radius: 5px;
  font-size: 1.5rem;
  padding: 8px 20px ;
}

.menu-wrap .menu > div > div > ul > li > a {
  color: inherit;
  text-decoration: none;
  transition: color 0.4s ease;
}



</style>

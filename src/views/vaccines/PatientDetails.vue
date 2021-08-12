<template>
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We"
    crossorigin="anonymous"
  />
  <p></p>
  <!-- <div class="container"> -->

  <div class="main-body">
    <section id="hero" class="d-flex align-items-center">
      <div class="container">
        <h1>Welcome to Konghospital</h1>
        <h2>
          We are willing to take care of you and advise you on the covid-19
          outbreak and your symptoms.
        </h2>
        <a  class="btn-get-started scrollto">
          <router-link class="link" :to="{ name: 'Doctorcomment' }">
            Watch comment
          </router-link>
        </a>
      </div>
    </section>
    <div class="row gutters-sm">
      <div class="col-md-3 mb-2">
        <div class="card">
          <div class="card-body">
            <div class="d-flex flex-column align-items-center text-center">
              <img
                v-if="assignuser"
                :src="assignuser"
                alt="Admin"
                class="rounded-circle"
                width="150"
              />
              <img
                v-if="assignlisa"
                :src="assignlisa"
                alt="Admin"
                class="rounded-circle"
                width="200"
                height="190"
              />
              <img
                v-if="assignjisoo"
                :src="assignjisoo"
                alt="Admin"
                class="rounded-circle"
                width="220"
                height="200"
              />
              <div class="mt-3">
                <h4>{{ patient.name }} {{ patient.surname }}</h4>
              </div>
            </div>
          </div>
          <ul id="side">
            <li id="hide">
              <span style="font-size: x-large">✆</span>: (+66)123456
            </li>
            <li id="hide">
              <span>✉: </span
              ><a href="" id="li1"
                ><u>{{ patient.name }}@gmail.com </u></a
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="col-md-9">
        <div class="card mb-3">
          <div class="card-body">
            <div class="row">
              <div class="col-sm-3">
                <h6 class="mb-0">Fullname</h6>
              </div>
              <div class="col-sm-9 text-secondary">
                {{ patient.name }} {{ patient.surname }}
              </div>
            </div>
            <hr />
            <div class="row">
              <div class="col-sm-3">
                <h6 class="mb-0">Email</h6>
              </div>
              <div class="col-sm-9 text-secondary">
                {{ patient.name }}@gmail.com
              </div>
            </div>
            <hr />
            <div class="row">
              <div class="col-sm-3">
                <h6 class="mb-0">Telephone</h6>
              </div>
              <div class="col-sm-9 text-secondary">(+66)5432541</div>
            </div>
            <hr />
            <div class="row">
              <div class="col-sm-3">
                <h6 class="mb-0">Age</h6>
              </div>
              <div class="col-sm-9 text-secondary">{{ patient.age }}</div>
            </div>
            <hr />
            <div class="row">
              <div class="col-sm-3">
                <h6 class="mb-0">Hometown</h6>
              </div>
              <div class="col-sm-9 text-secondary">
                {{ patient.home_town }}
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="row gutters-sm">
      <div class="col-md-5 mb-4">
        <div class="card mt-3">
          <ul class="list-group list-group-flush">
            <li
              class="
                list-group-item
                d-flex
                justify-content-between
                align-items-center
                flex-wrap
              "
            >
              <h6 class="mb-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-globe mr-2 icon-inline"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path
                    d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
                  ></path></svg
                >Website
              </h6>
              <span class="text-secondary">https://bootdey.com</span>
            </li>
            <li
              class="
                list-group-item
                d-flex
                justify-content-between
                align-items-center
                flex-wrap
              "
            >
              <h6 class="mb-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-github mr-2 icon-inline"
                >
                  <path
                    d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                  ></path></svg
                >Github
              </h6>
              <span class="text-secondary">bootdey</span>
            </li>
            <li
              class="
                list-group-item
                d-flex
                justify-content-between
                align-items-center
                flex-wrap
              "
            >
              <h6 class="mb-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-twitter mr-2 icon-inline text-info"
                >
                  <path
                    d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
                  ></path></svg
                >Twitter
              </h6>
              <span class="text-secondary">@bootdey</span>
            </li>
            <li
              class="
                list-group-item
                d-flex
                justify-content-between
                align-items-center
                flex-wrap
              "
            >
              <h6 class="mb-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-instagram mr-2 icon-inline text-danger"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path
                    d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
                  ></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg
                >Instagram
              </h6>
              <span class="text-secondary">bootdey</span>
            </li>
            <li
              class="
                list-group-item
                d-flex
                justify-content-between
                align-items-center
                flex-wrap
              "
            >
              <h6 class="mb-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-facebook mr-2 icon-inline text-primary"
                >
                  <path
                    d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                  ></path></svg
                >Facebook
              </h6>
              <span class="text-secondary">bootdey</span>
            </li>
          </ul>
        </div>
      </div>
       <div class="col-md-7 mb-6"></div>
    </div> -->
  </div>
  <!-- </div> -->
</template>
<script>
export default {
  props: ["patient"],
  inject: ["Global_Store"],
  data() {
    return {
      check: 0,
      image: "",
      jisoo:
        "https://www.allkpop.com/upload/2021/07/content/072126/1625707575-20210707-jisoo.jpg",
      lisa: "https://malaysia-grlk5lagedl.stackpathdns.com/production/malaysia/images/1603076433196362-MAC-New-Global-Ambassador-Lisa-from-BLACKPINK-KV.jpg?w=1920&h=800&fit=fillmax&crop=faces&auto=%5B%22format%22%2C%20%22compress%22%5D&cs=srgb",
      image1: "https://bootdey.com/img/Content/avatar/avatar3.png",
      image2: "https://bootdey.com/img/Content/avatar/avatar7.png",
      image3: "https://bootdey.com/img/Content/avatar/avatar1.png",
      image4: "https://bootdey.com/img/Content/avatar/avatar5.png",
      image5: "https://bootdey.com/img/Content/avatar/avatar4.png",
    };
  },
  computed: {
    imgUrl: function () {
      // let val = Math.floor(Math.random() * 4);
      // if (val == 0) {
      //   return this.image1;
      // } else if (val == 1) {
      //   return this.image2;
      // } else if (val == 2) {
      //   return this.image3;
      // } else if (val == 3) {
      //   return this.image4;
      // } else if (val == 4) {
      //   return this.image5;
      // }
      return this.image;
    },
    assignlisa: function () {
      if (this.patient.name === "Lalisa") {
        return this.lisa;
      }
      return this.image;
    },
    assignjisoo: function () {
      if (this.patient.name === "Kim") {
        return this.jisoo;
      }
      return this.image;
    },
    assignuser: function () {
      if (this.patient.name === "Kim" || this.patient.name === "Lalisa") {
        return false;
      } else {
        let val = Math.floor(Math.random() * 4);
        if (val == 0) {
          return this.image1;
        } else if (val == 1) {
          return this.image2;
        } else if (val == 2) {
          return this.image3;
        } else if (val == 3) {
          return this.image4;
        } else if (val == 4) {
          return this.image5;
        }
      }
      return false;
    },
  },
};
</script>
<style scoped>
.link {

  text-decoration: none;
}
#hero {
  width: 100%;
  height: 90vh;
  background: url("http://127.0.0.1:5500/assets/img/hero-bg.jpg") top center;
  background-size: cover;
  position: relative;
  margin-bottom: -200px;
}

#hero .container {
  position: relative;
}

#hero h1 {
  margin: 0;
  -webkit-text-stroke: 1px black;
  font-size: 48px;
  font-weight: 700;
  line-height: 56px;
  text-transform: uppercase;
  color: #F2F2F2;
}

#hero h2 {
  color: #30618C;
  margin: 10px 0 0 0;
  font-size: 24px;
}

#hero .btn-get-started {
  text-decoration: none;
  font-family: "Raleway", sans-serif;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 1px;
  display: inline-block;
  padding: 12px 35px;
  margin-top: 30px;
  border-radius: 50px;
  transition: 0.5s;
  color: #fff;
  background: #80b5e4;
}

#hero .btn-get-started:hover {
  background: #618cb3;
}

@media (min-width: 1024px) {
  #hero {
    background-attachment: fixed;
  }
}

@media (max-width: 992px) {
  #hero {
    margin-bottom: 0;
    height: 100vh;
  }
  #hero .container {
    padding-bottom: 63px;
  }
  #hero h1 {
    font-size: 28px;
    line-height: 36px;
  }
  #hero h2 {
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 30px;
  }
}

@media (max-height: 500px) {
  #hero {
    height: auto;
  }
}

#side {
  text-align: left;
  padding: 0 18px;
}

body {
  margin-top: 20px;
  color: #1a202c;
  text-align: left;
  background-color: #e2e8f0;
}
.main-body {
  padding: 15px;
}
.card {
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
}

.card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 0 solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
}

.card-body {
  flex: 1 1 auto;
  min-height: 1px;
  padding: 1rem;
}

.gutters-sm {
  margin-right: -8px;
  margin-left: -8px;
}

.gutters-sm > .col,
.gutters-sm > [class*="col-"] {
  padding-right: 8px;
  padding-left: 8px;
}
.mb-3,
.my-3 {
  margin-bottom: 1rem !important;
}

.bg-gray-300 {
  background-color: #e2e8f0;
}
.h-100 {
  height: 100% !important;
}
.shadow-none {
  box-shadow: none !important;
}
/* ///////////////////////////////////////////////////////////////////// */
#user {
  border: 1px solid black;
  margin-top: 0.5cm;
  width: 50%;
  display: block;
  margin-block-start: 10px;

  /* margin-inline-start: 20%;
  writing-mode: horizontal-tb;
  direction: rtl; */
}
#picture img {
  height: 50%;
  display: block;
  width: 50%;
  cursor: text;
  font-size: 70px;
  /* border-radius: 50%; */
  border: 1px solid black;
  margin-top: 0.5cm;
  text-align: center;
  /* margin-block-end:2cm ; */
}

#topic-acc {
  padding-top: 0.5cm;
  margin-left: auto;
}

#con1 {
  border-top: 1px solid rgb(60, 74, 125);
  border-left: 1px solid rgb(60, 74, 125);
  border-right: 1px solid rgb(60, 74, 125);
}
#con2 {
  background-color: rgb(10, 153, 219);
  background-size: cover;
  border-left: 1px solid rgb(60, 74, 125);
  border-right: 1px solid rgb(60, 74, 125);
  border-bottom: 1px solid rgb(60, 74, 125);
  border-top: 1px solid rgb(60, 74, 125);
}
#rowcontact {
  background-size: cover;
  background-color: white;
}

#li1 {
  text-decoration: none;
  color: gray;
}
#tex {
  padding-left: 65px;
  font-size: x-large;
  margin-bottom: 0.5cm;
}

#ABOUT_VACCINES {
  font-size: x-large;
  text-align: center;
}
#hide {
  list-style: none;
  text-align: left;
}
#divedpage {
  border-right: 3px dotted rgb(156, 170, 220);
}
</style>

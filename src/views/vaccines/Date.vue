<template>
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We"
    crossorigin="anonymous"
  />
  <p></p>
  <!-- {{ patient.vaccine_details[0].vaccinated_date }} -->
  <!-- "vaccine_name": "moderna", 
  "vaccinated_date": "28 august 2021",
  "vaccineated_dose": "2" -->
  <div class="main-body">
    <section id="hero" class="d-flex align-items-center">
      <div class="container">
        <h1>Welcome to Konghospital</h1>
        <h2>
          We are willing to take care of you and advise you on the covid-19
          outbreak and your symptoms.
        </h2>
        <div class="row">
          <div class="col-sm-6">
            <a class="btn-get-started scrollto" id="button1">
              <router-link
                class="link"
                :to="{ name: 'PatientDetails', params: { id } }"
              >
                Details
              </router-link>
            </a>
          </div>
          <div class="col-sm-6">
            <a class="btn-get-started scrollto" id="button2">
              <router-link
                class="link"
                :to="{ name: 'Doctorcomment', params: { id } }"
              >
                Watch comment
              </router-link>
            </a>
          </div>
        </div>
      </div>
    </section>
    <div class="row gutters-sm">
      <div class="col-md">
        <div class="card mb-3">
          <div class="card-body">
            <div class="row" id="rowcontact">
              <div class="col-md-5" id="divedpage">
                <br />
                <div id="tex">CONTACTS</div>
                <ul>
                  <li id="hide">
                    <span style="font-size: x-large">✆</span>: (+66)123456
                  </li>
                  <li id="hide">
                    <span>✉</span
                    ><a href="" id="li1">: <u>konghospital.go.th</u> </a>
                  </li>
                  <li id="hide">
                    <span style="font-size: x-large">⌂</span>:
                    183,Evagadiant,Thailand
                  </li>
                </ul>
                <br />
                <div id="ABOUT_VACCINES">ABOUT VACCINES</div>
                <br />
                <div class="row">
                  <div class="col" id="A">
                    <p>
                      Our website have objective to give you an information of
                      covid-19, including the people who vancinated, a total of
                      vaccine doses.
                    </p>
                  </div>
                </div>
                <br />
              </div>

              <div class="col-sm-7">
                <br />
                <div class="row">
                  <div class="col-sm-5">
                    <div id="tex">VACCINES</div>
                  </div>
                  <div class="col-sm-5">
                    <div id="tex">
                      Total Dose: {{ patient.vaccine_details.length }}
                    </div>
                  </div>
                </div>
                <div>
                  <Vaccinedetail :patient="Global_Store.patient" />
                  <!-- <Vaccinedetail :patient="data" /> -->
                </div>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vaccinedetail from "@/components/Vaccinedetail.vue";
export default {
  props: ["patient"],
  inject: ["Global_Store"],
  components: {
    Vaccinedetail,
  },
  data() {
    return {
      covid: null,
    };
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
  background: url("https://raw.githubusercontent.com/PasakonPJ/picture/master/hero-bg.jpg")
    top center;
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
  color: #f2f2f2;
}

#hero h2 {
  color: #30618c;
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

#topic-vac {
  padding-top: 0.5cm;
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

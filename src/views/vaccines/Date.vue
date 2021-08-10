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
  <div class="container" id="con2">
    <div class="container">
      <div class="row">
        <div class="col">
          <h3 id="topic-vac">
            VACCINES's DETAILS
            <hr style="border-width: 3px" />
          </h3>
        </div>
      </div>
    </div>

    <div class="row" id="rowcontact">
      <div class="col-md-5" id="divedpage">
        <br />
        <div id="tex">CONTACTS</div>
        <ul>
          <li id="hide">
            <span style="font-size: x-large">✆</span><u>:(+66)123456</u>
          </li>
          <li id="hide">
            <span>✉:</span><a href="" id="li1"><u> konghospital.go.th </u></a>
          </li>
          <li id="hide">
            <span style="font-size: x-large">⌂</span
            ><u>:183,Evagadiant,Thailand</u>
          </li>
        </ul>
        <br />
        <div id="tex">VACCINES</div>
        <Vaccinedetail :patient="Global_Store.patient" />
        <br />
      </div>

      <div class="col-7">
        <br />

        <div id="ABOUT_VACCINES">ABOUT VACCINES</div>

        <div class="row">
          <div class="col" id="A">
            <p>
              Our website have objective to give you an information of
              covid-19,<br />
              including the people who vancinated, a total of vaccine doses.
            </p>
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
  inject:["Global_Store"],
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

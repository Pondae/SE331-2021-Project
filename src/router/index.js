import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import list from "@/views/patient_list.vue";
import About from "../views/About.vue";
import PatientLayout from "@/views/vaccines/Layout.vue";
import Dates from "@/views/vaccines/Date.vue";
import PatientDetails from "@/views/vaccines/PatientDetails.vue";
import Doctorcomment from "@/views/vaccines/Doctor.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/list",
    name: "list",
    component: list,
  },
  {
    path: "/patient/:id",
    name: "PatientLayout",
    component: PatientLayout,
    props: true,
    children: [
      {
        path: "",
        name: "PatientDetails",
        component: PatientDetails,
      },
      {
        path: "date",
        name: "Dates",
        component: Dates,
      },
      {
        path: "doctorcomment",
        name: "Doctorcomment",
        component: Doctorcomment,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

import axios from 'axios';
const patient_api = axios.create({
    baseURL: process.env.COVID_PATIENT_API,
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
});

export default{
    get_all_patient(){
        return patient_api.get('/patient');
    },
    get_patient_id(id){
        return patient_api.get('/patient'+id);
    }
}
import axios from 'axios';
const patient_api = axios.create({
    baseURL: 'https://my-json-server.typicode.com/Pondae/SE331-2021-Project',
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
        return patient_api.get('/patient/'+id);
    }
}
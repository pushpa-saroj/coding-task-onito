import axios from "axios";

const BASE_URL= 'http://localhost:8080'
const data = {
    name: 'pushpa',
    age: '12',
    sex: 'F',
    mobile: '62344',
    gov_id_type: 'Adhaar',
    gov_id_no: '2305',
    guardian_type: 'Father',
    guardian_name: 'Papa',
    email: 'pushpa99@gmail.com',
    emergency_contact: '8173',
    address: 'puraopur,jaunpur',
    state: 'uttar pradesh',
    city: 'jaunpur',
    country: 'india',
    pincode: '222202',
    occupation:'berozgar' ,
    religion: 'Hindu',
    marital_status: 'single',
    blood_group: 'o+',
    nationality: 'indan',
  }

export const userRegistrationService = () => {

    axios.post(`${BASE_URL}/api/data`, data )
    .then(response => {
      console.log(response.data);
      // ...do something with the response data
    })
    .catch(error => {
      console.error(error);
      // ...handle the error
    })
}
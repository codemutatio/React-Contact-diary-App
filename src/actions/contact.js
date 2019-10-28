import axios from 'axios';
const dbUrl = 'https://us-central1-c2o6n6t8a2c2t8.cloudfunctions.net/contacts';

export function postContactApi(value) {
    return axios.post(dbUrl, value);
}

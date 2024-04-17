import axios from 'axios';

//URL que nos den, de donde sacaremos la data
const http= axios.create({
    baseURL: 'https://restcountries.com/v3.1/name/'
})

//Ruta del pais de donde se sacara la info
export class countriesApiService {
    getCountry(){
        return http.get('peru');
    }
}

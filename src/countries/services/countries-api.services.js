import axios from 'axios';

const http = axios.create({
    baseURL: 'https://restcountries.com/v3.1/name/',
});

export class countriesApiService{
    getCountry(countryName){
        return http.get(`${countryName}`);
    }
}
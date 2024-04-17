<script>
import { Country } from "../model/country.entity.js";

export default {
  name: "country-card",
  props:{
    country: Country,
  },
}
</script>


<template>
  <pv-card  v-if="country" class="m-2 card-content">
    <template #header>
      <img :src="country.flags.png" class="header-image" :alt="country.flags.alt">
    </template>
    <template #title>
      <h1>{{ country.name.common }}</h1>
    </template>
    <template #subtitle>
      <p><b>Official name:</b> {{ country.name.official }}</p>
    </template>
    <template #content>
      <p><b>Currencies: </b>
        <span v-for="(currency, index) in country.currencies" :key="index">
          {{ currency.name }} ({{ currency.symbol }})
          <span v-if="index !== country.currencies.length - 1"></span>
        </span>
      </p>
      <p><b>Capital: </b>
        <span v-for="(capital, index) in country.capital" :key="index">
          {{ capital }}
          <span v-if="index !== country.capital.length - 1"></span>
        </span>
      </p>
      <p><b>Region: </b> {{ country.region }}</p>
      <p><b>Subregion: </b> {{ country.subregion }}</p>
      <p><b>Languages: </b>
        <span v-for="(language, index) in country.languages" :key="index">
          {{ language }}
          <span v-if="index !== country.languages.length - 1">, </span>
        </span>
      </p>
      <p><b>Area: </b> {{ country.area.toLocaleString() }} km²</p>
      <p><b>Population: </b> {{ country.population.toLocaleString() }} persons</p>
    </template>
    <template #footer>
      <b><p>Coat of Arms:</p></b>
      <img :src="country.coatOfArms.png" class="footer-image" :alt="country.name.common + ' Coat of Arms'">
    </template>
  </pv-card>
</template>



<style scoped>
.header-image{
  width: 50%;
}

.card-content{
  text-align: center;
  padding: 2rem;
  box-shadow: 0px 0px 15px 0px #000000;
  width: 60%

}
.card-content p{
  text-align: justify;
}


.footer-image{
  width: 60%;
}

@media only screen and (max-width: 700px) {
  .card-content{
    width: 80%;
  }
}

</style>


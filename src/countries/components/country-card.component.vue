<script>
export default {
  name: "country-card",
  props:{
    country: null,
  },
}
</script>


<template>
  <pv-card v-if="country" class="card-content" style="width: 40rem; overflow: hidden">
    <template #header>
      <img :alt="country.flags.alt" :src="country.flags.png" class="flag-image">
    </template>
    <template #title><b>Name:</b> {{ country.name.common }}</template>
    <template #subtitle><b>Official name:</b> {{ country.name.official }}</template>
    <template #content>
      <p><b>Currencies:</b> {{ country.currencies }}</p>
      <p><b>Capital:</b> {{ country.capital }}</p>
      <p><b>Region:</b> {{ country.region }}</p>
      <p><b>Subregion:</b> {{ country.subregion }}</p>
      <p><b>Languages:</b> {{ country.languages }}</p>
      <p><b>Area:</b> {{ country.area }}</p>
      <p><b>Population:</b> {{ country.population }}</p>
    </template>
    <template #footer>
      <b><p>Coat of Arms:</p></b><br>
      <img :alt="country.name.common" :src="country.coatOfArms.png" class="coat-image">
    </template>
  </pv-card>
</template>

<script setup>
</script>


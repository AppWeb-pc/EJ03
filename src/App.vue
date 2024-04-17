<script>
import FooterContent from "./public/components/footer-content.component.vue";
import CountryCard from "./countries/components/card-content.component.vue";
import ToolbarContent from "./countries/components/toolbar-content.component.vue";
import { countriesApiService } from "./countries/services/countries-api.services.js";

export default {
  name: "App",
  components: {
    CountryCard,
    FooterContent,
    ToolbarContent
  },
  data() {
    return {
      selectedCountry: null,
      errors: [],
      countryApi: new countriesApiService()
    }
  },
  created() {
    this.getCountries();
  },
  methods: {
    getCountries() {
      this.countryApi.getCountry('peru')
          .then(response => {
            this.selectedCountry = response.data[0];
            console.log(response.data[0]);
          })
          .catch(e => {
            this.errors.push(e);
          });
    }
  }
}
</script>

<template>
  <div class="w-full">
    <div>
      <toolbar-content :country="selectedCountry"></toolbar-content>
    </div>
    <div class="main">
      <country-card :country="selectedCountry"></country-card>
    </div>
    <footer-content></footer-content>
  </div>
</template>

<style scoped>

.main {
  margin-top: 2rem;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>

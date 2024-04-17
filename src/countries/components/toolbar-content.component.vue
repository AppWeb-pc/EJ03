<script>
export default {
  name: 'toolbar-content',
  props:{
    country:null
  }
};

</script>

<template>
  <pv-toolbar v-if="country" class="sticky toolbar">
    <template #start>
    </template>
    <template #center>
      <h1>About {{ country.name.common }}</h1>
    </template>
    <template #end>
    </template>
  </pv-toolbar>
</template>

<style scoped>
.toolbar {
  background-color: #000000;
  color: white;
  padding: 20px;
  text-align: center;
}
</style>

<template>
  <section class="container prismic__data">
    <section class="mt-5">
      <h2>Hier Vind je de prismic Data</h2>
    </section>
    <prismic-data1></prismic-data1>
    <prismic-data2></prismic-data2>
  </section>
</template>

<script>

import PrismicData1 from "@/components/prismic/PrismicData01.vue";
import PrismicData2 from "@/components/prismic/PrismicData02.vue";

export default {
  name: 'PrismicData',
  components: {PrismicData2, PrismicData1},
}
</script>

<style>
.prismic__data{
  margin-top: 45px;
}
</style>
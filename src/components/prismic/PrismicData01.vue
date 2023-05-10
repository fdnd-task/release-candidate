<template>
  <section>
    <h3>PrismicData1</h3>
<!--    <h1>{{ document.data.title }}</h1>-->
<!--    <p>{{ document.data.description }}</p>-->

  </section>
</template>

<script>
import Prismic from 'prismic-javascript';
// import axios from 'axios';

export default {
  name: "PrismicData1",
  methods: {
    async fetchData() {
      try {
        // Connecten van de Prismic API
        const apiEndpoint = 'https://jbinstallatieservice.cdn.prismic.io/api/v2'
        const api = await Prismic.api(apiEndpoint)

        // Fetchen van documenten
        const response = await api.query(Prismic.Predicates.at('document.type', 'homepage'))
        console.log(response)
        // Verwekren van de response
        // const data = response.results.map(result => {
        //   return{
        //
        //   }
        // })


        // this.data = data
      } catch (error) {
        console.error('Error fetching datat from Prismic:', error)
      }
    }
  },
  mounted() {
    this.fetchData();
  }
}
</script>

<style scoped>

</style>
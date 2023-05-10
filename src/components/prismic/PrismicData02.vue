<template>
  <section>
    <h3>PrismicData2</h3>

    <section>
      <h4> {{title}} </h4>
      <p> {{text}}</p>
    </section>
  </section>
</template>

<script>
import Prismic from 'prismic-javascript';

// import axios from 'axios';

export default {
  name: "PrismicData2",
  data() {
    return{
      title: '',
      text: '',
    }
  },
  methods: {
    async fetchData() {
      try {
        // Connecten van de Prismic API
        const apiEndpoint = 'https://jbinstallatieservice.cdn.prismic.io/api/v2'
        const api = await Prismic.api(apiEndpoint)

        // Fetchen van documenten
        const response = await api.query(Prismic.Predicates.at('document.type', 'dienst'))

        if (response.results.length > 0) {
          const result = response.results[0];

          // Update the data
          this.title = result.data.dienst_title[0].text;
          this.text = result.data.dienst_text[0].text;
        }


        console.log(response)
        console.log(response.results)
        console.log(response.results[0])
        // route
        console.log(response.results[0].uid)
        // Volledige data
        console.log(response.results[0].data)
        // Title
        console.log(response.results[0].data.dienst_title)
        console.log(response.results[0].data.dienst_title[0])
        console.log(response.results[0].data.dienst_title[0].text)

        // Text
        console.log(response.results[0].data.dienst_text)
        console.log(response.results[0].data.dienst_text[0])
        console.log(response.results[0].data.dienst_text[0].text)
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
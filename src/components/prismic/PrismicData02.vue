<template>
  <section>
    <h3>PrismicData2</h3>

    <section>
      <div v-for="document in documents" :key="document.id">
        <h4>{{ document.data.dienst_title[0].text }}</h4>
        <p>{{ document.data.dienst_text[0].text }}</p>
<!--        <p>{{ document.data.dienst_text }}</p>-->


        <prismic-rich-text :field="document.data.dienst_text" />
      </div>
    </section>

    <section v-if="isLoading" class="spinner-border" role="status">
      <span class="sr-only">Loading...</span>
    </section>
  </section>
</template>

<script>
import PrismicVue from '@prismicio/vue';
import Prismic from 'prismic-javascript';



export default {
  name: "PrismicData2",
  data() {
    return {
      documents: [],
      isLoading: true,
    };
  },
  created() {
    this.fetchPrismicData();
  },
  methods: {
    async fetchPrismicData() {
      try {
        const apiEndpoint = 'https://jbinstallatieservice.cdn.prismic.io/api/v2';
        const api = await Prismic.api(apiEndpoint);
        const response = await api.query(Prismic.Predicates.at('document.type', 'dienst'));

        console.log('response: ', response)
        console.log('response.results: ',response.results)
        console.log('response.results[0]: ',response.results[0])

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

        this.documents = response.results;
        this.isLoading = false;
      } catch (error) {
        console.error('Error fetching data from Prismic:', error);
      }
    },
  },
  beforeMount() {
    // Use the PrismicVue plugin
    this.$prismic = PrismicVue;
  },
};
</script>

<style scoped>

</style>
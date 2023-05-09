<template>
  <section>
    <h3>PrismicData1</h3>
<!--    <h1>{{ document.data.title }}</h1>-->
<!--    <p>{{ document.data.description }}</p>-->

  </section>
</template>

<script>
import Prismic from 'prismic-javascript'

export default {
  name: "PrismicData1",
  data() {
    return {
      document: null
    }
  },
  async fetch() {
    const apiEndpoint = 'https://jbinstallatieservice.cdn.prismic.io/api/v2'
    const client = Prismic.client(apiEndpoint)

    const document = await client.getSingle('dienst')

    this.document = document

    console.log(document)
  }
}
// console.log(document)

</script>

<style scoped>

</style>
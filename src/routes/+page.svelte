<script>
      import * as prismicH from "@prismicio/helpers";
      
      export let data;
      const textfield = data.documents[0].data.ritch_text_field
      console.log(data.documents[0].data.ritch_text_field)
</script>

<h1>Dit is de home pagina</h1>

<h2>api data</h2>
{@html prismicH.asHTML(textfield)}

<!-- <pre>{JSON.stringify(data, null, 2)}</pre> -->

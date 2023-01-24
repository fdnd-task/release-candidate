import createClient from "$lib/vendors/prismicClient.js";

export async function load({ fetch, request }) {
  
  const client = createClient({ fetch, request })
  const documents = await client.getAllByType('page')

    if (documents) {
        return { 
          documents
        }
    }

    return {
        status: 404,
    }
}
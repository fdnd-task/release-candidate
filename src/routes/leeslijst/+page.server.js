import { gql } from 'graphql-request'
import { hygraph } from '$lib/utils/hygraph.js'

export async function load() {
    let query = gql `
    query readingList {
        readingLists {
            author
            category
            title
            image {
                url
            }
            description
        }
    }
`

return await hygraph.request(query)
}
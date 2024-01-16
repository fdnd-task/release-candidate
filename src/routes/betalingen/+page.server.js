import { gql } from 'graphql-request'
import { hygraph } from '$lib/utils/hygraph.js'

export async function load() {
    let query = gql `
    query betalingen {
    paymentss {
    type
    date
    amount
    paymentMethod
        }
    }
`

return await hygraph.request(query)
}
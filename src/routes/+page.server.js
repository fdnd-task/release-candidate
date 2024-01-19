import { gql } from 'graphql-request';
import { hygraph } from '$lib/utils/hygraph.js';


export async function load() {
  const publicKey = 'dc0e2f073c03758140452044906bc818';
  const searchTerm = 'kikker';

  const query = gql`
    query uitleengeschiedenis {
      uitleengeschiedenis1 {
        author
        image {
          url
        }
        title
      }
    }
  `;

  const hygraphData = await hygraph.request(query);

  const response = await fetch(
    `https://zoeken.oba.nl/api/v1/search/?q=${searchTerm}&refine=true&authorization=${publicKey}&output=json`
  );
  const searchData = await response.json();

  return {
    hygraphData,
    searchData,
  };
}
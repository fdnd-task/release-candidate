export async function load({ params }) {
	const { zoekresultaten } = params;

	const publicKey = 'dc0e2f073c03758140452044906bc818';
	const urlBase = 'https://zoeken.oba.nl/api/v1/';
	const urlQuery = '?q=';
	const urlKey = `&authorization=${publicKey}`;
	const urlSearch = 'search/';
	const urlOutput = '&refine=true&output=json';
	const defaultUrlSearch = urlBase + urlSearch + urlQuery + zoekresultaten + urlKey + urlOutput;

	return (await fetch(defaultUrlSearch)).json();
}

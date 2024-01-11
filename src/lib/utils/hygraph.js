import { PUBLIC_HYGRAPH_KEY, PUBLIC_HYGRAPH_URL } from '$env/static/public';

import { GraphQLClient } from 'graphql-request';

export const hygraph = new GraphQLClient(PUBLIC_HYGRAPH_URL, {
	headers: {
		Authorization: `Bearer ${PUBLIC_HYGRAPH_KEY}`
	}
});

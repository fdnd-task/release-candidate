import { gql } from 'graphql-request';
import { hygraph } from '$lib/utils/hygraph.js';

export async function load() {
	let query = gql`
		query betalingen {
			paymentHistories {
				type
				date
				amount
				paymentMethod
			}
			balances {
				balance
			}
			subscriptionCounters {
				bookCurrent
				bookMax
				ebookCurrent
				ebookMax
				movieCurrent
				movieMax
				activityDiscount
				computerTime
				subscriptionType
			}
		}
	`;

	return await hygraph.request(query);
}

export const prerender = true;

import { gql } from 'graphql-request'
import { hygraph } from '$lib/utils/hygraph.js'

export async function load() {
    let query = gql`
        query Homepages {
            homepages {
                createdAt
                id
                publishedAt
                updatedAt
                heroMain {
                    bgImg {
                        url
                    }
                }
                mainIntroAboutUs {
                    introTextAbout
                    aboutUsLink
                }
                playerCards {
                    title
                    subTitle
                    imgPlayer {
                        url
                    }
                }
                growingNumbers {
                    titleNumbers
                    titleNumbers2
                    titleNumbers3
                    textNumbers
                    numberChilderenSaved
                    titleChilderSaved
                    numberTalents
                    titleTalents
                    numberPartners
                    titlePartners
                    numberClubs
                    titleClubs
                }
                becomeSponsor {
                    titleSponsor
                    subTextSponsor
                }
                ourStory {
                    titleStory
                    titleStory2
                    titleStory3
                    subTextStory
                    storyVideo {
                        url
                    }
                }
            }
        }
        
    `
    return await hygraph.request(query)
}

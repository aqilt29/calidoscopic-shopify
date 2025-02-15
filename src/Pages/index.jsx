import React from 'react'
import { Layout, HomePageImageGallery } from '../Components'
import { graphql } from 'gatsby';

export const query = graphql`
  query ProductListQuery {
    allShopifyProduct {
      edges {
        node {
          createdAt
          handle
          title
          description
          images {
            localFile {
              childImageSharp {
                fluid(maxWidth: 700) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`;


const index = ({ data }) => {

  const { allShopifyProduct: { edges: listOfAllProducts } } = data;
  
  return (
    <Layout>
      <HomePageImageGallery products={listOfAllProducts} />
    </Layout>
  )
}

export default index

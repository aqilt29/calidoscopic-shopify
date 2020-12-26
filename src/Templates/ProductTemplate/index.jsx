import React from 'react';
import { graphql } from 'gatsby';
import { Layout } from 'Components'

export const query = graphql`
  query ProductQuery($shopifyId: String) {
    shopifyProduct (shopifyId: { eq: $shopifyId }) {
      title
      description
    }
  }
`;

const Product = (props) => {
  return (
    <Layout>
      <h1>{props.data.shopifyProduct.title}</h1>
      <pre>
        {JSON.stringify(props, null, 2)}
      </pre>
    </Layout>
  )
}

export default Product;

import React, { createContext } from 'react';
import { graphql, useStaticQuery } from 'gatsby';

// const query = graphql`
//   fragment ProductTileFields on ShopifyProduct {
//     handle
//     priceRange {
//       minVariantPrice {
//         amount
//       }
//     }
//   }
//   {
//     allShopifyProduct {
//       edges {
//         node {
//           ...ShopifyProductFields
//           ...ProductTileFields
//         }
//       }
//     }
//   }
//   `;
  
  // allShopifyCollection(sort: { fields: title, order: ASC }) {
  //   edges {
  //     node {
  //       products {
  //         ...ShopifyProductFields
  //         ...ProductTileFields
  //       }
  //       title
  //       description
  //       shopifyId
  //       image {
  //         localFile {
  //           childImageSharp {
  //             fluid(maxWidth: 1200) {
  //               ...GatsbyImageSharpFluid_withWebp
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // }
const defaultState = {
  products: [],
};

const ProductContext = createContext(defaultState);
export default ProductContext;

export function ProductContextProvider({ children }) {
  // const { allShopifyProduct } = useStaticQuery(query);

  return (
    <ProductContext.Provider
      value={{
        string: 'test',
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

import React from 'react'
import _ from 'lodash'
import { WallImagesContainer } from './styles';
import { HomePageImage } from '../HomePageImage'

const HomePageImageGallery = ({ products }) => {
  const sortedProducts = _.sortBy(products, [({ node }) => node.createdAt]).reverse()
  
  return (
    <WallImagesContainer>
      {
        sortedProducts.map((node, idx) => {
          const { node: { handle, description ,images: [ {localFile} ] }  } = node;

          return (
            <HomePageImage key={idx} index={idx} imageSrc={localFile} description={description} />
          )
        })
      }
    </WallImagesContainer>
  )
}

export { HomePageImageGallery };


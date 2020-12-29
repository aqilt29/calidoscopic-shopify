import React from 'react'
import _ from 'lodash'
import { WallImagesContainer } from './styles';
import { HomePageImage } from '../HomePageImage'

const HomePageImageGallery = ({ products, ...props}) => {

  const sortedProducts = _.sortBy(products, [({ node }) => node.createdAt]).reverse()

  return (
    <WallImagesContainer>
      {
        sortedProducts.map(({ node: { handle, images: [ {localFile} ] } }, idx) => <HomePageImage key={idx} index={idx} imageSrc={localFile} /> )
      }
    </WallImagesContainer>
  )
}

export { HomePageImageGallery };


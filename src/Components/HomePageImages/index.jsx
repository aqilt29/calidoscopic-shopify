import React from 'react'
import { WallImagesContainer } from './styles';
import { pictureList } from '../../Utils/pictureList'


const HomePageImages = () => {

  console.log(pictureList)

  return (
    <WallImagesContainer>
      <p>Images will go here</p>
      {
        pictureList.map((src) => {
          return <p key={src}>{src}</p>
        })
      }
    </WallImagesContainer>
  )
}

export { HomePageImages };

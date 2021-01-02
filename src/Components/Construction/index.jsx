import React from 'react';
import { ContentWrapper,
  OpacityLayer,
  PageOverlay,
  HeaderWrapper,
  HeaderText
} from './styles';

import { Img } from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';





const UnderConstruction = () => {
  return (
    <PageOverlay>
      <OpacityLayer>
        <ContentWrapper>
          <HeaderWrapper>
            <HeaderText>Under Construction</HeaderText>
          </HeaderWrapper>
          <HeaderWrapper>
            <HeaderText>Come Back Soon</HeaderText>
          </HeaderWrapper>
          <HeaderWrapper>
            <HeaderText>Under Construction</HeaderText>
          </HeaderWrapper>
        </ContentWrapper>
      </OpacityLayer>
    </PageOverlay>
  )
}

export { UnderConstruction };

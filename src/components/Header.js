import React from 'react'
import { icons, images } from '../constants'
import { Styled } from './HeaderStyle'

const Header = () => {
  return (
    <Styled.ViewHeaderContainer>
      <Styled.ViewHeaderRow>
        <Styled.ViewHeaderText>
            <Styled.TextHeader>Flymya</Styled.TextHeader>
        </Styled.ViewHeaderText>
        <Styled.ViewHeaderButton>
            <Styled.TouchableOpacityIconContainer>
                <Styled.ImageIcon source={images.britishFlag}/>
            </Styled.TouchableOpacityIconContainer>
            <Styled.TouchableOpacityIconContainer>
                <Styled.ImageIcon source={icons.user}/>
            </Styled.TouchableOpacityIconContainer>
        </Styled.ViewHeaderButton>
      </Styled.ViewHeaderRow>
    </Styled.ViewHeaderContainer>
  )
}

export default Header;
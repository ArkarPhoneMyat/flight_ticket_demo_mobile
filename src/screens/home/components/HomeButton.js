import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {myColor, sizes} from '../../../constants';
import {Styled} from '../components/HomeStyle';

const HomeButton = props => {
  const {icon, title, isNew = false, isActive = false} = props;
  return (
    <Styled.TouchableOpacityHomeButton>
      <Styled.ViewButtonIconContainer
        backColor={isActive ? myColor.softPrimary : myColor.lightGray1}>
        {isNew ? (
          <Styled.ViewNew>
            <Styled.TextNew color={myColor.white} fontSize={sizes.body6}>
              New!
            </Styled.TextNew>
          </Styled.ViewNew>
        ) : null}
        <Styled.ImageIcon
          tintColor={isActive ? myColor.primary : myColor.black}
          source={icon}
        />
      </Styled.ViewButtonIconContainer>

      <Styled.TextIcon
          color={isActive ? myColor.primary : myColor.black}>
        {title}
      </Styled.TextIcon>
    </Styled.TouchableOpacityHomeButton>
  );
};

export default HomeButton;

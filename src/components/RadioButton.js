import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {myColor} from '../constants';
import {Styled} from './RadioButtonStyle';

const RadioButton = ({data, value, setValue}) => {
  return (
    <Styled.ViewRadioButtonContainer>
      {data.length &&
        data.map((v, i) => (
          <Styled.TouchableOpacityRadioButton
            key={i}
            onPress={() => setValue(v.value)}>
            <Styled.ViewRadioButtonCircle
              borderColor={v.value == value ? myColor.primary : myColor.black}>
              <Styled.ViewRadioButtonInnerCircle
                backColor={v.value == value ? myColor.primary : myColor.white}
              />
            </Styled.ViewRadioButtonCircle>
            <Styled.TextRadioButton>{v.label}</Styled.TextRadioButton>
          </Styled.TouchableOpacityRadioButton>
        ))}
    </Styled.ViewRadioButtonContainer>
  );
};

export default RadioButton;

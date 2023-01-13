import styled from 'styled-components/native';
import {myColor, sizes} from '../constants/index';

const ViewRadioButtonContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

const TouchableOpacityRadioButton = styled.TouchableOpacity`
  width: 100px;
  height: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

const ViewRadioButtonCircle = styled.View`
  width: 15px;
  height: 15px;
  border-radius: 10px;
  border-width: 1px;
  align-items: center;
  justify-content: center;
  border-color: ${props => props.borderColor};
`;

const ViewRadioButtonInnerCircle = styled.View`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: ${props => props.backColor};
`;

const TextRadioButton = styled.Text`
  font-size: 12px;
  color: ${myColor.black};
`;

export const Styled = {
  ViewRadioButtonContainer,
  TouchableOpacityRadioButton,
  ViewRadioButtonCircle,
  ViewRadioButtonInnerCircle,
  TextRadioButton,
};

import styled from 'styled-components/native';
import {myColor, sizes} from '../constants/index';

const ViewHeaderContainer = styled.View`
  height: 50px;
  background-color: ${myColor.white};
`;

const ViewHeaderRow = styled.View`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ViewHeaderText = styled.View`
  flex: 1;
  padding-left: 10px;
`;

const TextHeader = styled.Text`
  color: ${myColor.black};
  font-size: ${sizes.h1};
`;

const ViewHeaderButton = styled.View`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

const TouchableOpacityIconContainer = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  border-radius: 20px;
  margin-right: 20px;
`;

const ImageIcon = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 20px;
`;

export const Styled = {
  ViewHeaderContainer,
  ViewHeaderRow,
  ViewHeaderText,
  TextHeader,
  ViewHeaderButton,
  TouchableOpacityIconContainer,
  ImageIcon,
};

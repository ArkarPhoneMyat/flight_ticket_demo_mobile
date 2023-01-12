import { Dimensions } from "react-native";

const {width, height} = Dimensions.get('screen');

export const myColor = {
    primary: '#1296E1',
    softPrimary: '#EEFBFF',
    white: '#ffffff',
    black: '#000000',
    red: '#ff0000',
    grey: '#BBBDC1',
    grey1: '#CFD0D7',
    lightGray1: '#EFEFF1',
    darkGray: '#525C67',
    orange: '#ED6C03',
}

export const sizes = {
  h1: 30,
  h2: 22,
  h2betweenh3: 20,
  h3: 16,
  h4: 14,
  h5: 12,
  h6: 10,
  body1: 30,
  body2: 22,
  body3: 16,
  body4: 14,
  body5: 12,
  body6: 10,

  // app dimensions
  width,
  height,

  //shadow
  shadowStyle: {
    shadowColor: myColor.black,
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5,
  },
}
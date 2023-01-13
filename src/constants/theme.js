import {Dimensions} from 'react-native';

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
};

export const sizes = {
  h1: '30px',
  h2: '22px',
  h2betweenh3: '20px',
  h3: '16px',
  h4: '14px',
  h5: '12px',
  h6: '10px',
  body1: '30px',
  body2: '22px',
  body3: '16px',
  body4: '14px',
  body5: '12px',
  body6: '10px',

  // app dimensions
  width,
  height,

  //shadow
  shadowStyle: {
    shadowColor: myColor.black,
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
  },
};

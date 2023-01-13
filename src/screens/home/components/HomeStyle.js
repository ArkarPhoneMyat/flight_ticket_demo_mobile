import styled from 'styled-components/native';
import {myColor, sizes} from '../../../constants/index'

const SafeAreaView = styled.SafeAreaView`
flex: 1;
background-color: ${props => props.backColor};
`;

const ScrollView = styled.ScrollView`
flex: 1;
`;

const ViewButtonRow = styled.View`
display: flex;
flex-direction: row;
justify-content: space-around;
margin-top: 10px;
`;

const TouchableOpacityHomeButton = styled.TouchableOpacity`
width: ${sizes.width / 4.2}px;
height: ${sizes.height / 8}px;
justify-content: center;
align-items: center;
margin: 5px;
`;

const ViewButtonIconContainer = styled.View`
width: ${sizes.width > 393 ? 70 : 60}px;
height: ${sizes.width > 393 ? 70 : 60}px;
border-radius: 30px;
justify-content: center;
align-items: center;
margin-bottom: 10px;
background-color: ${props => props.backColor};
`;

const ViewNew = styled.View`
width: 30px;
border-radius: 3px;
background-color: ${myColor.orange};
justify-content: center;
align-items: center;
margin-top: -12px;
`;

const TextNew = styled.Text`
color: ${props => props.color};
font-size: ${props => props.fontSize};
`;

const ImageIcon = styled.Image`
width: ${sizes.width > 393 ? 50 : 40}px;
height: ${sizes.width > 393 ? 50 : 40}px;
tintColor: ${props => props.tintColor};
`;

const TextIcon = styled.Text`
fontSize: ${sizes.width > 393 ? 15 : 14}px;
color: ${props => props.color};
`;

const ViewCitizenContainer = styled.View`
width: 95%;
display: flex;
flex-direction: row;
align-self: center;
border-radius: 10px;
background-color: ${props => props.backColor};
margin-top: 10px;
`;

const ViewCitizenRow = styled.View`
width: 50%;
margin-vertical: 10px;
justify-content: center;
align-items: center;
`;

const TextCitizen = styled.Text`
color: ${props => props.color};
fontSize: ${props => props.fontSize},
`;

const ViewTripContainer = styled.View`
width: 95%;
align-self: center;
border-radius: 10px;
background-color: ${props => props.backColor};
margin-top: 20px;
shadow-color: ${props => props.shadowColor};
shadow-offset: {width: 1px, height: 1px};
shadow-opacity: 0.2px;
shadow-radius: 2px;
elevation: 5px;
`;

const ViewTripTypeContainer = styled.View`
display: flex;
flex-direction: row;
justify-content: space-between;
border-bottom-width: 1px
border-bottom-color: ${props => props.borderBottomColor};
`;

const TouchableOpacityTypeContainer = styled.TouchableOpacity`
width: 50%
padding: 15px;
justify-content: center;
align-items: center;
background-color: ${props => props.backColor};
border-bottom-width: 1px
border-bottom-color: ${props => props.borderBottomColor};
border-top-left-radius: ${props => props.borderTopLeftRedius};
`;

const TextTripType = styled.Text`
color: ${props => props.color};
font-weight: bold;
`;

const TextTrip = styled.Text`
color: ${props => props.color};
font-size: ${props => props.fontSize};
margin: 15px;
`;

const TouchableOpacitySearchButton = styled.TouchableOpacity`
width: 95%;
justify-content: center;
align-items: center;
align-self: center;
padding: 10px;
margin-top: 10px;
border-radius: 10px;
background-color: ${props => props.backColor};
`;

const TextSearchButton = styled.Text`
    color: ${props => props.color};
    font-size: ${props => props.fontSize};
`;

const ViewImageContainer = styled.View`
width: 95%;
align-self: center;
margin-top: 20px;
`;

const ImageSize = styled.Image`
width: 100%
margin-bottom: 10px
`;

export const Styled = {
    SafeAreaView,
    ScrollView,
    ViewButtonRow,
    ViewCitizenContainer,
    ViewCitizenRow,
    TextCitizen,
    ViewTripContainer,
    ViewTripTypeContainer,
    TouchableOpacityTypeContainer,
    TextTripType,
    TextTrip,
    TouchableOpacitySearchButton,
    TextSearchButton,
    ViewImageContainer,
    ImageSize,
    TouchableOpacityHomeButton,
    ViewButtonIconContainer,
    ViewNew,
    TextNew,
    ImageIcon,
    TextIcon,
}

import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {Header, RadioButton} from '../../components';
import {myColor, sizes, icons, images} from '../../constants';
import HomeButton from './components/HomeButton';
import {Styled} from './components/HomeStyle';

const HomeScreen = () => {
  const [isMyanmar, setIsMyanmar] = useState('Yes');
  var isCitizen = [
    {label: 'Yes', value: 'Yes'},
    {label: 'No', value: 'No'},
  ];
  return (
    <Styled.SafeAreaView backColor={myColor.white}>
      <Header />
      <Styled.ScrollView>
        <Styled.ViewButtonRow>
          <HomeButton icon={icons.flight} title={'Flights'} isActive />
          <HomeButton icon={icons.hotel} title={'Hotels'} />
          <HomeButton icon={icons.bus} title={'Buses'} />
        </Styled.ViewButtonRow>
        <Styled.ViewButtonRow>
          <HomeButton icon={icons.car} title={'Cars'} />
          <HomeButton icon={icons.hotAirBalloon} title={'Balloons'} isNew />
          <HomeButton icon={icons.promotion} title={'Promos'} />
        </Styled.ViewButtonRow>

        <Styled.ViewCitizenContainer backColor={myColor.lightGray1}>
          <Styled.ViewCitizenRow>
            <Styled.TextCitizen color={myColor.black} fontSize={sizes.body3}>
              Myanmar Citizen
            </Styled.TextCitizen>
          </Styled.ViewCitizenRow>
          <Styled.ViewCitizenRow>
            <RadioButton
              data={isCitizen}
              value={isMyanmar}
              setValue={v => setIsMyanmar(v)}
            />
          </Styled.ViewCitizenRow>
        </Styled.ViewCitizenContainer>

        <Styled.ViewTripContainer
          backColor={myColor.white}
          style={sizes.shadowStyle}>
          <Styled.ViewTripTypeContainer borderBottomColor={myColor.grey1}>
            <Styled.TouchableOpacityTypeContainer
              backColor={myColor.white}
              borderBottomColor={myColor.primary}
              borderTopLeftRedius={'10px'}
              borderTopRightRadius={'0px'}>
              <Styled.TextTripType color={myColor.primary}>
                One Way
              </Styled.TextTripType>
            </Styled.TouchableOpacityTypeContainer>
            <Styled.TouchableOpacityTypeContainer
              backColor={myColor.lightGray1}
              borderBottomColor={myColor.grey1}
              borderTopLeftRedius={'0px'}
              borderTopRightRadius={'10px'}>
              <Styled.TextTripType color={myColor.darkGray}>
                Round Trip
              </Styled.TextTripType>
            </Styled.TouchableOpacityTypeContainer>
          </Styled.ViewTripTypeContainer>
          <Styled.ViewTripTypeContainer borderBottomColor={myColor.grey1}>
            <Styled.TextTrip color={myColor.black} fontSize={sizes.body3}>
              From
            </Styled.TextTrip>
            <Styled.TextTrip color={myColor.black} fontSize={sizes.body3}>
              Mandalay
            </Styled.TextTrip>
          </Styled.ViewTripTypeContainer>
          <Styled.ViewTripTypeContainer borderBottomColor={myColor.grey1}>
            <Styled.TextTrip color={myColor.black} fontSize={sizes.body3}>
              To
            </Styled.TextTrip>
            <Styled.TextTrip color={myColor.black} fontSize={sizes.body3}>
              Yangon
            </Styled.TextTrip>
          </Styled.ViewTripTypeContainer>
          <Styled.ViewTripTypeContainer borderBottomColor={myColor.grey1}>
            <Styled.TextTrip color={myColor.black} fontSize={sizes.body3}>
              From
            </Styled.TextTrip>
            <Styled.TextTrip color={myColor.black} fontSize={sizes.body3}>
              Web, 17 Feb 2021
            </Styled.TextTrip>
          </Styled.ViewTripTypeContainer>
          <Styled.ViewTripTypeContainer borderBottomColor={myColor.grey1}>
            <Styled.TextTrip color={myColor.black} fontSize={sizes.body3}>
              Pax
            </Styled.TextTrip>
            <Styled.TextTrip color={myColor.black} fontSize={sizes.body3}>
              1 Adult, 0 Child, 1 Room
            </Styled.TextTrip>
          </Styled.ViewTripTypeContainer>
        </Styled.ViewTripContainer>

        <Styled.TouchableOpacitySearchButton backColor={myColor.primary}>
          <Styled.TextSearchButton color={myColor.white} fontSize={sizes.body3}>
            Search
          </Styled.TextSearchButton>
        </Styled.TouchableOpacitySearchButton>

        <Styled.ViewImageContainer>
          <Styled.ImageSize source={images.travel1} />
          <Styled.ImageSize source={images.travel3} />
        </Styled.ViewImageContainer>
      </Styled.ScrollView>
    </Styled.SafeAreaView>
  );
};

export default HomeScreen;

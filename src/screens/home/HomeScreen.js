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

const HomeScreen = () => {
    const [isMyanmar, setIsMyanmar] = useState('Yes');
    var isCitizen = [
        {label: 'Yes', value: 'Yes'},
        {label: 'No', value: 'No'},
      ];
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.buttonRow}>
          <HomeButton icon={icons.flight} title={'Flights'} isActive />
          <HomeButton icon={icons.hotel} title={'Hotels'} />
          <HomeButton icon={icons.bus} title={'Buses'} />
        </View>
        <View style={styles.buttonRow}>
          <HomeButton icon={icons.car} title={'Cars'} />
          <HomeButton icon={icons.hotAirBalloon} title={'Balloons'} isNew />
          <HomeButton icon={icons.promotion} title={'Promos'} />
        </View>

        <View style={styles.citizenContainer}>
          <View style={styles.citizenRow}>
            <Text style={styles.citizenText}>Myanmar Citizen</Text>
          </View>
          <View style={styles.citizenRow}>
            <RadioButton data={isCitizen} value={isMyanmar} setValue={(v) => setIsMyanmar(v)}/>
          </View>
        </View>

        <View style={styles.tripContainer}>
          <View style={styles.tripTypeContainer}>
            <TouchableOpacity
              style={[
                styles.typeContainer,
                {
                  borderTopLeftRadius: 10,
                  backgroundColor: myColor.white,
                  borderBottomWidth: 1,
                  borderBottomColor: myColor.primary,
                },
              ]}>
              <Text style={[styles.typeText, {color: myColor.primary}]}>
                One Way
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.typeContainer, {borderTopRightRadius: 10}]}>
              <Text style={styles.typeText}>Round Trip</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.tripTypeContainer}>
            <Text style={styles.tripText}>From</Text>
            <Text style={styles.tripText}>Mandalay</Text>
          </View>
          <View style={styles.tripTypeContainer}>
            <Text style={styles.tripText}>To</Text>
            <Text style={styles.tripText}>Yangon</Text>
          </View>
          <View style={styles.tripTypeContainer}>
            <Text style={styles.tripText}>From</Text>
            <Text style={styles.tripText}>Web, 17 Feb 2021</Text>
          </View>
          <View style={styles.tripTypeContainer}>
            <Text style={styles.tripText}>Pax</Text>
            <Text style={styles.tripText}>1 Adult, 0 Child, 1 Room</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.searchButton}>
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>

        <View style={styles.imageContainer}>
          <Image source={images.travel1} style={styles.imageSize} />
          <Image source={images.travel3} style={styles.imageSize} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColor.white,
  },
  scrollContainer: {
    flex: 1,
  },
  buttonRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },

  citizenContainer: {
    width: '95%',
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
    borderRadius: 10,
    backgroundColor: myColor.lightGray1,
    marginTop: 10,
  },
  citizenRow: {
    width: '50%',
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  citizenText: {
    color: myColor.black,
    fontSize: sizes.body3,
  },

  tripContainer: {
    width: '95%',
    alignSelf: 'center',
    borderRadius: 10,
    backgroundColor: myColor.white,
    marginTop: 10,
    shadowColor: myColor.black,
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5,
  },
  tripTypeContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: myColor.grey1,
  },
  typeContainer: {
    width: '50%',
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: myColor.lightGray1,
  },
  typeText: {
    color: myColor.darkGray,
    fontWeight: 'bold',
  },
  tripText: {
    color: myColor.black,
    fontSize: 16,
    margin: 15,
  },

  searchButton: {
    width: '95%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    padding: 10,
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: myColor.primary,
  },
  searchButtonText: {
    color: myColor.white,
    fontSize: sizes.body3,
  },

  imageContainer: {
    width: '95%',
    alignSelf: 'center',
    marginTop: 20,
  },
  imageSize: {
    width: '100%',
    marginBottom: 10,
  },
});

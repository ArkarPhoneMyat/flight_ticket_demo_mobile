import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {myColor, sizes} from '../../../constants';

const HomeButton = props => {
  const {icon, title, isNew = false, isActive = false} = props;
  return (
    <TouchableOpacity style={styles.button}>
      <View
        style={[
          styles.buttonIconContainer,
          {backgroundColor: isActive ? myColor.softPrimary : myColor.lightGray1},
        ]}>
        {isNew ? (
          <View style={styles.new}>
            <Text style={styles.newText}>New!</Text>
          </View>
        ) : null}
        <Image style={[styles.icon, {tintColor: isActive ? myColor.primary : null}]} source={icon} />
      </View>

      <Text style={[styles.text, {color: isActive ? myColor.primary : myColor.black}]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default HomeButton;

const styles = StyleSheet.create({
  button: {
    width: sizes.width / 4.2,
    height: sizes.height / 8,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  buttonIconContainer: {
    width: sizes.width > 393 ? 70 : 60,
    height: sizes.width > 393 ? 70 : 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    width: sizes.width > 393 ? 50 : 40,
    height: sizes.width > 393 ? 50 : 40,
    tintColor: myColor.black,
  },
  text: {
    fontSize: sizes.width > 393 ? 15 : 14,
  },
  new: {
    width: 30,
    borderRadius: 3,
    backgroundColor: myColor.orange,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -12
  },
  newText: {
    color: myColor.white,
    fontSize: sizes.body6
  }
});

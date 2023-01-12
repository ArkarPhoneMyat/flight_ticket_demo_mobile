import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {myColor} from '../constants';

const RadioButton = ({data, value, setValue}) => {
  return (
    <View style={styles.radioButtonContainer}>
      {data.length &&
        data.map((v, i) => (
          <TouchableOpacity
          key={i}
            style={styles.radioButton}
            onPress={() => setValue(v.value)}>
            <View
              style={[
                styles.radioButtonCircle,
                {
                  borderColor:
                    v.value == value ? myColor.primary : myColor.black,
                },
              ]}>
              <View
                style={[
                  styles.radioButtonInnerCircle,
                  {
                    backgroundColor:
                      v.value == value ? myColor.primary : myColor.white,
                  },
                ]}
              />
            </View>
            <Text style={styles.radioButtonText}>{v.label}</Text>
          </TouchableOpacity>
        ))}
    </View>
  );
};

export default RadioButton;

const styles = StyleSheet.create({
  radioButtonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  radioButton: {
    width: 100,
    height: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  radioButtonCircle: {
    width: 15,
    height: 15,
    borderRadius: 10,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  radioButtonInnerCircle: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  radioButtonText: {
    fontSize: 12,
    color: myColor.black,
  },
});

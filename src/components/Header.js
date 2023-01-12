import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import { myColor, sizes, icons, images } from '../constants'

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerRow}>
        <View style={styles.headerText}>
            <Text style={styles.header}>Flymya</Text>
        </View>
        <View style={styles.headerButtons}>
            <TouchableOpacity style={styles.iconContainer}>
                <Image source={images.britishFlag} style={styles.icons}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconContainer}>
                <Image source={icons.user} style={styles.icons}/>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    headerContainer: {
        height: 50,
        backgroundColor: myColor.white
    },
    headerRow: {
        width: '100%',
        height: 50,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerText: {
        flex: 1,
        paddingLeft: 10,
    },
    headerButtons: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    header: {
        color: myColor.black,
        fontSize: sizes.h1
    },
    iconContainer: {
        width: 30,
        height: 30,
        borderRadius: 20,
        marginRight: 20,
    },
    icons: {
        width: '100%',
        height: '100%',
        borderRadius: 20,
    }
})
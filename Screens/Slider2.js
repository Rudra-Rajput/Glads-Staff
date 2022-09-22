import {StyleSheet, Text, View, StatusBar, Image} from 'react-native';
import React from 'react';

const Slider2 = ({navigation}) => {

setTimeout(() => {
    navigation.navigate('Slider3')
}, 1500);

  return (
    <>
      <StatusBar backgroundColor="#fa7452" />
      <View style={styles.MainContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/Slider2.png')}
            style={styles.Image}
          />
        </View>

        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={styles.textStyle}>In and Out Management</Text>
        </View>
      </View>
    </>
  );
};

export default Slider2;

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: '#fa7452',
  },

  textStyle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    letterSpacing: 2,
    marginTop: '-30%',
  },

  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  Image: {
    height: 280,
    width: 280,
  },
});

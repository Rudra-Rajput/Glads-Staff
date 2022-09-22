import {StyleSheet, Text, View, StatusBar, Image} from 'react-native';
import React from 'react';

const Slider1 = ({navigation}) => {

setTimeout(() => {
    navigation.navigate('Slider2')
}, 1500);

  return (
    <>
      <StatusBar backgroundColor="#fa7452" />
      <View style={styles.MainContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/Slider1.png')}
            style={styles.Image}
          />
        </View>

        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={styles.textStyle}>Manage Your Stock</Text>
        </View>
      </View>
    </>
  );
};

export default Slider1;

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
    height: 350,
    width: 300,
  },
});

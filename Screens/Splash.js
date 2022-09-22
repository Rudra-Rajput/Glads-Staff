import {StatusBar, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const Splash = ({navigation}) => {


    setTimeout(() => {
        navigation.navigate('Slider1')
    }, 2000);


  return (
    <>
      <StatusBar backgroundColor="#ffffff" />
      <View style={styles.MainContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={
              require('../assets/Glads.png')
            }
            style={styles.Image}
          />
          <View style={{marginTop: '10%'}}>
            <Text
              style={{
                fontSize: 26,
                fontWeight: 'bold',
                color: '#fa7452',
                letterSpacing: 1,
              }}>
              GLADS
            </Text>
          </View>
        </View>

        <View style={{justifyContent: 'center', alignItems: 'center',}}>
          <Text style={styles.textStyle}>Your Personal Manager</Text>
        </View>

      </View>
    </>
  );
};

export default Splash;

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  Image: {
    height: 200,
    width: 200,
  },

  textStyle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000000',
    letterSpacing: 2,
    marginTop: '-20%',
  }
});

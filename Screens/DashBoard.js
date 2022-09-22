import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import BottomNav from '../Components/BottomNav';



const DashBoard = ({navigation}) => {
  return (
    <>
      <StatusBar backgroundColor="#ffffff" />
      <View style={{flex: 1}}>
        <ScrollView>
          <View style={styles.ImgContainer}>
            <Image
              source={require('../assets/Glads.png')}
              style={styles.imageStyle}
            />
            <Text style={styles.DashText}>Dashboard</Text>
          </View>

          <View style={{height: 90, backgroundColor: '#fa7452'}}>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.AvtarStyle}>
                <Image
                  source={require('../assets/Avtar.png')}
                  style={styles.AvtarImage}
                />
              </View>

              <Text
                style={{
                  marginLeft: 24,
                  fontSize: 20,
                  fontWeight: '500',
                  color: '#ffffff',
                  marginTop: '5%',
                }}>
                Hii ! Staff Member
              </Text>
            </View>
            <Text
              style={{
                marginLeft: '25%',
                marginTop: '-6%',
                fontWeight: '400',
                color: '#ffffff',
                fontSize: 15,
              }}>
              ID: 3866626354343
            </Text>
          </View>

          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 6,
            }}>
            <Text style={{fontSize: 25, color: '#000000', fontWeight: '500'}}>
              Generate Invoices
            </Text>
          </View>

          <ImageBackground
            source={require('../assets/Logo.png')}
            style={{
              height: 250,
              width: 250,
              marginTop: '30%',
              marginLeft: '15%',
              opacity: 0.2,
            }}></ImageBackground>

          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            

           
           <View style={styles.Cardstyle}>
           <TouchableOpacity onPress={()=>navigation.navigate('Costumer')} style={{justifyContent: 'center', alignItems: 'center',}}>
              <Image source={require('../assets/Icon1.png')} style={{alignItems: 'center'}}/>
              <Text
                style={{
                  color: '#000000',
                  fontWeight: 'bold',
                  marginTop: 15,
                }}>
                Costumer Invoice
              </Text>
            </TouchableOpacity>
            </View>
           


            <View style={styles.Cardstyle}>
            <TouchableOpacity onPress={()=>navigation.navigate('Store')} style={{justifyContent: 'center', alignItems: 'center',}}>
              <Image source={require('../assets/Icon2.png')} />
              <Text
                style={{
                  color: '#000000',
                  fontWeight: 'bold',
                  marginTop: 15,
                }}>
                Store Purchase
              </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <View style={styles.Cardstyle2}>
            <TouchableOpacity onPress={()=>navigation.navigate('Miscellaneous')} style={{justifyContent: 'center', alignItems: 'center',}}>
              <Image source={require('../assets/Icon3.png')} />
              <Text
                style={{
                  color: '#000000',
                  fontWeight: 'bold',
                  marginTop: 15,
                }}>
                Miscellaneous
              </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.Cardstyle2}>
            <TouchableOpacity onPress={()=>navigation.navigate('Expanses')} style={{justifyContent: 'center', alignItems: 'center',}}>
              <Image source={require('../assets/Icon4.png')} />
              <Text
                style={{
                  color: '#000000',
                  fontWeight: 'bold',
                  marginTop: 15,
                }}>
                Expanses
              </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.Cardstyle3}>
          <TouchableOpacity onPress={()=>navigation.navigate('Deposit')} style={{justifyContent: 'center', alignItems: 'center',}}>
            <Image source={require('../assets/Icon5.png')} />
            <Text
              style={{
                color: '#000000',
                fontWeight: 'bold',
                marginTop: 15,
              }}>
              Deposit
            </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>


      <BottomNav navigation={navigation}/>


      </View>
    </>
  );
};

export default DashBoard;

const styles = StyleSheet.create({
  ImgContainer: {
    height: 70,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 9,
    marginLeft: '-30%',
  },

  imageStyle: {
    height: 40,
    width: 40,
  },

  DashText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000000',
    marginLeft: '16%',
  },

  AvtarStyle: {
    height: 60,
    width: 60,
    borderRadius: 60,
    borderWidth: 1,
    marginTop: 14,
    marginLeft: 5,
    borderColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },

  AvtarImage: {
    height: 60,
    width: 60,
  },

  Cardstyle: {
    height: 130,
    width: 130,
    backgroundColor: '#ffffff',
    marginHorizontal: '5%',
    marginTop: '-94%',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 9,
  },

  Cardstyle2: {
    height: 130,
    width: 130,
    backgroundColor: '#ffffff',
    marginHorizontal: '5%',
    marginTop: '-53%',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 9,
  },

  Cardstyle3: {
    height: 130,
    width: 130,
    backgroundColor: '#ffffff',
    marginTop: '-11%',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 9,
    marginBottom: 5,
    marginHorizontal: '32%',
  },

  Bottomcontainer: {
    backgroundColor: '#fa7452',
    height: '9%',
    borderTopRightRadius: 22,
    borderTopLeftRadius: 22,
  },
});

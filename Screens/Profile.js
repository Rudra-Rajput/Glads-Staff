import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  Image
} from 'react-native';
import React from 'react';
import BottomNav from '../Components/BottomNav';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import ImagePicker from 'react-native-image-crop-picker';



const Profile = ({navigation}) => {


const openGallery = () => {
  ImagePicker.openPicker({
    width: 300,
    height: 400,
    cropping: true,
  }).then(image => {
    console.log(image);
  });
}


  return (
    <>
      <StatusBar backgroundColor="#ffffff" />

      <View style={{flex: 1}}>

        <ScrollView>
          <View style={styles.TopNavContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('DashBoard')}>
              <Ionicons
                name="arrow-back"
                size={28}
                color="#000000"
                style={styles.NavIcon}
              />
            </TouchableOpacity>
            <Text style={styles.NavText}>Profile</Text>
          </View>

        <View style={styles.CircleStyle}>
        </View>

        <TouchableOpacity 
        style={{
          position: 'absolute',
          top: '14%', 
          right: '15%', 
          backgroundColor: '#ffffff', 
          paddingVertical: 6, 
          paddingHorizontal: 12, 
          borderRadius: 5}}
          activeOpacity={0.7}
          onPress={()=>navigation.navigate('EditProfile')}
          >
            <Text style={{color: '#000000', fontWeight: '500'}}>Edit Profile</Text>
        </TouchableOpacity>

        <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <View style={styles.ImgContainer}>
        <Image source={require('../assets/Avtar.png')} style={{height: 250, width: 250}}/>

        <TouchableOpacity style={{position: 'absolute', bottom: 20, right: 20}} onPress={openGallery}>
        <Entypo name='pencil' size={25} color= '#000000' style={{}}/>
        </TouchableOpacity>

        </View>
        </View>


        <View style={styles.textContainer}>

            <Text style={styles.textStyle}>Staff Name</Text>

            <Text style={styles.textStyle}>Staff ID: 372538636</Text>

            <Text style={styles.textStyle}>9555123085</Text>

            <Text style={styles.textStyle}>staffmember@gmail.com</Text>

            <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
            <Text style={[styles.textStyle,{color: '#3342a3'}]}>Log Out</Text>
            </TouchableOpacity>

            <Text style={{marginTop: '5%', color: '#0a5ccf'}}>Terms & Privacy Policy</Text>

        </View>

        </ScrollView>

      </View>

      <BottomNav navigation={navigation} />
    </>
  );
};

export default Profile;

const styles = StyleSheet.create({
  TopNavContainer: {
    height: 60,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 9,
  },

  NavText: {
    fontSize: 24,
    color: '#000000',
    fontWeight: '500',
    textAlign: 'center',
    marginLeft: '25%',
  },

  NavIcon: {
    marginLeft: 10,
  },

  CircleStyle: {
    height: 220,
    backgroundColor: '#fa7452',
    borderBottomLeftRadius: 200,
    borderBottomRightRadius: 200,
    justifyContent: 'center',
    alignItems: 'center'
  },

  ImgContainer: {
    height: 280,
    width: '80%',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    marginTop: '-40%',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    marginBottom: 10,
  },

  textContainer: {
    justifyContent: 'center', 
    alignItems: 'center',
    marginTop: '8%',
  },

  textStyle: {
    fontSize: 22,
    fontWeight: '500',
    color: '#0c2342',
    padding: 3,
  }
});

import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  TouchableOpacity,
  TextInput, 
  ScrollView,
} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';

const Login = ({navigation}) => {

  return (
    <>
      <StatusBar backgroundColor="#fa7452" />
      <ScrollView style={{flex: 1, height: '100%'}}>
        <View style={styles.Header}>
          <Image source={require('../assets/Logo.png')} style={styles.Image} />

          <View style={{position: 'relative'}}>
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: 22,
                  fontWeight: '600',
                  color: '#ffffff',
                  position: 'absolute',
                  right: 30,
                }}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{marginTop: '10%', marginHorizontal: '10%'}}>
          <Text style={styles.textStyle}>Enter Your Mobile Number</Text>
        </View>

        <View style={styles.inputContainer}>
          <FontAwesome
            name="phone"
            size={24}
            color="#000000"
            style={{marginLeft: '5%'}}
          />
          <TextInput
            placeholder="Number"
            keyboardType="numeric"
            style={styles.inputStyle}
          />
        </View>


        <View style={{marginTop: '15%', marginHorizontal: '10%'}}>
          <Text style={styles.textStyle}>Enter Your Password</Text>
        </View>


        <View style={styles.inputContainer}>
          <FontAwesome
            name="lock"
            size={24}
            color="#000000"
            style={{marginLeft: '5%'}}
          />
          <TextInput
            placeholder="Password"
            style={styles.inputStyle}
            secureTextEntry={true}
          />
        </View>

        <LinearGradient
          colors={['#7C1D82', '#330136']}
          style={styles.buttonContainer}
          start={{x: 1, y: 0}}
          end={{x: 1, y: 1}}>
          <TouchableOpacity activeOpacity={0.4} onPress={()=> navigation.navigate('DashBoard')}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </LinearGradient>


        <View style={{marginTop: '25%'}}>
          <Text style={{textAlign: 'center'}}>
            By loggin in you agree our{' '}
            <Text style={{color: 'blue', textAlign: 'center'}}>
              Terms & Privacy Policy.
            </Text>
          </Text>
        </View>
        
      </ScrollView>
     
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  Header: {
    height: 260,
    backgroundColor: '#fa7452',
    borderBottomLeftRadius: 150,
  },

  Image: {
    height: 130,
    width: 130,
    marginTop: '10%',
    marginLeft: '10%',
    marginBottom: '12%',
  },

  textStyle: {
    fontSize: 20,
    color: '#000000',
    fontWeight: '500',
  },

  inputContainer: {
    marginHorizontal: '10%',
    borderWidth: 1,
    marginTop: 12,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    height: 45,
  },

  inputStyle: {
    fontSize: 18,
    marginHorizontal: '5%',
    width: '80%',
  },

  buttonContainer: {
    marginHorizontal: '33%',
    marginTop: '12%',
    backgroundColor: '#100f42',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 6,
    marginBottom: 10,
  },

  buttonText: {
    paddingVertical: 12,
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '500',
  },

  inputView: {
    width: 50,
    height: 48,
    marginHorizontal: '3%',
    marginTop: 18,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 10,
  },
});

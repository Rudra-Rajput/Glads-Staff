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
import React, {useState, useRef} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';

const Login = ({navigation}) => {
  const pin1Ref = useRef(null);
  const pin2Ref = useRef(null);
  const pin3Ref = useRef(null);
  const pin4Ref = useRef(null);

  const [pin1, setPin1] = useState('');
  const [pin2, setPin2] = useState('');
  const [pin3, setPin3] = useState('');
  const [pin4, setPin4] = useState('');

  return (
    <>
      <StatusBar backgroundColor="#fa7452" />
      <ScrollView style={{flex: 1}}>
        <View style={styles.Header}>
          <Image source={require('../assets/Glads.png')} style={styles.Image} />

          <View style={{position: 'relative'}}>
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: 25,
                  fontWeight: '500',
                  color: '#131240',
                  position: 'absolute',
                  right: 30,
                }}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{marginTop: '10%', marginHorizontal: '10%'}}>
          <Text style={styles.textStyle}>Login with OTP</Text>
        </View>

        <View style={styles.inputContainer}>
          <FontAwesome
            name="phone"
            size={26}
            color="#000000"
            style={{marginLeft: '5%'}}
          />
          <TextInput
            placeholder="Number"
            keyboardType="numeric"
            style={styles.inputStyle}
          />
        </View>

        <LinearGradient
          colors={['#7C1D82', '#330136']}
          style={styles.buttonContainer}
          start={{x: 1, y: 0}}
          end={{x: 1, y: 1}}>
          <TouchableOpacity activeOpacity={0.4}>
            <Text style={styles.buttonText}>Get OTP</Text>
          </TouchableOpacity>
        </LinearGradient>

        <View style={{marginTop: '5%', marginHorizontal: '10%'}}>
          <Text style={styles.textStyle}>Enter OTP</Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={styles.inputView}>
            <TextInput
              ref={pin1Ref}
              keyboardType="numeric"
              secureTextEntry = {true}
              maxLength={1}
              style={{fontSize: 24, textAlign: 'center'}}
              onChange={pin1 => {
                setPin1(pin1);

                if (pin1 !== '') {
                  pin2Ref.current.focus();
                }
              }}
            />
          </View>

          <View style={styles.inputView}>
            <TextInput
              ref={pin2Ref}
              keyboardType="numeric"
              secureTextEntry = {true}
              maxLength={1}
              style={{fontSize: 24, textAlign: 'center'}}
              onChange={pin2 => {
                setPin2(pin2);

                if (pin2 !== '') {
                  pin3Ref.current.focus();
                }
              }}
            />
          </View>

          <View style={styles.inputView}>
            <TextInput
              ref={pin3Ref}
              keyboardType="numeric"
              secureTextEntry = {true}
              maxLength={1}
              style={{fontSize: 24, textAlign: 'center'}}
              onChange={pin3 => {
                setPin3(pin3);

                if (pin3 !== '') {
                  pin4Ref.current.focus();
                }
              }}
            />
          </View>

          <View style={styles.inputView}>
            <TextInput
              ref={pin4Ref}
              keyboardType="numeric"
              secureTextEntry = {true}
              maxLength={1}
              style={{fontSize: 24, textAlign: 'center'}}
              onChange={pin4 => {
                setPin4(pin4);
              }}
            />
          </View>
        </View>

        <LinearGradient
          colors={['#7C1D82', '#330136']}
          style={styles.buttonContainer}
          start={{x: 1, y: 0}}
          end={{x: 1, y: 1}}>
          <TouchableOpacity activeOpacity={0.4} onPress={() => navigation.navigate('DashBoard')}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </LinearGradient>

        <View style={{marginTop: '14%'}}>
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
    height: 100,
    width: 100,
    marginTop: '10%',
    marginLeft: '10%',
    marginBottom: '12%',
  },

  textStyle: {
    fontSize: 16,
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
  },

  inputStyle: {
    fontSize: 20,
    marginHorizontal: '5%',
    width: '80%',
  },

  buttonContainer: {
    marginHorizontal: '33%',
    marginTop: '8%',
    backgroundColor: '#100f42',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 6,
    marginBottom: 10,
  },

  buttonText: {
    paddingVertical: 10,
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

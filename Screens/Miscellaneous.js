import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import RadioButtonRN from 'radio-buttons-react-native';
import ImagePicker from 'react-native-image-crop-picker';



const Miscellaneous = ({navigation}) => {

const data = [
  {label: 'In'},
  {label: 'Out'}
]


const openGallery = () => {
  ImagePicker.openPicker({
    width: 300,
    height: 400,
    cropping: true
  }).then(image => {
    console.log(image);
  });
}


  return (
    <>
      <StatusBar backgroundColor="#ffffff" />
      <View style={{flex: 1, backgroundColor: '#ffffff'}}>

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
            <Text style={styles.NavText}>Miscellaneous</Text>
          </View>


          <View style={{marginHorizontal: '8%', marginTop: '5%'}}>
            <Text style={{fontSize: 20, fontWeight: '500', color: '#fa7452'}}>
              Enter Person Details
            </Text>
          </View>


          <View style={styles.InputContainer}>
            <TextInput
              placeholder="Person Name"
              placeholderTextColor="#000000"
              style={{marginLeft: '3%'}}
            />
          </View>


          <View style={styles.InputContainer}>
            <TextInput
              placeholder="Person Mobile Number"
              placeholderTextColor="#000000"
              keyboardType='numeric'
              style={{marginLeft: '3%'}}
            />
          </View>


          <View style={{marginHorizontal: '8%', marginTop: '5%'}}>
            <Text style={{fontSize: 20, fontWeight: '500', color: '#fa7452'}}>
              Enter Invoice Details
            </Text>
          </View>



          <View style={{marginHorizontal: '8%', marginVertical: '5%'}}>
          <RadioButtonRN
              data={data}
              selectedBtn={(e) => console.log(e)}
              boxStyle={{borderRadius: 12}}
              activeColor='#fa7452'
              textStyle={{fontSize: 20, fontWeight: '500',}}
            />
          </View>

          <View style={styles.InputContainer}>
            <TextInput
              placeholder="Enter Bill or Serial Number"
              placeholderTextColor="#000000"
              keyboardType='numeric'
              style={{marginLeft: '3%'}}
            />
          </View>


      <View style={styles.InputBoxContainer}>
          <TextInput placeholder='Enter Description'
          placeholderTextColor='#000000'
          multiline={true}
          style={{marginLeft: '3%'}}
          />
      </View>



          <View
            style={{
              borderWidth: 1,
              flexDirection: 'row',
              alignItems: 'center',
              marginHorizontal: '8%',
              marginTop: '6%',
              justifyContent: 'space-between',
              height: 45,
              borderRadius: 12,
            }}>
            <Text
              style={{
                marginLeft: '5%',
                color: '#fa7452',
                fontWeight: '500',
                fontSize: 16,
              }}>
              Total Amount
            </Text>
            <Text
              style={{
                marginLeft: '5%',
                color: '#3ca654',
                fontWeight: '500',
                fontSize: 16,
              }}>
              Rs
            </Text>
            <TextInput
              placeholder="----"
              placeholderTextColor="#000000"
              style={{marginRight: '5%'}}
            />
          </View>



          <View
            style={{
              justifyContent: 'space-around',
              alignItems: 'center',
              flexDirection: 'row',
              marginHorizontal: '8%',
              marginTop: '20%',
              marginBottom: '5%',
            }}>
            <TouchableOpacity activeOpacity={0.6} onPress={openGallery}>
              <View style={styles.buttomContainer}>
                <Text style={styles.textStyle}>Add Attachment</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.6} onPress={()=>navigation.navigate('MiscellInvoice')}>
              <View style={[styles.buttomContainer, {marginHorizontal: '12%'}]}>
                <Text style={[styles.textStyle, {letterSpacing: 1}]}>Done</Text>
              </View>
            </TouchableOpacity>
          </View>



        </ScrollView>
      </View>
    </>
  );
};

export default Miscellaneous;

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
        marginLeft: '15%',
      },
    
      NavIcon: {
        marginLeft: 10,
      },

      InputContainer: {
        marginHorizontal: '8%',
        borderWidth: 1,
        borderRadius: 12,
        height: 45,
        marginTop: '5%',
      },

      InputBoxContainer: {
        borderWidth: 1,
        marginHorizontal: '8%',
        height: 150,
        marginTop: '8%',
        borderRadius: 12,
      },

      buttomContainer: {
        backgroundColor: '#d45b48',
        paddingHorizontal: '4%',
        paddingVertical: 14,
        borderRadius: 10,
      },
    
      textStyle: {
        textAlign: 'center',
        fontWeight: '500',
        color: '#ffffff',
        fontSize: 16,
      }
});

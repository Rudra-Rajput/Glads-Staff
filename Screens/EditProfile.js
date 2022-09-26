import { ScrollView, StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const EditProfile = ({navigation}) => {
  return (
    <View>
        <ScrollView>

        <View style={styles.TopNavContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
              <Ionicons
                name="arrow-back"
                size={28}
                color="#000000"
                style={styles.NavIcon}
              />
            </TouchableOpacity>
            <Text style={styles.NavText}>Edit Profile</Text>
        </View>


        <View style={{marginTop: '5%'}}>

        <View style={styles.inputContainer}>
          <FontAwesome
            name="user"
            size={24}
            color="#000000"
            style={{marginLeft: '5%'}}
          />
          <TextInput
            placeholder="Name"
            style={styles.inputStyle}
          />
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

        <View style={styles.inputContainer}>
          <MaterialCommunityIcons
            name="email"
            size={24}
            color="#000000"
            style={{marginLeft: '5%'}}
          />
          <TextInput
            placeholder="Email"
            keyboardType="email"
            style={styles.inputStyle}
          />
        </View>

        </View>

            <TouchableOpacity activeOpacity={0.6} onPress={()=>navigation.navigate('Profile')}>
                <View style={[styles.buttomContainer, {marginHorizontal: '12%'}]}>
                    <Text style={[styles.textStyle, {letterSpacing: 1}]}>Done</Text>
                </View>
            </TouchableOpacity>


        </ScrollView>
    </View>
  )
}

export default EditProfile

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

      inputContainer: {
        marginHorizontal: '10%',
        borderWidth: 1,
        marginTop: '8%',
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

      buttomContainer: {
        backgroundColor: '#d45b48',
        paddingVertical: 15,
        borderRadius: 10,
        marginTop: '10%',
      },
    
      textStyle: {
        textAlign: 'center',
        fontWeight: '500',
        color: '#ffffff',
        fontSize: 16,
      }
});
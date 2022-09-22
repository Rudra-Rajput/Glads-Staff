import {StyleSheet, View, TouchableOpacity } from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';



const BottomNav = ({navigation}) => {
  return (
    <>

      <View style={styles.Bottomcontainer}>
          <View
            style={{
              flexDirection: 'row',
              marginTop: -18,
              justifyContent: 'space-around',
            }}>
            <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate('DashBoard')}>
              <View
                style={{
                  height: 50,
                  width: 50,
                  borderRadius: 50,
                  backgroundColor: '#ffffff',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Entypo name="home" size={28} color="#140a29" />
              </View>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate('Chat')}>
              <View
                style={{
                  height: 50,
                  width: 50,
                  borderRadius: 50,
                  backgroundColor: '#ffffff',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <MaterialIcons name="chat" size={28} color="#140a29" />
              </View>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate('Profile')}>
              <View
                style={{
                  height: 50,
                  width: 50,
                  borderRadius: 50,
                  backgroundColor: '#ffffff',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <FontAwesome name="user-circle-o" size={28} color="#140a29" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
    </>
  )
}

export default BottomNav

const styles = StyleSheet.create({
    Bottomcontainer: {
        backgroundColor: '#fa7452',
        height: '6%',
        borderTopRightRadius: 22,
        borderTopLeftRadius: 22,
      },
});
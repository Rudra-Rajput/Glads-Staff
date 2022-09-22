import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, StatusBar } from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';



const ChatBox = ({navigation}) => {
  return (
<View style={{flex: 1}}>
    <StatusBar backgroundColor="#fa7452" />
    <ScrollView>

    <View style={styles.NavContainer}>

      <View style={{marginLeft: '5%'}}>
        <TouchableOpacity onPress={()=>navigation.navigate('Chat')}>
             <AntDesign name='arrowleft' size={28} color= '#000000'/>
        </TouchableOpacity>
      </View>

        <View style={{marginLeft: '6%'}}>
            <Image source={require('../assets/Avtar.png')}
               style={{height: 60, width: 60}}
            />
        </View>

        <View style={{marginLeft: '3%'}}>
             <Text style={{fontSize: 22, fontWeight: '500', color: '#ffffff'}}>Staff Member 1</Text>
             <Text style={{fontSize: 15, fontWeight: '700', color: '#ffffff'}}>Id : 273887663</Text>
        </View>
    </View>


    </ScrollView>
    <View style={{borderRadius: 25,
                  backgroundColor: '#fa7452',
                  opacity: 0.9,
                  marginHorizontal: '3%',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  }}>
        <TextInput
        multiline ={true}
        placeholder='Type To Text...'
        style={{color: '#000000', fontWeight: '400',marginHorizontal: '3%', fontSize: 18, width: '80%',}}
        />
        <TouchableOpacity>
        <AntDesign name='rightcircle' size={30} color='#ffffff'
             style={{marginRight: '3%'}}
             />
        </TouchableOpacity>
    </View>
</View>
  )
}

export default ChatBox

const styles = StyleSheet.create({
    NavContainer: {
        backgroundColor: '#fa7452',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: '5%',
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,
    }
});
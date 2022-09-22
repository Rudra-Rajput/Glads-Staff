import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  Image,
  TextInput,
} from 'react-native';
import React from 'react';
import BottomNav from '../Components/BottomNav';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Entypo from 'react-native-vector-icons/Entypo';

const Chat = ({navigation}) => {
  return (
    <>
      <StatusBar backgroundColor="#ffffff" />

      <View style={{flex: 1, height: '100%'}}>
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
            <Text style={styles.NavText}>Chats</Text>
          </View>

          <View style={styles.SearchBar}>
            <EvilIcons name="search" size={25} color="#ffffff" style={{marginLeft: 8}}/>
            <TextInput
              placeholder="Search"
              placeholderTextColor="#ffffff"
              style={styles.InputStyle}
            />
            <Entypo name="cross" size={20} color="#ffffff" style={{marginRight: 8}}/>
          </View>




        
        <View style={{marginVertical: '6%'}}>

        <TouchableOpacity onPress={()=>navigation.navigate('ChatBox')}>
        <View style={{position: 'relative',}}>
        <View style={styles.ChatBoxContainer}>
          <Image source={require('../assets/Avtar.png')} style={{height: 70, width: 70}}/>
          <Text style={{fontSize: 20, fontWeight: '500', color: '#000000', marginTop: '-6%'}}>Staff Member</Text>
          <Text style={{fontWeight: 'bold', color: '#000000', marginTop: '-5%'}}>04:23 pm</Text>
        </View>
            <Text style={{textAlign: 'center', color: '#000000', fontSize: 14, position: 'absolute', bottom: '12%', right: '36%'}}>text messages...</Text>
        </View>
        </TouchableOpacity>
        <View style={{borderWidth: 0.5, borderStyle: 'dashed', borderColor: '#808b9c', marginVertical: '3%', marginHorizontal: '5%',}}></View>





        <TouchableOpacity onPress={()=>navigation.navigate('ChatBox')}>
        <View style={{position: 'relative',}}>
        <View style={styles.ChatBoxContainer2}>
          <Image source={require('../assets/Avtar.png')} style={{height: 70, width: 70}}/>
          <Text style={{fontSize: 20, fontWeight: '500', color: '#000000', marginTop: '-6%'}}>Staff Member</Text>
          <Text style={{fontWeight: 'bold', color: '#000000', marginTop: '-5%'}}>04:23 pm</Text>
        </View>
            <Text style={{textAlign: 'center', color: '#000000', fontSize: 14, position: 'absolute', bottom: '12%', right: '36%'}}>text messages...</Text>
        </View>
        </TouchableOpacity>
        <View style={{borderWidth: 0.5, borderStyle: 'dashed', borderColor: '#808b9c', marginVertical: '3%', marginHorizontal: '5%',}}></View>






        <TouchableOpacity onPress={()=>navigation.navigate('ChatBox')}>
        <View style={{position: 'relative',}}>
        <View style={styles.ChatBoxContainer2}>
          <Image source={require('../assets/Avtar.png')} style={{height: 70, width: 70}}/>
          <Text style={{fontSize: 20, fontWeight: '500', color: '#000000', marginTop: '-6%'}}>Staff Member</Text>
          <Text style={{fontWeight: 'bold', color: '#000000', marginTop: '-5%'}}>04:23 pm</Text>
        </View>
            <Text style={{textAlign: 'center', color: '#000000', fontSize: 14, position: 'absolute', bottom: '12%', right: '36%'}}>text messages...</Text>
        </View>
        </TouchableOpacity>
        <View style={{borderWidth: 0.5, borderStyle: 'dashed', borderColor: '#808b9c', marginVertical: '3%', marginHorizontal: '5%',}}></View>






        <TouchableOpacity onPress={()=>navigation.navigate('ChatBox')}>
        <View style={{position: 'relative',}}>
        <View style={styles.ChatBoxContainer2}>
          <Image source={require('../assets/Avtar.png')} style={{height: 70, width: 70}}/>
          <Text style={{fontSize: 20, fontWeight: '500', color: '#000000', marginTop: '-6%'}}>Staff Member</Text>
          <Text style={{fontWeight: 'bold', color: '#000000', marginTop: '-5%'}}>04:23 pm</Text>
        </View>
            <Text style={{textAlign: 'center', color: '#000000', fontSize: 14, position: 'absolute', bottom: '12%', right: '36%'}}>text messages...</Text>
        </View>
        </TouchableOpacity>
        <View style={{borderWidth: 0.5, borderStyle: 'dashed', borderColor: '#808b9c', marginVertical: '3%', marginHorizontal: '5%',}}></View>





        <TouchableOpacity onPress={()=>navigation.navigate('ChatBox')}>
        <View style={{position: 'relative',}}>
        <View style={styles.ChatBoxContainer2}>
          <Image source={require('../assets/Avtar.png')} style={{height: 70, width: 70}}/>
          <Text style={{fontSize: 20, fontWeight: '500', color: '#000000', marginTop: '-6%'}}>Staff Member</Text>
          <Text style={{fontWeight: 'bold', color: '#000000', marginTop: '-5%'}}>04:23 pm</Text>
        </View>
            <Text style={{textAlign: 'center', color: '#000000', fontSize: 14, position: 'absolute', bottom: '12%', right: '36%'}}>text messages...</Text>
        </View>
        </TouchableOpacity>
        <View style={{borderWidth: 0.5, borderStyle: 'dashed', borderColor: '#808b9c', marginVertical: '3%', marginHorizontal: '5%',}}></View>






        <TouchableOpacity onPress={()=>navigation.navigate('ChatBox')}>
        <View style={{position: 'relative',}}>
        <View style={styles.ChatBoxContainer2}>
          <Image source={require('../assets/Avtar.png')} style={{height: 70, width: 70}}/>
          <Text style={{fontSize: 20, fontWeight: '500', color: '#000000', marginTop: '-6%'}}>Staff Member</Text>
          <Text style={{fontWeight: 'bold', color: '#000000', marginTop: '-5%'}}>04:23 pm</Text>
        </View>
            <Text style={{textAlign: 'center', color: '#000000', fontSize: 14, position: 'absolute', bottom: '12%', right: '36%'}}>text messages...</Text>
        </View>
        </TouchableOpacity>
        <View style={{borderWidth: 0.5, borderStyle: 'dashed', borderColor: '#808b9c', marginVertical: '3%', marginHorizontal: '5%',}}></View>






        <TouchableOpacity onPress={()=>navigation.navigate('ChatBox')}>
        <View style={{position: 'relative',}}>
        <View style={styles.ChatBoxContainer2}>
          <Image source={require('../assets/Avtar.png')} style={{height: 70, width: 70}}/>
          <Text style={{fontSize: 20, fontWeight: '500', color: '#000000', marginTop: '-6%'}}>Staff Member</Text>
          <Text style={{fontWeight: 'bold', color: '#000000', marginTop: '-5%'}}>04:23 pm</Text>
        </View>
            <Text style={{textAlign: 'center', color: '#000000', fontSize: 14, position: 'absolute', bottom: '12%', right: '36%'}}>text messages...</Text>
        </View>
        </TouchableOpacity>
        <View style={{borderWidth: 0.5, borderStyle: 'dashed', borderColor: '#808b9c', marginVertical: '3%', marginHorizontal: '5%',}}></View>






        <TouchableOpacity onPress={()=>navigation.navigate('ChatBox')}>
        <View style={{position: 'relative',}}>
        <View style={styles.ChatBoxContainer2}>
          <Image source={require('../assets/Avtar.png')} style={{height: 70, width: 70}}/>
          <Text style={{fontSize: 20, fontWeight: '500', color: '#000000', marginTop: '-6%'}}>Staff Member</Text>
          <Text style={{fontWeight: 'bold', color: '#000000', marginTop: '-5%'}}>04:23 pm</Text>
        </View>
            <Text style={{textAlign: 'center', color: '#000000', fontSize: 14, position: 'absolute', bottom: '12%', right: '36%'}}>text messages...</Text>
        </View>
        </TouchableOpacity>
        <View style={{borderWidth: 0.5, borderStyle: 'dashed', borderColor: '#808b9c', marginVertical: '3%', marginHorizontal: '5%',}}></View>


        </View>






        </ScrollView>
      </View>

      <BottomNav navigation={navigation} />

    </>
  );
};

export default Chat;

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

  SearchBar: {
    height: 35,
    backgroundColor: '#fa7452',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: '10%',
    borderRadius: 25,
    marginTop: '4%',
  },

  InputStyle: {
    color: '#ffffff',
    width: '70%',
  },

  ChatBoxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: '6%',
  },


  ChatBoxContainer2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: '6%',
  }
});

import { ScrollView, StyleSheet, Text, View, StatusBar, Image, ImageBackground, TouchableOpacity } from 'react-native';
import React from 'react';

const MiscellInvoice = ({navigation}) => {
  return (
<View style={{flex: 1, backgroundColor: '#ffffff'}}>
<StatusBar backgroundColor="#fa7452" />

  <ScrollView>
      <View style={styles.NavContainer}>
          <Image source={require('../assets/Glads.png')}
            style={{height: 100, width: 100, marginLeft: '8%', marginTop: '1%',}}
          />
      </View>



      <View style={{marginTop: '-30%', marginBottom: '25%'}}>
      <ImageBackground
      source={require('../assets/Invoice3.png')}
      style={{height: '95%', width: '100%', elevation: 9,}}>
      
       <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: '4%'}}>
        <View style={styles.ArrowStyle}></View>
        <View style={{backgroundColor: '#fa7452',paddingHorizontal: 25,paddingVertical: 8, borderRadius: 18}}>
          <Text>Invoice</Text>
        </View>
        <View style={styles.ArrowStyle}></View>
       </View>


      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',marginHorizontal: '12%', marginTop: '3%'}}>
        <Text style={{color: '#000000'}}>dd/mm/yy</Text>
        <Text style={{color: '#000000'}}>time: 04: 15</Text>
      </View>


      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',marginHorizontal: '12%',marginTop: '4%'}}>
        <Text style={{color: '#000000', fontSize: 16}}>Name</Text>
        <Text style={{color: '#000000', fontSize: 16}}>xxx xxx xxx</Text>
      </View>



      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',marginHorizontal: '12%',marginTop: '4%'}}>
        <Text style={{color: '#000000', fontSize: 16}}>Adhar Number</Text>
        <Text style={{color: '#000000', fontSize: 16}}>xxxx xxxx xxxx</Text>
      </View>



      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',marginHorizontal: '12%',marginTop: '4%'}}>
        <Text style={{color: '#000000', fontSize: 16}}>Bill Number</Text>
        <Text style={{color: '#000000', fontSize: 16}}>xxxxxxxxxx</Text>
      </View>


      <View style={{backgroundColor: '#000000', height: 1, marginHorizontal: '10%', marginVertical: '4%'}}></View>



           <View>

           <View style={{marginLeft: '10%'}}>
                 <Text style={{fontSize: 18, fontWeight: '500', color: '#000000', marginLeft: '5%', marginVertical: '2%'}}>Description</Text>
                </View>


               <View style={{marginHorizontal: '10%'}}>
                 <Text style={{color: '#000000', textAlign: 'justify', marginHorizontal: '5%'}}>Simply dummy and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
               </View>

           </View>


    <View style={{backgroundColor: '#000000', height: 1, marginHorizontal: '10%', marginVertical: '4%'}}></View>
      


      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',marginHorizontal: '12%',marginTop: '8%', marginBottom: '5%'}}>
        <Text style={{color: '#000000', fontSize: 16, fontWeight: '500'}}>Total Amount</Text>
        <Text style={{color: '#000000', fontSize: 16}}><Text style={{color: '#2a854b'}}>Rs </Text> 34,400.00</Text>
      </View>

      </ImageBackground>

    </View>

  </ScrollView>

  <TouchableOpacity activeOpacity={0.6} onPress={()=>navigation.navigate('DashBoard')}>
      <View style={{marginHorizontal: '32%', backgroundColor: '#fa7452', borderRadius: 12, justifyContent: 'center', alignItems: 'center', paddingVertical: 9,marginBottom: 5, marginTop: 8}}>
           <Text style={{fontSize: 20, fontWeight: '500', color: '#ffffff'}}>Done</Text>
      </View>
  </TouchableOpacity>

</View>
  )
}

export default MiscellInvoice

const styles = StyleSheet.create({
    NavContainer: {
        height: 300,
        backgroundColor: '#fa7452',
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
    },

    ArrowStyle: {
      backgroundColor: '#000000',
      height: 1,
      width: '26%'
    }
});
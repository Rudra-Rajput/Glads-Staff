import {  } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './Screens/Splash';
import Slider1 from './Screens/Slider1';
import Slider2 from './Screens/Slider2';
import Slider3 from './Screens/Slider3';
import Login from './Screens/Login';
import DashBoard from './Screens/DashBoard';
import Profile from './Screens/Profile';
import Chat from './Screens/Chat';
import Costumer from './Screens/Costumer';
import Store from './Screens/Store';
import Miscellaneous from './Screens/Miscellaneous';
import Expanses from './Screens/Expanses';
import Deposit from './Screens/Deposit';
import CostumerInvoice from './Screens/CostumerInvoice';
import StoreInvoice from './Screens/StoreInvoice';
import MiscellInvoice from './Screens/MiscellInvoice';
import ExpansesInvoice from './Screens/ExpansesInvoice';
import DepositInvoice from './Screens/DepositInvoice';
import ChatBox from './Screens/ChatBox';
import EditProfile from './Screens/EditProfile';



const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Slider1" component={Slider1} />
        <Stack.Screen name="Slider2" component={Slider2} />
        <Stack.Screen name="Slider3" component={Slider3} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="DashBoard" component={DashBoard} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="Costumer" component={Costumer} />
        <Stack.Screen name="Store" component={Store} />
        <Stack.Screen name="Miscellaneous" component={Miscellaneous} />
        <Stack.Screen name="Expanses" component={Expanses} />
        <Stack.Screen name="Deposit" component={Deposit} />
        <Stack.Screen name="CostumerInvoice" component={CostumerInvoice} />
        <Stack.Screen name="StoreInvoice" component={StoreInvoice} />
        <Stack.Screen name="MiscellInvoice" component={MiscellInvoice} />
        <Stack.Screen name="ExpansesInvoice" component={ExpansesInvoice} />
        <Stack.Screen name="DepositInvoice" component={DepositInvoice} />
        <Stack.Screen name="ChatBox" component={ChatBox} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

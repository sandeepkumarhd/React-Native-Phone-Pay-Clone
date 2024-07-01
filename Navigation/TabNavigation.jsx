import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../Screens/Home';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Loan from '../Screens/Loan';
import Insurance from '../Screens/Insurance';
import Wealth from '../Screens/Wealth';
import History from '../Screens/History';


const TabNavigation = () => {

const Tab = createBottomTabNavigator();



  return (
    <NavigationContainer>
    <Tab.Navigator 
    screenOptions={{
        headerShown: false,
        tabBarStyle: {
            backgroundColor: '#4B0082',
            paddingBottom: 10,
            paddingTop: 10, 
            height: 70,
          },
          tabBarActiveTintColor: 'white', // Active tab color
          tabBarInactiveTintColor: 'gray', // Inactive tab color
    }}
    >
    <Tab.Screen
       name="Home" 
       component={Home} 
       options={{
        tabBarIcon:({size, focused, color})=>{
            return <Entypo name="home" color="#fff" size={30} />
        }
       }}
      />
    <Tab.Screen
       name="Loan" 
       component={Loan} 
       options={{
        tabBarIcon:({size, focused, color})=>{
            return <MaterialIcons name="attach-money" color="#fff" size={30} />
        }
       }}
      />
    <Tab.Screen
       name="Insurance" 
       component={Insurance} 
       options={{
        tabBarIcon:({size, focused, color})=>{
            return <Ionicons name="shield-checkmark-outline" color="#fff" size={30} />
        }
       }}
      />
    <Tab.Screen
       name="AntDesign" 
       component={Wealth} 
       options={{
        tabBarIcon:({size, focused, color})=>{
            return <AntDesign name="pay-circle-o1" color="#fff" size={30} />
        }
       }}
      />
    <Tab.Screen
       name="History" 
       component={History} 
       options={{
        tabBarIcon:({size, focused, color})=>{
            return <Fontisto name="arrow-swap" color="#fff" size={20} />
        }
       }}
      />

    </Tab.Navigator>
    </NavigationContainer>
  )
}

export default TabNavigation

const styles = StyleSheet.create({})
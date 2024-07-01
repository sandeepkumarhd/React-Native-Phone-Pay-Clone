import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from './Screens/Home'
import TabNavigation from './Navigation/TabNavigation'

const App = () => {
  return (
    <View style={styles.container}>
        <TabNavigation/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex: 1,
  }
  
})
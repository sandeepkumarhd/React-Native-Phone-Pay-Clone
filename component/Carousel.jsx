import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Swiper from 'react-native-swiper'

const Carousel = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Swiper 
      style={styles.wrapper}
        autoplay
        dotStyle={styles.paginationDot}
        paginationStyle={styles.pagination}
        activeDotStyle = {styles.activeDot}
        ImageComponentStyle={{borderRadius: 10}}
      >
        <View style={styles.slide1}>
          <Image
            source={{uri:'https://gpcdn.ams3.cdn.digitaloceanspaces.com/deals/phonepe-scratch-card-on-electricity-bill-payment.png'}}
            style={styles.img}
          />
        </View>
        <View style={styles.slide1}>
          <Image
            source={{uri:'https://wallpaperaccess.com/full/2927507.jpg'}}
            style={styles.img}
          />
        </View>
        <View style={styles.slide1}>
          <Image
            source={{uri:'https://cdn.tarskitheme.com/com.cashkaro3.png'}}
            style={styles.img}
          />
        </View>
        <View style={styles.slide1}>
          <Image
            source={{uri:'https://th.bing.com/th/id/OIP.NrTVn0wFWw0mqWaXc_fixwHaDV?rs=1&pid=ImgDetMain'}}
            style={styles.img}
          />
        </View>
        <View style={styles.slide1}>
          <Image
            source={{uri:'https://www.epayon.app/wp-content/uploads/2022/06/StarHealthAndAlliedInsuranceCompany.webp'}}
            style={styles.img}
          />
        </View>
      </Swiper>
    </SafeAreaView>
  )
}

export default Carousel


const styles = StyleSheet.create({
  container:{
    marginHorizontal:10,
    height: 130,
    marginTop:10
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },
  img:{
    width:'100%',
    height: 150,
    borderRadius: 8,
  },
  pagination:{
    bottom: '5%'
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
    backgroundColor: 'grey'
  },
  activeDot: {
    width: 10,
    height: 10,
    borderRadius: 6,
    marginHorizontal: 5,
    backgroundColor: '#fff',
  },
})
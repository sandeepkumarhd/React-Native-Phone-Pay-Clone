import {  Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Header from '../component/Header'
import Carousel from '../component/Carousel'
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Fontisto from 'react-native-vector-icons/Fontisto';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* header section */}
      <Header/>

      <ScrollView>
      {/* casousel section */}
      <Carousel/>

      {/* money transfer section */}
      <View style={styles.moneyTransfer_container}> 
          <Text style={{color:'#fff', fontWeight:'bold', fontSize:16}}> Transfer Money </Text>
          <View style={styles.iconTxt_cont}> 
              <View style={styles.icons_stl}>
                <Feather name="user" size={35} color="white" style={styles.only_icon}/>
                <Text style={styles.icon_txt}> To mobile number </Text>
                <Text style={styles.active}> </Text>
              </View>
              <View style={styles.icons_stl}>
                <MaterialCommunityIcons name="bank-outline" size={35} color="white" style={styles.only_icon} />
                <Text style={styles.icon_txt}> To mobile number </Text>
              </View>
              <View style={styles.icons_stl}>
                <AntDesign name="logout" size={35} color="white" style={styles.only_icon}/>
                <Text style={styles.icon_txt}> To mobile number </Text>
              </View>
              <View style={styles.icons_stl}>
                <MaterialCommunityIcons name="bank-outline" size={35} color="white" style={styles.only_icon}/>
                <Text style={styles.icon_txt}> To mobile number </Text>
              </View>
          </View>

        <View style={{flexDirection:'row', marginHorizontal:8}}>
          <View style={styles.upi_lite}>
             <Text> UPI Lite: <Text style={{color:'purple', fontWeight:'bold'}}> Try Now </Text> </Text>
          </View>
          <View style={styles.upi_id}>
            <MaterialIcons name="qr-code-scanner" size={20} color="white" />
            <Text>  UPI ID: 8447078928... </Text>
            <MaterialIcons name="arrow-forward-ios" size={14} color="white" />
          </View>
        </View>
      </View>

    {/* reward section */}
    <View style={styles.reward_section}>
        <View style={styles.rewards}>
          <MaterialCommunityIcons name="wallet-outline" size={25} color="purple"/>
          <View style={{marginLeft:3}}>
          <Text style={{ color:'#fff'}} > PhonePe </Text>
          <Text style={{color:'#fff', fontWeight:'bold',marginTop:-3}}> Wallet </Text>
          </View>
        </View>
        <View style={styles.rewards}>
          <MaterialCommunityIcons name="wallet-giftcard" size={25} color="purple"/>
          <View style={{marginLeft:3}}>
          <Text style={{ color:'#fff'}} > PhonePe </Text>
          <Text style={{color:'#fff', fontWeight:'bold',marginTop:-3}}> Wallet </Text>
          </View>
        </View>
        <View style={styles.rewards}>
          <AntDesign name="notification" size={25} color="purple"/>
          <View style={{marginLeft:3}}>
          <Text style={{ color:'#fff'}} > PhonePe </Text>
          <Text style={{color:'#fff', fontWeight:'bold',marginTop:-3}}> Wallet </Text>
          </View>
        </View>
    </View>

    {/* recharge section */}
    <View style={styles.recharge_section}>
        <View style={styles.pay_sec}>
            <Text style={{fontWeight:'bold', color:'#fff', fontSize:16}}> Recharge & Pay Bills </Text>
            <TouchableOpacity style={styles.view_sec}>
                <Text> View All  <AntDesign name="arrowright" size={16} color="purple"/> </Text>
            </TouchableOpacity>
        </View>
        <View style={styles.iconTxt_cont}> 
              <View style={styles.icons_stl1}>
                <MaterialCommunityIcons name="cellphone-charging" size={35} color="purple"/>
                <Text style={styles.icon_txt}> Mobile Recharge </Text>
              </View>
              <View style={styles.icons_stl1}>
                <FontAwesome6 name="sack-dollar" size={35} color="purple" />
                <Text style={styles.icon_txt}> Loan Repayment </Text>
              </View>
              <View style={styles.icons_stl1}>
                <AntDesign name="creditcard" size={35} color="purple"/>
                <Text style={styles.icon_txt}> Credit Card Payment </Text>
              </View>
              <View style={styles.icons_stl1}>
                <MaterialCommunityIcons name="home-account" size={45} color="purple"/>
                <Text style={styles.icon_txt}> Rent </Text>
              </View>
          </View>
    </View>

    {/* loan section */}
    <View style={styles.recharge_section}>
        <View style={styles.pay_sec}>
            <Text style={{fontWeight:'bold', color:'#fff', fontSize:16}}> Loan </Text>
            <TouchableOpacity style={styles.view_sec}>
                <Text> View All  <AntDesign name="arrowright" size={16} color="purple"/> </Text>
            </TouchableOpacity>
        </View>
        <View style={styles.iconTxt_cont}> 
              <View style={styles.icons_stl1}>
                <SimpleLineIcons name="speedometer" size={40} color="purple"/>
                <Text style={styles.icon_txt}> credit score </Text>
                <Text style={styles.popular}> Popular </Text>
              </View>
              <View style={styles.icons_stl1}>
                <Fontisto name="motorcycle" size={40} color="purple" />
                <Text style={styles.icon_txt}> Bike Loan </Text>
              </View>
              <View style={styles.icons_stl1}>
                <MaterialCommunityIcons name="credit-card-refund-outline" size={40} color="purple"/>
                <Text style={styles.icon_txt}> Mutual Fund Loan </Text>
              </View>
              <View style={styles.icons_stl1}>
                <MaterialCommunityIcons name="gold" size={40} color="purple"/>
                <Text style={styles.icon_txt}> Gold Loan </Text>
              </View>
          </View>
    </View>


    {/* sponsoure section */}
    <View style={styles.recharge_section}>
        <View style={styles.pay_sec}>
            <Text style={{fontWeight:'bold', color:'#fff', fontSize:16}}> Sponsored Links </Text>
            
        </View>
        <View style={styles.iconTxt_cont}> 
              <View style={styles.icons_stl1}>
                <Image 
                  source={{uri:'https://arreh.com/wp-content/uploads/2022/08/OG_MPL.jpg'}}
                  style={styles.mpl_img}
                />
                <Text style={styles.icon_txt}> MPL Cards </Text>
              </View>
              <View style={styles.icons_stl1}>
              <Image 
                  source={{uri:'https://lootearning.com/wp-content/uploads/2022/09/Rummy-Most-App-Logo.webp'}}
                  style={styles.mpl_img}
                />
                <Text style={styles.icon_txt}> RummyCir.. </Text>
              </View>
              <View style={styles.icons_stl1}>
              <Image 
                  source={{uri:'https://th.bing.com/th/id/OIP._UT-QSsU37-YxcLQZ4s2uwAAAA?rs=1&pid=ImgDetMain'}}
                  style={styles.mpl_img}
                />
                <Text style={styles.icon_txt}> Share.Mar.. </Text>
              </View>
              <View style={styles.icons_stl1}>
              <Image 
                  source={{uri:'https://th.bing.com/th/id/OIP.6VsOA26eOUClatHrYxMxQwHaFj?rs=1&pid=ImgDetMain'}}
                  style={styles.mpl_img}
                />
                <Text style={styles.icon_txt}> Bajaj Fins.. </Text>
              </View>
          </View>
    </View>

    {/* insurance section */}
    <View style={styles.recharge_section}>
        <View style={styles.pay_sec}>
            <Text style={{fontWeight:'bold', color:'#fff', fontSize:16}}> Insurance  </Text>
            <TouchableOpacity style={styles.view_sec}>
                <Text> View All  <AntDesign name="arrowright" size={16} color="purple"/> </Text>
            </TouchableOpacity>
        </View>
        <View style={styles.iconTxt_cont}> 
              <View style={styles.icons_stl}>
                <FontAwesome6 name="motorcycle" size={35} color="purple"/>
                <Text style={styles.icon_txt}> Bike </Text>
              </View>
              <View style={styles.icons_stl}>
                <FontAwesome5 name="car-side" size={35} color="purple" />
                <Text style={styles.icon_txt}> Car </Text>
              </View>
              <View style={styles.icons_stl}>
                <MaterialIcons name="health-and-safety" size={35} color="purple"/>
                <Text style={styles.icon_txt}> Health </Text>
              </View>
              <View style={styles.icons_stl}>
                <FontAwesome5 name="star-of-life" size={35} color="purple"/>
                <Text style={styles.icon_txt}> Life </Text>
              </View>
          </View>
    </View>

    {/* tranvel and other services */}
    <View style={styles.recharge_section}>
        <View style={styles.pay_sec}>
            <Text style={{fontWeight:'bold', color:'#fff', fontSize:16}}> Travel & Other Services  </Text>
            <TouchableOpacity style={styles.view_sec}>
                <Text> View All  <AntDesign name="arrowright" size={16} color="purple"/> </Text>
            </TouchableOpacity>
        </View>
        <View style={styles.iconTxt_cont}> 
              <View style={styles.icons_stl}>
                <MaterialIcons name="flight" size={35} color="purple"/>
                <Text style={styles.icon_txt}> Flights </Text>
              </View>
              <View style={styles.icons_stl}>
                <Ionicons name="bus" size={35} color="purple" />
                <Text style={styles.icon_txt}> Bus </Text>
              </View>
              <View style={styles.icons_stl}>
                <FontAwesome6 name="train-subway" size={35} color="purple"/>
                <Text style={styles.icon_txt}> Trains </Text>
              </View>
              <View style={styles.icons_stl}>
                <FontAwesome5 name="hotel" size={35} color="purple"/>
                <Text style={styles.icon_txt}> Hotels </Text>
              </View>
          </View>
    </View>

    {/* carosuel section */}
    <Carousel/>

    {/* purchases */}
    <View style={styles.recharge_section}>
        <View style={styles.pay_sec}>
            <Text style={{fontWeight:'bold', color:'#fff', fontSize:16}}> Purchases  </Text>
            <TouchableOpacity style={styles.view_sec}>
                <Text> View All  <AntDesign name="arrowright" size={16} color="purple"/> </Text>
            </TouchableOpacity>
        </View>
        <View style={styles.iconTxt_cont}> 
              <View style={styles.icons_stl}>
                <MaterialCommunityIcons name="store-24-hour" size={35} color="purple"/>
                <Text style={styles.icon_txt}> Gold </Text>
              </View>
              <View style={styles.icons_stl}>
                <Ionicons name="gift-outline" size={35} color="purple" />
                <Text style={styles.icon_txt}> Brand Vouchers </Text>
              </View>
              <View style={styles.icons_stl}>
                <FontAwesome5 name="donate" size={35} color="purple"/>
                <Text style={styles.icon_txt}> Donations </Text>
              </View>
              <View style={styles.icons_stl}>
                <Image
                  source={{uri:'https://th.bing.com/th?id=OIF.Jn5zaIO6n1JAV1Z1Hnj%2b%2fw&rs=1&pid=ImgDetMain'}}
                  style={styles.mpl_img}
                />
                <Text style={styles.icon_txt}> Hotstar </Text>
              </View>
          </View>
    </View>

    {/* sponsoured games */}
    <View style={styles.recharge_section}>
        <View style={styles.pay_sec}>
            <Text style={{fontWeight:'bold', color:'#fff', fontSize:16}}> Sponsored Games </Text>
            
        </View>
        <View style={styles.iconTxt_cont}> 
              <View style={styles.icons_stl1}>
                <Image 
                  source={{uri:'https://th.bing.com/th/id/OIP.evfzlAFelfzPRxNPwfbuwgAAAA?rs=1&pid=ImgDetMain'}}
                  style={styles.mpl_img}
                />
                <Text style={styles.icon_txt}> Taj Rummy </Text>
              </View>
              <View style={styles.icons_stl1}>
              <Image 
                  source={{uri:'https://th.bing.com/th/id/OIP.YRluugQwVxEVDAYsS5I65wHaHa?w=1024&h=1024&rs=1&pid=ImgDetMain'}}
                  style={styles.mpl_img}
                />
                <Text style={styles.icon_txt}> A23 Rum.. </Text>
              </View>
              <View style={styles.icons_stl1}>
              <Image 
                  source={{uri:'https://i.pinimg.com/736x/b5/73/bf/b573bf35d195570bd27d1b81fb4b9d4a.jpg'}}
                  style={styles.mpl_img}
                />
                <Text style={styles.icon_txt}> WinZo Ludo </Text>
              </View>
              <View style={styles.icons_stl1}>
              <Image 
                  source={{uri:'https://th.bing.com/th/id/OIP.rVHWt3ors9By93Qvv6vb2AAAAA?rs=1&pid=ImgDetMain'}}
                  style={styles.mpl_img}
                />
                <Text style={styles.icon_txt}> PockerCirc.. </Text>
              </View>
          </View>
    </View>

    {/* app by phone pay section */}
    <View style={[styles.recharge_section, styles.bt]}>
        <View style={styles.pay_sec}>
            <Text style={{fontWeight:'bold', color:'#fff', fontSize:16}}> Apps by PhonePe </Text>
            
        </View>
        <View style={styles.iconTxt_cont}> 
              <View style={styles.icons_stl1}>
                <Image 
                  source={{uri:'https://www.jagranimages.com/images/newimg/20012023/20_01_2023-11_11_2022-stock-market_1_23196637_9515027_23302844.webp'}}
                  style={styles.mpl_img}
                />
                <Text style={styles.icon_txt}>shareMarket</Text>
              </View>
              <View style={styles.icons_stl1}>
              <Image 
                  source={{uri:'https://th.bing.com/th/id/OIP.YLSLZT1ptNLZkWZcCxI8XwAAAA?rs=1&pid=ImgDetMain'}}
                  style={styles.mpl_img}
                />
                <Text style={styles.icon_txt}>Business </Text>
              </View>
              <View style={styles.icons_stl1}>
              <Image 
                  source={{uri:'https://th.bing.com/th/id/OIP.1aW0PsuvMBpP2FeVGL5VZwHaE9?w=770&h=515&rs=1&pid=ImgDetMain'}}
                  style={styles.mpl_img}
                />
                <Text style={styles.icon_txt}> Pincode </Text>
              </View>
              <View style={styles.icons_stl1}>
              <Image 
                  source={{uri:'https://www.macworld.com/wp-content/uploads/2021/08/photos-app-icon.png?quality=50&strip=all'}}
                  style={styles.mpl_img}
                />
                <Text style={styles.icon_txt}> Indus App.. </Text>
              </View>
          </View>
    </View>


      </ScrollView>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:'black'
  },  
  moneyTransfer_container:{
    height: 200,
    backgroundColor: '#242323',
    marginHorizontal:10,
    padding: 10,
    borderRadius: 15,
    marginTop:10
  },
  icons_stl:{
    width: 70,
    justifyContent:'center',
    alignItems:'center',
  },
  icon_txt:{
    textAlign:'center',
    color: '#fff'
  },
  iconTxt_cont:{
    flexDirection:'row',
    justifyContent:'space-around',
    marginTop:20,
    marginBottom:20
  },
  active:{
    width: 10,
    height: 10,
    backgroundColor: 'green',
    borderRadius: 30,
    position: 'absolute',
    top:-2,
    right:10
  },
  only_icon:{
    backgroundColor:'purple',
    padding: 8,
    borderRadius: 15
  },
  upi_lite:{
    borderWidth: 1,
    paddingHorizontal: 5,
    paddingVertical:5,
    borderRadius:7
  },
  upi_id:{
    borderWidth: 1,
    marginHorizontal:2,
    paddingHorizontal: 10,
    paddingVertical:5,
    borderRadius:7,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  reward_section:{
    marginTop: 10,
    marginHorizontal:10,
    flexDirection:'row',
    justifyContent:'space-between',
  },
  rewards:{
    flexDirection:'row',
    backgroundColor: '#242323',
    borderRadius:10,
    width: 120,
    padding: 8,
    borderRadius: 10,
    alignItems:'center'
  },
  recharge_section:{
    height: 135,
    backgroundColor:'grey',
    marginHorizontal:10,
    marginTop: 10,
    backgroundColor: '#242323',
    borderRadius:10,
  },
  pay_sec:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginHorizontal:15,
    marginTop:10
  },
  view_sec:{
    backgroundColor:'#383636',
    paddingHorizontal:6,
    paddingVertical:4,
    borderRadius:6
  },
  icons_stl1:{
    width: 80,
    justifyContent:'center',
    alignItems:'center',
  },
  popular:{
    backgroundColor:'orange',
    color:'black',
    borderRadius:10,
    position:'absolute',
    top:0,
    fontSize:12,
    paddingHorizontal: 4
  },
  mpl_img:{
    width: 40,
    height: 40,
    borderRadius:10
  },
  bt:{
    marginBottom:10
  }

})
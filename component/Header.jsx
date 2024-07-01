import { Image, SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native"
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';


const Header=()=>{
    return(
        <SafeAreaView style={styles.nav}>
            <StatusBar
            barStyle="light-content"
            hidden={false}
            backgroundColor="transparent"
            translucent={true}
        />
            <View style={styles.nav_container}>
                <View style={styles.left_nav}>
                   <View>
                    <Image 
                            source={require('../assets/Screenshot_2024_0523_163845.jpg')}
                            style={styles.profile_img}
                        />
                        <Image
                            source={{uri:'https://th.bing.com/th/id/R.875352cf8147b361d01c6a36c757a61c?rik=Cw%2fNfEQRTKbMfA&riu=http%3a%2f%2fwww.hdwallpaperslife.com%2fwp-content%2fuploads%2f2018%2f05%2fnational_flag_of_india_4k_5k.jpg&ehk=LHN0JbKLhTS%2fJDZoeubF97Yvek9Gi9hKTGqu1It%2fE6o%3d&risl=&pid=ImgRaw&r=0'}}
                            style={styles.flag_img}
                        />
                   </View>
                    <View style={styles.nav_left_text}>
                        <Text style={{color:'#fff', fontWeight:'800', fontSize:17}}> Home <Text> <AntDesign name="caretdown" size={12} color="white" /> </Text> </Text>
                        <Text> Rohini sec-23, Budh vihar... </Text>
                    </View>
                </View>
                <View style={styles.right_nav}>
                        <MaterialIcons name="qr-code-scanner" size={28} color="white" />
                        <View>
                            <Fontisto name="bell" size={22} color="white" />
                            <View style={styles.notificiations}>
                                <Text style={{color:'black', fontSize:11}}> 2 </Text>
                            </View>
                        </View>
                        <Feather name="help-circle" size={23} color="white" />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Header;

const styles = StyleSheet.create({
    nav: {
        backgroundColor: '#4B0082',
    },
    nav_container:{
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',
        height: 100,
        paddingTop:30,
        marginHorizontal:18
      },
      left_nav:{
        flexDirection:'row',
        alignItems:'center',
      },
      profile_img:{
        width: 50,
        height: 50,
        borderRadius:50
      },
      flag_img:{
        width: 20,
        height: 20,
        position:'absolute',
        right:-5,
        bottom: 0,
        borderRadius: 6,
        borderWidth: 2,
        borderColor: '#fff'
      },
      nav_left_text:{
        marginHorizontal: 15
      },
      right_nav:{
        flexDirection:'row',
        gap:20
      },
      notificiations:{
        backgroundColor:'#4AAC30',
        width: 22,
        height:22,
        borderRadius: 50,
        position:'absolute',
        right:-13,
        top:-14,
        justifyContent:'center',
        alignItems:'center',
        color:'black'
      }
})
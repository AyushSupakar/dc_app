import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Colors from "./../../Utils/Colors";

const Login = () => {
  return (
    <View style={{alignItems:'center'}}>
        <Image source={require('./../../../assets/images/loginImage.jpg')} 
            style={styles.loginImage} />
        
        <View style={styles.subContainer}> 
              <Text style={{color:Colors.WHITE, fontSize:27, textAlign:'center'}}> 
                Let's Find
                <Text style={{fontWeight:'bold'}} > Professional Construction and Repair </Text> Services
              </Text>
              <Text style={{fontSize:17, color:Colors.WHITE, textAlign:'center', marginTop:20 }}> Best App to get Services near you</Text>
              <View style={{ backgroundColor: 'red', padding: 10 }}>
            <Pressable style={styles.button} onPress={() => console.log("Button Pressed")} >
              <Text style={{textAlign:'center', fontSize:17, color:Colors.PRIMARY}}> Let's Get Started </Text>
            </Pressable></View>
        
        </View>
    
    </View>

  )
}

export default Login

const styles = StyleSheet.create({
    loginImage:{
        width:200,
        height:400,
        marginTop:30,
        borderWidth:4,
        borderColor:Colors.BLACK,
        borderRadius:50,
    },
    subContainer:{
       width:'100%',
       padding:20,
       height:'75%',
       marginTop:-25,
       backgroundColor:Colors.PRIMARY,
       borderTopLeftRadius:30,
       borderTopRightRadius:30,
    },
    button:{
        backgroundColor:Colors.WHITE,
        padding:15,
        borderRadius:99,
        marginTop:40,
        alignSelf:'center',
        alignItems:'center',
    }

})
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useUser } from '@clerk/clerk-expo';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { TextInput } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import Colors from '../../Utils/Colors';
import Entypo from '@expo/vector-icons/Entypo';
import SignOutButton from '@/app/components/SignOutButton';
import { useNavigation } from '@react-navigation/native';

const Header = ({showsearch}) => {
    const {user, isLoading} = useUser();
    const [searchstr, setSearchstr] = useState("");  
        const navigation= useNavigation();

  return user&&(
    <View style={styles.container}>
        {/* Profile Section */}
        <View style={styles.ProfileMainContainerx}>
            <View style={styles.profileContainer}>    
                <Image source={{uri:user.imageUrl}}
                        style={styles.userImage}/>
                <View>
                    <Text style={{color:Colors.WHITE, fontFamily:'outfit'}} >Welcome,</Text>
                    <Text style={{color:Colors.WHITE, fontSize:20, fontFamily:'outfit-medium'}}>{((user?.fullName).split(" ")[0])+" "+(((((user?.fullName).split(" ")).length)>1)?((user?.fullName).split(" ")[1]):(""))}</Text>
                </View>
        </View>
            <SignOutButton />
 
       
    </View>
        {/* Search Bar Section */}
        {showsearch && (<View style={styles.searchBarContainer} >
            <TextInput placeholder='search'
            value={searchstr}
            onChangeText={(text)=>setSearchstr(text)}
            style={styles.textInput}
            />
            <TouchableOpacity
                onPress={()=>navigation.push('servicesbysearcch',{
                    searchstr:searchstr
                 })}
            >
            <Feather
                style={styles.searchBtn}
            name="search" size={16} color={Colors.PRIMARY} />
            </TouchableOpacity>
        </View>)}
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container:{
        padding:15,
        paddingTop:15,
        backgroundColor:Colors.PRIMARY,
        borderBottomLeftRadius:25,
        borderBottomRightRadius:25,
        justifyContent:'center'
    },
    searchBarContainer:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginTop:20,
        gap:10,
        marginBottom:20
    },
    textInput:{
        backgroundColor:Colors.WHITE,
        padding:7,
        paddingHorizontal:16,
        borderRadius:8,
        width:'85%',
        fontSize:16,
        fontFamily:'outfit',

    },
    searchBtn:{
         backgroundColor:Colors.WHITE,
         padding:10,
         borderRadius:10,
    },
    ProfileMainContainerx: {
        display:'flex',
        marginTop:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
    profileContainer:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        gap:10,
    },
    userImage:{
        width:50,
        height:50,
        borderRadius:50
    }
})
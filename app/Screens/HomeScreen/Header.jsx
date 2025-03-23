import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { TextInput } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import Colors from '../../Utils/Colors';


const Header = () => {
    const {user, isLoading} = useUser();
  return user&&(
    <View style={styles.container}>
        {/* Profile Section */}
        <View style={styles.ProfileMainContainer}>
        <View style={styles.profileConstainer}>    
        <Image source={{uri:user.imageUrl}}
        style={styles.userImage}/>
        <View>
            <Text style={{color:Colors.WHITE, fontFamily:'outfit'}} >Welcome,</Text>
            <Text style={{color:Colors.WHITE, fontSize:20, fontFamily:'outfit-medium'}}>{user?.fullName}</Text>
        </View>
        </View>
        <FontAwesome5 name="calendar-check" size={27} color="white" />
    </View>
        {/* Search Bar Section */}
        <View style={styles.searchBarContainer} >
            <TextInput placeholder='search'
            style={styles.textInput}
            />
            <Feather
                style={styles.searchBtn}
            name="search" size={16} color={Colors.PRIMARY} />
        </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container:{
        padding:20,
        paddingTop:40,
        backgroundColor:Colors.PRIMARY,
        borderBottomLeftRadius:25,
        borderBottomRightRadius:25,
    },
    searchBarContainer:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginTop:15,
        gap:10,
        marginBottom:10
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
    ProfileMainContainer:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    profileConstainer:{
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
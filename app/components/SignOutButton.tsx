import { useClerk } from '@clerk/clerk-expo'
import * as Linking from 'expo-linking'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import Colors from '../Utils/Colors'
import Entypo from '@expo/vector-icons/Entypo';

export const SignOutButton = () => {
  // Use `useClerk()` to access the `signOut()` function
  const { signOut } = useClerk()

  const handleSignOut = async () => {
    try {
      await signOut()
      // Redirect to your desired page
      Linking.openURL(Linking.createURL('/'))
    } catch (err) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      console.error(JSON.stringify(err, null, 2))
    }
  }

  return (

       <TouchableOpacity style={styles.button} onPress={handleSignOut} >
          <Text style={{textAlign:'center', fontSize:12, color:Colors.PRIMARY, fontFamily:'outfit', fontWeight:'bold' }}> SignOut </Text>
          <Entypo name="log-out" size={14} color={Colors.PRIMARY} />
        </TouchableOpacity>
  )
}

export default SignOutButton


const styles = StyleSheet.create({
    button:{
        backgroundColor:Colors.WHITE,
        padding:10,
        borderRadius:99,
        alignSelf:'center',
        alignItems:'center',
        flexDirection:'row',
        gap:3,
    }

})
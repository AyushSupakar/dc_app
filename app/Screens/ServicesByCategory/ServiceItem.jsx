import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Colors from '@/app/Utils/Colors'
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const ServiceItem = ({ service }) => {
   const navigation= useNavigation();
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: service?.images[0]?.url }}
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <Text 
          style={styles.serviceName} 
          numberOfLines={service.name.length > 20 ? 2 : 1} // Wrap only for long names
          ellipsizeMode="tail"
        >
          {service.name}
        </Text>
        <View
          style={{
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between'
          }}
        >

          <TouchableOpacity
            style={{
              display:'flex',
              flexDirection:'row',
              gap:5,
               
              alignItems:'center',
              justifyContent:'center',
              paddingHorizontal:10,
              padding:5,
              backgroundColor:Colors.PRIMARY,
              borderRadius:5,
            }}
            onPress={()=>navigation.push('service_details',{
              service:service
           })}
          >
            <Ionicons name="enter-outline" size={20} color="white" />
            <Text
                style={{
                  color:'white'
                }}
            > Open</Text>
            
          </TouchableOpacity>

          <TouchableOpacity
             style={{
              display:'flex',
              flexDirection:'row',
               
              alignItems:'center',
              justifyContent:'center',
              gap:5,
              padding:5,
              paddingHorizontal:10,
              backgroundColor:Colors.GREEN,
              borderRadius:5
            }}

            onPress={()=>navigation.push('booking_form',{
              service:service
           })}
          >
            <FontAwesome name="calendar-check-o" size={18} color="white" />
        
             <Text
               style={{
                color:'white'
              }}
             > Book</Text>
            
          </TouchableOpacity>


        </View>
      </View>
    </View>
  )
}

export default ServiceItem

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: Colors.WHITE,
    borderRadius: 15,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 15,
  },
  textContainer: {
    flex:1,
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-between',
    gap:10,
    paddingHorizontal:10,
  },
  serviceName: {
    fontSize: 15,
    fontFamily: 'outfit-bold',
    paddingVertical:3,
  },
})

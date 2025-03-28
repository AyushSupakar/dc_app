import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import Feather from '@expo/vector-icons/Feather';
import GlobalApi from '@/app/Utils/GlobalApi';
import ServiceItem from "./ServiceItem";

const ServicesBySearch = () => {
  const param=useRoute().params;
  const[services, setServices] = useState([]);

  useEffect(()=>{
    
    param && getServicesBySearchi();
  },[])
  const navigation = useNavigation();
  const getServicesBySearchi = ()=>{
    GlobalApi.getServicesBySearch(param.searchstr).then(resp=>{
      // console.log(resp.services);
      setServices(resp.services);
      
    })
  }
  return (
    <View style={{
      padding:20,
      paddingTop:40,
    }}>

      <TouchableOpacity 
        onPress={()=>navigation.goBack()}
      style={{
        display:'flex',
        flexDirection:'row',
        gap:10,
        alignItems:'center'
      }}>

      <Feather name="arrow-left" size={24} color="black" />
      <Text style={{
        fontSize:25,
        fontFamily:'outfit-medium'
      }}>Search Results for: {param.searchstr}</Text>
      </TouchableOpacity>

      <FlatList
        data={services}
        renderItem={({item})=>(
          <ServiceItem service={item}/>
        )}
      />

    </View>
  )
}

export default ServicesBySearch

const styles = StyleSheet.create({})
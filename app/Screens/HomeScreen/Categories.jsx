import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from './../../Utils/GlobalApi'
import Heading from '@/app/components/Heading';
import Colors from '@/app/Utils/Colors';

const Categories = () => {
  
    const [categories, setCategories]= useState([]);
    useEffect(()=>{
        getCategories()
    },[])
    const getCategories=()=>{
        GlobalApi.getCategories().then(resp=>{
            console.log("resp2=",resp)
            setCategories(resp?.categories)
        })
    }
    return (
    <View style={{marginTop:20}}>
      <Heading text={'Categories'} isViewAll={true}/>

      <FlatList
        data={categories}
        renderItem={({item,index})=>(
            <View>
                 <View style={styles.iconContainer}>
                    <Image
                        source={{uri:item?.icon?.url}}
                        style={{width:30, height:30}}
                    />
                 </View>
            </View>
        )}
      />

    </View>
  )
}

export default Categories

const styles = StyleSheet.create({
    iconContainer:{
        backgroundColor:Colors.LIGHT_GRAY,
    }
})
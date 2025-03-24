import { FlatList, Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import GlobalApi from './../../Utils/GlobalApi';
import Heading from '@/app/components/Heading';
import Colors from '@/app/Utils/Colors';

const Categories = () => {
    const [flhor, setFlhor] = useState(true);
    const [numcol, setNumcol] = useState(1);
    const [key, setKey] = useState("flatlist-horizontal");
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories();
    }, []);

    const getCategories = () => {
        GlobalApi.getCategories().then(resp => {
            setCategories(resp?.categories);
        });
    };

    const switchView = () => {
        const isHorizontal = !flhor;
        setFlhor(isHorizontal);
        setNumcol(isHorizontal ? 1 : 4);
        setKey(`flatlist-${isHorizontal ? "horizontal" : "grid"}`); // Change key to force re-render
    };

    return (
        <View style={{displaye:'flex', marginTop: 20, justifyContent:'center' }}>
            <View style={styles.container}>
                <Text style={styles.heading}>Categories</Text>
                <TouchableOpacity onPress={switchView}>
                    <Text style={{ fontFamily: 'outfit' }}>
                        {flhor ? "View All" : "View Less"}
                    </Text>
                </TouchableOpacity>
            </View>

            <FlatList
                key={key} // Changing key forces re-render
                data={categories}
                horizontal={flhor}
                numColumns={numcol}
                style={{alignSelf:'center'}}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => (
                    <View style={styles.containerCat}>
                        <View style={styles.iconContainer}>
                            <Image
                                source={{ uri: item?.icon?.url }}
                                style={{ width: 40, height: 40 }}
                            />
                        </View>
                        <Text style={{ fontFamily: 'outfit', fontSize: 10, textAlign: 'center', fontWeight: 'bold' }}>
                            {(item.name).split(' ').map((word) => (`${word}\n`))}
                        </Text>
                    </View>
                )}
            />
        </View>
    );
};

export default Categories;

const styles = StyleSheet.create({
    iconContainer: {
        backgroundColor: Colors.LIGHT_GRAY,
        padding: 15,
        borderRadius: 99,
        margin: 6,
        justifyContent: 'center',
        textAlign: 'center'
    },
    containerCat: {},
    heading: {
        fontSize: 20,
        fontFamily: 'outfit-medium',
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10
    }
});

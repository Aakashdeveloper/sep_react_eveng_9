import React, { useEffect,useState } from 'react';
import { StyleSheet, Text, View,ScrollView,Image } from 'react-native';
import json from './db.json';

function ProductList(){
    const [data] = useState(json)
    return(
        <ScrollView style={styles.listContainer}>
            <Text>List Of Items</Text>
            <View>
                {data.map((item) =>{
                    return(
                        <View key={item.id}>
                            <Image style={styles.placeImage}
                            source={{uri:item.image}}/>
                            <Text style={styles.textval}>{item.name}</Text>
                        </View>
                    )
                } )}
            </View>
        </ScrollView>
        
    )
}

const styles = StyleSheet.create({
    listContainer:{
        width:"80%"
    },
    placeImage:{
        height:200
    },
    textval:{
        fontSize:30
    }
})

export default ProductList;
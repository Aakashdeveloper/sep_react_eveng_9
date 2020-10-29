import React,{useState} from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import ProductList from './component/productList';

export default function App() {
  const [mytext,setText] = useState("My Mobile App")

  return (
    <View style={styles.container}>
      <Text>React Natives</Text>
      <Text>{mytext}</Text>
      <Button title="clickme" onPress={() =>(setText('Button Clicked'))}/>
      <Button title="Revert" onPress={() =>(setText('My Mobile App'))}/>
      <ProductList/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


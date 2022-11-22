import React from 'react';

import {View, Text, StyleSheet, FlatList, TextInput} from 'react-native';

import ProductsCard from './components/ProductsCard';

import product_data from './product_data.json';

const App = () => {
  const renderProduct = ({item}) => <ProductsCard prodcut={item} />;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>PATIKASTORE</Text>
      <FlatList
        ListHeaderComponent={() => (
          <TextInput style={styles.search} placeholder="Ara.."></TextInput>
        )}
        keyExtractor={item => item.id.toString()}
        data={product_data}
        renderItem={renderProduct}></FlatList>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'grey',
    flex: 1,
  },
  search: {
    backgroundColor: 'white',
    borderRadius: 10,
  },
  text: {
    fontSize: 30,
    color: 'purple',
  },
});

import react from 'react';

import {View, Image, Text, Button} from 'react-native';

import styles from './ProductCard.style';

const ProductsCard = ({prodcut}) => {
  console.log(prodcut.imgURL);
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: prodcut.imgURL}}></Image>

      <View style={styles.containerText}>
        <Text style={styles.name}> {prodcut.title}</Text>
        <Text style={styles.price}>{prodcut.price}</Text>
        <Text style={styles.stock}>{prodcut.inStock}</Text>
      </View>
    </View>
  );
};

export default ProductsCard;

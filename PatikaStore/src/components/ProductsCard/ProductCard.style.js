import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    margin: 3,
  },

  image: {
    height: Dimensions.get('window').height / 4,
    width: Dimensions.get('window').width / 2,
  },
  containerText: {
    padding: 5,
  },
});

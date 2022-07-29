import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

export default class Recommend extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.rheading}>Recommended For You</Text>
          <Text style={styles.rsubheading}>Engage With Top People In Hair Industry</Text> 
        </View>
        <ScrollView
        style={{width:'100%'}}
        horizontal={true}>
        <Image style={styles.images} source={require('../../assets/recommended2.png')} />
        <Image style={styles.images} source={require('../../assets/recommended1.png')} />
        <Image style={styles.images} source={require('../../assets/recommended3.png')} />
        <Image style={styles.images} source={require('../../assets/recommended4.png')} />
        </ScrollView>
       </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display : 'flex',
    padding: 16,
  },

  images: {
    marginHorizontal: '-1%',
  },

  rheading: {
    fontSize: 16,
    fontWeight: 500,
  },

  rsubheading: {
    fontSize: 10,
    marginVertical: 9,
    fontWeight: 300,
  },

  }
)

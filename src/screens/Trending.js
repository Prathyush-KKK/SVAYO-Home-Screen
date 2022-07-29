import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

export default class Trend extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <View style={styles.textContainer}>
      <Text style={styles.theading}>Trending Hairstyles Wating For You</Text>
       <Text style={styles.tsubheading}>Find! Choose! Styled!</Text>
      </View>
        <View style = {styles.layout}>
        <Image style={styles.images} source={require('../../assets/trending1.png')} />
        <Image style={styles.images} source={require('../../assets/trending2.png')} />
        </View>
        <View style = {styles.layout2}>
        <Image style={{top: '-20%'}} source={require('../../assets/trending3.png')} />
        <View style={styles.text}>
        <Text style={styles.cardText}>EXPLORE {'\n'}MORE</Text>
        <Text style={styles.cardSubText}>HERE.....</Text>
       </View>
       </View>
       </View>
          );
  }
}

const styles=StyleSheet.create({
  container: {
    display: 'flex',
  },

  layout: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: '2.5%'
  },

  layout2: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: '-12%',
  },

  textContainer: {
    paddingHorizontal: 16,
  },

    theading: {
    fontSize: 16,
    fontWeight: 500,
  },

  tsubheading: {
    fontSize: 10,
    marginVertical: 9,
    fontWeight: 300,
  },

  images: {
    margin: '-3%',
    paddingRight: '16%',
  },

  text: {
    paddingVertical: 40,

  },

  cardText: {
    fontSize: 24,
    fontWeight: 100,
  },

  cardSubText: {
    paddingTop: '10%',
    color: '#ED145B',
  },


})
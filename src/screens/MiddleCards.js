import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

export default class Middle extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.msubheading}>Confused With</Text>
          <Text style={styles.mheading}>Hairstyle</Text>
          <Text style={styles.msubheading}>Stop For A While</Text> 
        </View>
      <ScrollView 
        style={styles.imageContainer}
        horizontal= {true}>
     <Image
  style={styles.cardStyle}
  source={require('../../assets/mid3.png')}
  resizeMode="contain"
/>
     <Image
  style={styles.cardStyle}
  source={require('../../assets/mid2.png')}
  resizeMode="contain"
/>
     <Image
  style={{flex:1}, styles.cardStyle}
  source={require('../../assets/mid1.png')}
  resizeMode="contain"
/>
      </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },

  cardStyle: {
    maxWidth: 310,
    maxHeight: 290,
    marginRight: -50,
  },


  textContainer: {
    display: 'flex',
    alignItems: 'center',
  },

  mheading: {
    fontSize: 36,
    fontWeight: 500,
    color: '#00000080',
    padding: 4,
  },

  msubheading: {
    fontSize: 10,
    fontWeight: 300,
  },
});

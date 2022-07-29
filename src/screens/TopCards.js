import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity, Dimensions} from 'react-native';

const { width } = Dimensions.get('window');

export default class TopCards extends React.Component {
  render() {
    return (
      <ScrollView 
        ref={(scrollView) => { this.scrollView = scrollView; }}
        style={styles.container}
        horizontal= {true}
        decelerationRate={3}>
     <Image
  style={{flex:1}, styles.TopCardStyle}
  source={require('../../assets/Discount.png')}
  resizeMode="contain"
/>
     <Image
  style={{flex:1}, styles.TopCardStyle}
  source={require('../../assets/Waiting.png')}
  resizeMode="contain"
/>
     <Image
  style={{flex:1}, styles.TopCardStyle}
  source={require('../../assets/Win.png')}
  resizeMode="contain"
/>
     <Image
  style={{flex:1}, styles.TopCardStyle}
  source={require('../../assets/Try.png')}
  resizeMode="contain"
/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
  TopCardStyle: {
    marginHorizontal: 6,
    paddingHorizontal : 33
  },
});
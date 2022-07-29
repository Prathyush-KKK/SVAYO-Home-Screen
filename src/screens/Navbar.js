import * as React from 'react';
import {View, StyleSheet, Image} from 'react-native';

export default class Navbar extends React.Component {
  render(){
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo1}
        source={require('../../assets/navbar-logo1.png')}
      />
      <Image
        style={styles.logo1}
        source={require('../../assets/navbar-logo2.png')}
      />
    </View>
  );
}}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 16,
    height: 72
  },

  logo1: {
    height: 50,
  },
});

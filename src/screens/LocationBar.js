import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default class LocationBar extends React.Component {
  render(){
  return(
    <View style={styles.wrapper}>
    <TouchableOpacity 
      style={styles.locationButton}
      >
    <Image source={require('../../assets/location.png')} />
    <Text style={styles.locationText}> Tap Here To Add Location </Text>
    </TouchableOpacity>
    </View>
  );
}}
  
  const styles=StyleSheet.create({
    wrapper: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '8%',
    },

    locationButton: {
      display : 'flex',
      flexDirection: 'row',
      padding: 10,
      backgroundColor: 'white',
      borderRadius: 10,
      width: '90%',
      marginTop: '4%',
      alignItems: 'center',
    },
    locationText: {
      fontSize: 12,
      paddingLeft: 5,
    }
  })
  

import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity, Dimensions} from 'react-native';
import { Font } from 'expo';


import Navbar from './src/screens/Navbar.js';
import LocationBar from './src/screens/LocationBar';
import TopCards from './src/screens/TopCards';
import Offer from './src/screens/TopButtons';
import UpperMiddle from './src/screens/UpperMiddleCards';
import MiddleCards from './src/screens/MiddleCards'
import Reccomend from './src/screens/Recommended'
import Trend from './src/screens/Trending'
import Customer from './src/screens/Customer'
import Footer from './src/screens/Footer'

export default class App extends React.Component {
  render(){
  return (
    <ScrollView style={styles.HomePage}>
    <Navbar />
    <LocationBar />
    <TopCards />
    <Offer />
    <UpperMiddle />
    <MiddleCards />
    <Reccomend />
    <Trend />
    <Customer />
    <Footer />
    </ScrollView>
  );
}}

const styles = StyleSheet.create({
  HomePage: {
    height: '100%',
    backgroundColor: '#FFE7EE',
  }


})


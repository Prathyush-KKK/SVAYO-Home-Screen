import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

export default class Customer extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.cheading}>Want To Know How Riya Trasnformed? </Text>
          <Text style={styles.csubheading}>
            Get Your Dream Hairstyle With One ClickRecommended For You
          </Text>
        </View>
        <View style={styles.imageStyle}>
        <Image source={require('../../assets/Customer.png')} />
      </View>
    </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    padding: 16,
  },

  cheading: {
    fontSize: 16,
    fontWeight: 500,
  },

  csubheading: {
    fontSize: 10,
    marginVertical: 9,
    fontWeight: 300,
  },

  imageStyle: {
    display: 'flex',
    alignItems: 'center',
    paddingVertical: 20,
    marginLeft: 20,
  },
});

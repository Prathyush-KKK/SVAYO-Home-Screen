import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

export default class TopButton extends React.Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.container}>
          <Image
            style={styles.cardStyle}
            source={require('../../assets/offers.png')}
          />
          <Text style={styles.buttonText}> Offers </Text>
        </View>
        <View style={styles.container}>
          <Image
            style={styles.cardStyle}
            source={require('../../assets/hairstyles.png')}
          />
          <Text style={styles.buttonText}> Hairstyles </Text>
        </View>
        <View style={styles.container}>
          <Image
            style={styles.cardStyle}
            source={require('../../assets/services.png')}
          />
          <Text style={styles.buttonText}> Salon Services </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    textAlign: 'center',
    paddingHorizontal: 15,
  },

  wrapper: {
    display: 'flex',
    marginVertical: 25,
    flexDirection: 'row',
    justifyContent: 'center',
  },

  buttonText: {
    textAlign: 'center',
    fontSize: 10,
    color: '#080110',
  },
});

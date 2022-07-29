import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

export default class Footer extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.csubheading}>
            Not A Brainer Right? Then Try Our {'\n'}AI Powered Style Try-Ons 
          </Text>
        <Image source={require('../../assets/Footer.png')} />
        </View>

    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    padding: 16,
    alignItems: 'center',
    textAlign: 'center'
  },

  csubheading: {
    fontSize: 10,
    fontWeight: '100',
    paddingBottom: 20,
    color: '#00000080'
  },
});

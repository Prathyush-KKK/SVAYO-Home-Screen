import * as React from 'react';
import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Text} from './Text'


export default class UpperMiddle extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <View style = {styles.text}>
        <Text style={styles.umheading}>Welcome To Svayo!!</Text>
        <Text style={styles.umsubheading}>
          Check Out Our Just For Fun Section
        </Text>
      </View>
      <TouchableOpacity stye={styles.imageContainer}>
        <ScrollView style={styles.imageContainer} horizontal={true}>
          <View style={styles.cardContainer}>
            <Image
              source={require('../../assets/Middle1.png')}
              resizeMode="contain"
            />
          </View>
          <View style={styles.cardContainer}>
            <Image style={{marginBottom: 10}}
              source={require('../../assets/Middle2.png')}
              resizeMode="contain"
            />
            <Image
              source={require('../../assets/Middle3.png')}
              resizeMode="contain"
            />
          </View>
          <View style={styles.cardContainer, {marginTop: '-1.3%'}}>
            <Image style={styles.column3} 
              source={require('../../assets/Middle8.png')}
              resizeMode="contain"
            />
            <Image
              source={require('../../assets/Middle4.png')}
              resizeMode="contain"
            />
          </View>
          <View style={styles.cardContainer, {marginHorizontal: '-4%'}}>
            <View style={styles.lastCard}>
              <Image
                source={require('../../assets/Middle5.png')}
                resizeMode="contain"
              />
              <Image
                source={require('../../assets/Middle6.png')}
                resizeMode="contain"
              />
            </View>
            <Image
              source={require('../../assets/Middle7.png')}
              resizeMode="contain"
            />
          </View>
        </ScrollView>
       </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },

  imageContainer: {
    paddingLeft: 6,
  },

  cardContainer: {
    display: 'flex',
    flexDirection: 'column',
    paddingRight: '1%',
  },

column3: {
  marginLeft: '-8%'
},

  lastCard: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },

  umheading: {
    fontSize: 16,
    fontWeight: 500,
  },

  umsubheading: {
    fontSize: 10,
    marginVertical: 9,
    fontWeight: 300,
  },
  text: {
    padding: 16,
  }
});

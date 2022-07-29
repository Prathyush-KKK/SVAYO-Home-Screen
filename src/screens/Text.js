import React from "react";
import {
  Text as RNText
} from "react-native";
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

const Font = ()=>{
  let [fontsLoaded] = useFonts({
    'Inter': require('../../assets/Inter-Regular.otf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }}

const styles = {
  text: {
    fontStyle: 'Inter',
  }
}

export var Text = (props) => <RNText style={[styles.text, props.style]}>{props.children}</RNText>


import * as React from 'react';
import { WebView } from 'react-native-webview';
import {StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const MyWebView = () => {
  return (
      <WebView
        source={{ uri: 'https://www.nuseum-market.com' }}
        style={styles.webview}
        scrollEnabled={true}
      />
  );
};

const styles = StyleSheet.create({  
  webview: {
    flex: 1,
    width: windowWidth,
    height: windowHeight,

  },
});

export default MyWebView;

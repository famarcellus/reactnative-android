import React from 'react';
import {ScrollView, View, StyleSheet, StatusBar} from 'react-native';
import {Login} from './src/pages/Login/Login';
import commonStyle from './src/style/common.style';

const App = () => {
  return (
    <ScrollView
      style={[styles.appContainer, styles.statusHeightMargin]}
      contentContainerStyle={commonStyle.alignItemsCenter}>
      <View
        style={[
          commonStyle.elementWidth,
          commonStyle.flex,
          commonStyle.alignItemsCenter,
          styles.screenContainer,
        ]}>
        <Login />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    paddingHorizontal: 20,
    display: 'flex',
    backgroundColor: '#f7f7f7',
    paddingBottom: 100,
  },
  statusHeightMargin: {
    paddingTop: StatusBar.currentHeight ? StatusBar.currentHeight + 65 : 65,
  },
  screenContainer: {
    paddingBottom: 150,
  },
});

export default App;

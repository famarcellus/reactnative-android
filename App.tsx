import React from 'react';
import {ScrollView, View, Text, StyleSheet, StatusBar} from 'react-native';
// import {Login} from './src/pages/Login/Login';
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
        ]}
        // contentContainerStyle={{alignItems: 'center'}}>
      >
        {/* <Login /> */}
        <Text>Hello there</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    paddingHorizontal: 100,
    display: 'flex',
    backgroundColor: '#f7f7f7',
  },
  statusHeightMargin: {
    paddingTop: StatusBar.currentHeight ? StatusBar.currentHeight + 65 : 65,
  },
});

export default App;

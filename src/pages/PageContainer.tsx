import React from 'react';
import {ScrollView, View, StyleSheet, StatusBar} from 'react-native';

import commonStyle from '../style/common.style';

type PageContainerProps = {
  children: React.ReactNode;
};

const PageContainer = (props: PageContainerProps) => {
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
        {props.children}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    paddingHorizontal: 20,
    display: 'flex',
    // backgroundColor: '#f7f7f7',
    paddingBottom: 100,
    alignItems: 'center',
  },
  statusHeightMargin: {
    paddingTop: StatusBar.currentHeight ? StatusBar.currentHeight + 25 : 35,
  },
  screenContainer: {
    paddingBottom: 150,
  },
});

export default PageContainer;

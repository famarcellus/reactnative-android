import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {MessageDetailsProps} from '../../types/navigation';
import PageContainer from '../PageContainer';
import commonStyle from '../../style/common.style';

export const MessageDetails = ({route, navigation}: MessageDetailsProps) => {
  const {contactId, contactName} = route.params;
  return (
    <PageContainer>
      <Text>contactId - {contactId}</Text>
      <Text style={commonStyle.h1Text}>{contactName}</Text>
      <View>
        <Text>contactImgHere</Text>
        <Text style={styles.explanation}>
          On mount, use contactId to fetch the contact's name, profile image,
          your shared message history.
        </Text>
      </View>
    </PageContainer>
  );
};

const styles = StyleSheet.create({
  explanation: {
    marginTop: 30,
  },
});

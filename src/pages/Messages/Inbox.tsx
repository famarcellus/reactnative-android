import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';

import {InboxProps} from '../../types/navigation';
import PageContainer from '../PageContainer';
import {SecondaryButton} from '../../components/AppButton/SecondaryButton';
import commonStyle from '../../style/common.style';
import {messagePreviews} from '../../data/messagesData';

type InboxScreenNavigationProp = InboxProps['navigation'];

function goToMessageDetails(
  contactId: number,
  navigation: InboxScreenNavigationProp,
) {
  navigation.navigate('MessageDetails', {
    contactId: contactId,
  });
}

export const Inbox = ({route, navigation}: InboxProps) => {
  return (
    <PageContainer>
      <Text style={commonStyle.h1Text}>Inbox</Text>
      <Text style={styles.explanation}>
        On mount by using useEffect, populate with previews of messages sent
        from other users. This is done by using the user's id to retreieve the
        data from an api. Messages are listed in order of latest received first.
      </Text>
      <Text>Below this line, there are the lists of posts.</Text>
      {messagePreviews.map(preview => {
        const {contactId, name, profileImgUrl, latestMessagePreview, dateSent} =
          preview;

        return (
          <View>
            <View style={styles.previewContainer}>
              <Image source={{uri: profileImgUrl, width: 50, height: 50}} />
              <SecondaryButton
                key={contactId}
                onPress={() => goToMessageDetails(contactId, navigation)}
                buttonText={`${name} - ${latestMessagePreview} - ${dateSent}`}
              />
            </View>
          </View>
        );
      })}
    </PageContainer>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
  },
  explanation: {
    marginTop: 50,
    marginBottom: 50,
  },
  previewContainer: {
    marginTop: 25,
    marginBottom: 15,
  },
});

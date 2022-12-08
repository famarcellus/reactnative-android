import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Text, View} from 'react-native';
import {PrimaryButton} from '../../../components/AppButton/PrimaryButton';
import PageContainer from '../../PageContainer';
import {MessageStackParamList} from '../Dashboard';

type FriendsMessageProps = StackScreenProps<MessageStackParamList, 'Friends'>;

export const FriendsMessages = ({route, navigation}: FriendsMessageProps) => {
  const {sortMethod} = route.params;
  console.log('FriendsMessageComponent was rendered');
  return (
    <PageContainer>
      <Text>Friends Messages here. Sort Method is {sortMethod}</Text>
      <PrimaryButton
        loading={false}
        onPress={() => navigation.navigate('Requests', {sortMethod: 'Latest'})}
        buttonText="View Requests"
      />
    </PageContainer>
  );
};

import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Text} from 'react-native';
import PageContainer from '../../PageContainer';
import {MessageStackParamList} from '../Dashboard';
import {PrimaryButton} from '../../../components/AppButton/PrimaryButton';

type MessageRequestsProps = StackScreenProps<MessageStackParamList, 'Requests'>;

export const MessageRequests = ({route, navigation}: MessageRequestsProps) => {
  const {sortMethod} = route.params;
  return (
    <PageContainer>
      <Text>
        Message Requests would be fetched and displayed here. Sort Method is{' '}
        {sortMethod}
      </Text>
      <PrimaryButton
        loading={false}
        onPress={() => navigation.goBack()}
        buttonText="Back to Friends Messages"
      />
    </PageContainer>
  );
};

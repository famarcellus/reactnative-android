import React from 'react';
import {Text} from 'react-native';

import {MessagesProps} from '../../types/navigation';
import PageContainer from '../PageContainer';
import {PrimaryButton} from '../../components/AppButton/PrimaryButton';

export const Messages = ({route, navigation}: MessagesProps) => {
  const {sortMethod} = route.params;
  return (
    <PageContainer>
      <Text>
        Messages are fetched and displayed here. Sort Method is {sortMethod}
      </Text>
      {/* <PrimaryButton
        loading={false}
        onPress={() => navigation.goBack()}
        buttonText="Back to Friends Messages"
      /> */}
    </PageContainer>
  );
};

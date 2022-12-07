import React from 'react';
import {View, Text} from 'react-native';
import {RootStackParamList} from '../../../App';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import PageContainer from '../PageContainer';
// import commonStyle from '../../style/common.style';

type DashboardProps = NativeStackScreenProps<RootStackParamList, 'Dashboard'>;

export const Dashboard = ({route, navigation}: DashboardProps) => {
  const {userId} = route.params;
  const {name} = route.params;
  const {email} = route.params;

  return (
    <PageContainer>
      <View>
        <Text>Dashboard Page</Text>
        <Text>
          {name} - {userId}
        </Text>
        <Text>Email Address - {email}</Text>
      </View>
    </PageContainer>
  );
};

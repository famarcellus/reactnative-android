import React, {useState} from 'react';
import {RootStackParamList} from '../../../App';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {createStackNavigator} from '@react-navigation/stack';

import {FriendsMessages} from './Messages/FriendsMessages';
import {MessageRequests} from './Messages/MessageRequests';

export type DashboardProps = NativeStackScreenProps<
  RootStackParamList,
  'Dashboard'
>;

export type MessageStackParamList = {
  Friends: {sortMethod: string};
  Requests: {sortMethod: string};
};

const MessageStack = createStackNavigator<MessageStackParamList>();

export const Dashboard = ({route, navigation}: DashboardProps) => {
  //   const {userId} = route.params;
  //   const {email} = route.params;
  //   const [currentMsgSection, setCurrentMsgSection] = useState(
  //     route.params.screen,
  //   );

  return (
    <MessageStack.Navigator screenOptions={{headerShown: false}}>
      <MessageStack.Screen name="Friends" component={FriendsMessages} />
      <MessageStack.Screen name="Requests" component={MessageRequests} />
    </MessageStack.Navigator>
  );
};

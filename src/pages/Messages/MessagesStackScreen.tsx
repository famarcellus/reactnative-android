import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {MessagesStackParamList} from '../../types/navigation';
import {Inbox} from './Inbox';
import {MessageDetails} from './MessageDetails';

const MessagesStack = createStackNavigator<MessagesStackParamList>();

export const MessagesStackScreen = () => {
  return (
    <MessagesStack.Navigator initialRouteName="Inbox">
      <MessagesStack.Screen
        name="Inbox"
        component={Inbox}
        options={{headerShown: false}}
      />
      <MessagesStack.Screen name="MessageDetails" component={MessageDetails} />
    </MessagesStack.Navigator>
  );
};

import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {HomeStackParamList} from '../../types/navigation';
import {Feed} from './Feed';
import {PostDetails} from './PostDetails';

const HomeStack = createStackNavigator<HomeStackParamList>();

export const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator initialRouteName="Feed">
      <HomeStack.Screen
        name="Feed"
        component={Feed}
        options={{headerShown: false}}
      />
      <HomeStack.Screen name="PostDetails" component={PostDetails} />
    </HomeStack.Navigator>
  );
};

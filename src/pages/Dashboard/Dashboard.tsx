import React, {useState} from 'react';
import {TabParamList, DashboardProps} from '../../types/navigation';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Messages} from '../Messages/Messages';
import {HomeStackScreen} from '../Home/HomeStackScreen';

const Tab = createBottomTabNavigator<TabParamList>();

export const Dashboard = ({route, navigation}: DashboardProps) => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={HomeStackScreen} />
      <Tab.Screen
        name="Messages"
        component={Messages}
        initialParams={{sortMethod: 'latest'}}
      />
    </Tab.Navigator>
  );
};

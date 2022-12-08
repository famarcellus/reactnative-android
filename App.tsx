import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Login} from './src/pages/Login/Login';
import {Dashboard} from './src/pages/Dashboard/Dashboard';

export type RootStackParamList = {
  Login: undefined;
  Dashboard: {
    userId: number;
    email: string;
    screen: string;
    params: {sortMethod: string};
  };
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Login">
        <RootStack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <RootStack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{title: 'My Dashboard'}}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;

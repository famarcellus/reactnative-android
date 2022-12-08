import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Login} from './src/pages/Login/Login';
import {Dashboard} from './src/pages/Dashboard/Dashboard';
import {NativeRootStackParamList} from './src/types/navigation';

const NativeRootStack = createNativeStackNavigator<NativeRootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <NativeRootStack.Navigator
        initialRouteName="Login"
        screenOptions={{headerShown: false}}>
        <NativeRootStack.Screen name="Login" component={Login} />
        <NativeRootStack.Screen name="Dashboard" component={Dashboard} />
      </NativeRootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;

import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Login} from './src/pages/Login/Login';
import {Dashboard} from './src/pages/Dashboard/Dashboard';
import {NativeRootStackParamList} from './src/types/navigation';
import {logInService} from './src/machines/LogInMachine';
import {useActor} from '@xstate/react';

const NativeRootStack = createNativeStackNavigator<NativeRootStackParamList>();

const App = () => {
  const [loggedInState, send] = useActor(logInService);

  return (
    <NavigationContainer>
      <NativeRootStack.Navigator
        initialRouteName="Login"
        screenOptions={{headerShown: false}}>
        {loggedInState.matches('loggedIn') ? (
          <>
            <NativeRootStack.Screen name="Dashboard" component={Dashboard} />
          </>
        ) : (
          <NativeRootStack.Screen name="Login" component={Login} />
        )}
      </NativeRootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;

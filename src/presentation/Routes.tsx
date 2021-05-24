import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Auth} from './routes/Auth';
import {Home} from './routes/Home';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

export const ROUTES = {
  AUTH: 'Auth',
  HOME: 'Home',
};

export interface RootStackParams {
  Home: undefined;
  Auth: undefined;
}

export const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={ROUTES.AUTH}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name={ROUTES.HOME} component={Home} />
        <Stack.Screen name={ROUTES.AUTH} component={Auth} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

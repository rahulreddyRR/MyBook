import { StyleSheet } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Screens/Home';
import { Routespath } from './Routenames';
import Login from '../Screens/Login/Login';
import { useAppSelector } from '../redux/Hooks/Hooks';

const Stack = createNativeStackNavigator();
const Routes = () => {
  const LoggedIn = useAppSelector(state => state.User.LoginIn)

  return (
    <Stack.Navigator>
      {!LoggedIn &&
        <Stack.Screen
          name={Routespath.Login}
          component={Login}
          options={{
            headerShown: false
          }} />
      }
      <Stack.Screen
        name={Routespath.Home}
        component={Home}
        options={{
          title: 'My Todos'
        }} />
    </Stack.Navigator>
  )
}

export default Routes

const styles = StyleSheet.create({})
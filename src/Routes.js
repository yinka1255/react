import React, {Component} from 'react';
import { createStackNavigator, createAppContainer, createDrawerNavigator, DrawerActions } from 'react-navigation';
import Home from './Home';
import Settings from './Settings';
import SideMenu from './SideMenu';
import { Button, Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Nav = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({navigation}) => ({
      title: "Home",
      headerLeft:(<TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <Text >
               Button
            </Text>
                  </TouchableOpacity>
      ),
    })
  },
  Settings: {
    screen: Settings,
    navigationOptions: ({navigation}) => ({
      title: "Settings",
    })     
  },
});
const Routes = createAppContainer(Nav);
export default Routes;
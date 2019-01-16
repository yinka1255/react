import React, { Component } from 'react';
import { AppRegistry, Dimensions } from 'react-native';
import { createDrawerNavigator } from 'react-navigation';

import App from './App';
import {name as appName} from './app.json';

import SideMenu from './src/SideMenu'
import Routes from './src/Routes';


const drawernav = createDrawerNavigator({
  Item1: {
      screen: Routes,
    }
  }, {
    contentComponent: SideMenu,
    drawerWidth: Dimensions.get('window').width - 120,  
});

AppRegistry.registerComponent(appName, () => drawernav);
AppRegistry.registerComponent(appName, () => App);
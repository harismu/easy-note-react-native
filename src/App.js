import React from 'react';
import {Root} from 'native-base';
// import { StackNavigator, DrawerNavigator } from "react-navigation";
import {createStackNavigator, createAppContainer} from 'react-navigation';

import Home from './screens/home/';

const AppNavigator = createStackNavigator(
  {
    Home: {screen: Home},
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  },
);

const AppContainer = createAppContainer(AppNavigator);

export default () => (
  <Root>
    <AppContainer />
  </Root>
);

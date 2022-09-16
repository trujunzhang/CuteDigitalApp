import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {
  ForYouScreen,
  HomeScreen,
  SectionsScreen,
  SettingsScreen,
} from '../screens';
import routes from './routes';
import {NavigatorParams} from './NavigatorParams';
import {options} from './ScreenOptions';

const rootTab = createBottomTabNavigator<NavigatorParams>();

const MainTab = () => {
  return (
    <rootTab.Navigator
      initialRouteName={routes.Home}
      screenOptions={{
        headerTitleAlign: 'center',
        headerTintColor: '#005096',
      }}>
      <rootTab.Screen
        name={routes.Home}
        component={HomeScreen}
        options={options.Home}
      />
      <rootTab.Screen
        name={routes.ForYou}
        component={ForYouScreen}
        options={options.ForYou}
      />
      <rootTab.Screen
        name={routes.Settings}
        component={SettingsScreen}
        options={options.Settings}
      />
      <rootTab.Screen
        name={routes.Sections}
        component={SectionsScreen}
        options={options.Sections}
      />
    </rootTab.Navigator>
  );
};
export default MainTab;

import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  FavoritesScreen,
  FontSizeScreen,
  LoginScreen,
  NewsForYouScreen,
  NewsScreen,
  NewsSectionsScreen,
  NotificationsScreen,
  PrivacyPolicyScreen,
  RegisterScreen,
  ScreenForDebugsy,
  SearchScreen,
  SettingsUserRegisteredScreen,
  UserScreen,
  ContactsFormScreen,
} from '../screens';
import routes from './routes';
import {NavigatorParams} from './NavigatorParams';
import {MainTab} from './index';
import {options} from './ScreenOptions';

const rootStack = createNativeStackNavigator<NavigatorParams>();

const MainStack = () => {
  return (
    <rootStack.Navigator
      initialRouteName={routes.Login}
      screenOptions={{
        headerTitleAlign: 'center',
        headerTintColor: '#005096',
      }}>
      <rootStack.Screen
        name={routes.MainTab}
        component={MainTab}
        options={{headerShown: false}}
      />
      <rootStack.Screen
        name={routes.Login}
        component={LoginScreen}
        options={options.Login}
      />
      <rootStack.Screen
        name={routes.Register}
        component={RegisterScreen}
        options={options.Register}
      />
      <rootStack.Screen
        name={routes.Favorites}
        component={FavoritesScreen}
        options={options.Favorites}
      />
      <rootStack.Screen
        name={routes.User}
        component={UserScreen}
        options={options.User}
      />
      <rootStack.Screen
        name={routes.News}
        component={NewsScreen}
        options={options.News}
      />
      <rootStack.Screen
        name={routes.Search}
        component={SearchScreen}
        options={options.Search}
      />
      <rootStack.Screen
        name={routes.NewsForYou}
        component={NewsForYouScreen}
        options={options.NewsForYou}
      />

      <rootStack.Screen
        name={routes.FontSize}
        component={FontSizeScreen}
        options={options.FontSize}
      />

      <rootStack.Screen
        name={routes.NewsSections}
        component={NewsSectionsScreen}
        options={options.NewsSections}
      />
      <rootStack.Screen
        name={routes.SettingsUserRegistered}
        component={SettingsUserRegisteredScreen}
        options={options.SettingsUserRegistered}
      />
      <rootStack.Screen
        name={routes.Notifications}
        component={NotificationsScreen}
        options={options.Notifications}
      />
      <rootStack.Screen
        name={routes.PrivacyPolicy}
        component={PrivacyPolicyScreen}
        options={options.PrivacyPolicy}
      />
      <rootStack.Screen
        name={routes.ContactsForm}
        component={ContactsFormScreen}
      />

      <rootStack.Screen
        name={routes.ScreenForDebugsy}
        component={ScreenForDebugsy}
      />
    </rootStack.Navigator>
  );
};

export default MainStack;

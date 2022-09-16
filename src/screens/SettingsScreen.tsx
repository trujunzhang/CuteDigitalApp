import * as React from 'react';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  Box,
  Stack,
  Text,
  HStack,
  Factory,
  Image,
  ScrollView,
} from 'native-base';

import {
  CardSettings,
  ActionSheetShare,
  ActionSheetContacts,
} from '../components';
import {R} from '../res';
import {routes} from '../navigation';
import {deviceWidth} from '../common';

/***
 *  Settings of the App
 * @constructor
 */
const SettingsScreen = () => {
  const FactoryTouchableOpacity = Factory(TouchableOpacity);
  const navigation = useNavigation();
  return (
    <Box
      safeArea
      flex={1}
      alignItems={'center'}
      justifyContent={'center'}
      bg={'cuteBg'}>
      <ScrollView w={deviceWidth} showsVerticalScrollIndicator={false}>
        <HStack ml={8} mt={8} alignItems={'center'}>
          <Image
            ml={5}
            alt={'logo'}
            size={'8'}
            source={R.images.loginHappyFace}
          />
          <FactoryTouchableOpacity
            onPress={() => navigation.navigate(routes.Login)}>
            <Text ml={8}>{R.strings.settingsScreen.logIn}</Text>
          </FactoryTouchableOpacity>
        </HStack>

        {/*Cards Settings*/}
        <Stack mt={3} space={2}>
          {/*Notifications*/}
          <CardSettings
            text={R.strings.settingsScreen.notif}
            route={routes.Notifications}
          />
          {/*FontSize*/}
          <CardSettings
            text={R.strings.settingsScreen.fonSize}
            route={routes.FontSize}
          />
          {/*Share App*/}
          <ActionSheetShare />
          {/*Private Policy*/}
          <CardSettings
            text={R.strings.settingsScreen.privacyPolicy}
            route={routes.PrivacyPolicy}
          />
          {/*Contacts*/}
          <ActionSheetContacts />
        </Stack>
      </ScrollView>
    </Box>
  );
};

export default SettingsScreen;

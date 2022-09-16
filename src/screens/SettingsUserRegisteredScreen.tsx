import * as React from 'react';
import {Box, Stack, Text, HStack, Flex, Avatar} from 'native-base';

import {R} from '../res';
import {routes} from '../navigation';
import {
  ActionSheetContacts,
  ActionSheetShare,
  CardSettings,
} from '../components';

/***
 * Setting Screen Options for registered users.
 * @constructor
 */
const SettingsUserRegisteredScreen = () => {
  return (
    <Box safeArea flex={1} bg={'cuteBg'}>
      <HStack mt={5} h={'8%'} alignItems={'center'}>
        <Avatar ml={5} size={'10'} bg={'cuteRed.400'}>
          <Text color={'cuteBg'}>YM</Text>
        </Avatar>
        <Flex flexDirection={'column'}>
          <Text fontWeight={'bold'} fontSize={18} ml={5}>
            {R.strings.userScreen.user}
          </Text>
          <Text fontWeight={'medium'} fontSize={14} ml={5}>
            {R.strings.userScreen.userName}
          </Text>
        </Flex>
      </HStack>
      <Stack mt={3} flex={1} space={2}>
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
        {/*App*/}
        <ActionSheetShare />
        {/*PrivatePolicy*/}
        <CardSettings
          text={R.strings.settingsScreen.privacyPolicy}
          route={routes.PrivacyPolicy}
        />
        {/*Contacts*/}
        <ActionSheetContacts />
      </Stack>
    </Box>
  );
};

export default SettingsUserRegisteredScreen;

import * as React from 'react';
import {Box, Stack, HStack, Text, Switch, ScrollView} from 'native-base';

import {R} from '../res';
import {deviceWidth} from '../common';

/***
 * Screen to configure the notifications.
 * @constructor
 */
const NotificationsScreen = () => {
  return (
    <Box
      safeArea
      flex={1}
      alignItems={'center'}
      justifyContent={'center'}
      bg={'cuteBg'}>
      <ScrollView w={deviceWidth} showsVerticalScrollIndicator={false}>
        <Stack space={4} mt={35} mx={30}>
          <HStack justifyContent="space-between">
            <Text>{R.strings.notificationScreen.notif}</Text>
            <Switch />
          </HStack>
          <HStack justifyContent="space-between">
            <Text>{R.strings.notificationScreen.alerts}</Text>
            <Switch />
          </HStack>
          <Box w={250}>
            <Text fontSize={13}>
              {R.strings.notificationScreen.alertsExplain}
            </Text>
          </Box>
          <HStack justifyContent="space-between">
            <Text>{R.strings.notificationScreen.virals}</Text>
            <Switch />
          </HStack>
          <Box w={250}>
            <Text fontSize={13}>
              {R.strings.notificationScreen.viralsExplain}
            </Text>
          </Box>
        </Stack>
      </ScrollView>
    </Box>
  );
};

export default NotificationsScreen;

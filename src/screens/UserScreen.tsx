import * as React from 'react';
import {Box, Stack, Text, HStack, Image, Flex, Avatar} from 'native-base';

import {routes} from '../navigation';
import {R} from '../res';
import {CardSettings} from '../components';

/***
 * Setting Screen for Registered users.
 * @constructor
 */
const UserScreen = () => {
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
        {/*Preferences*/}
        <CardSettings
          text={R.strings.userScreen.preferences}
          route={routes.SettingsUserRegistered}
        />
      </Stack>
    </Box>
  );
};

export default UserScreen;

import React from 'react';
import {TouchableOpacity} from 'react-native';
import {
  Actionsheet,
  useDisclose,
  Text,
  HStack,
  Factory,
  ChevronRightIcon,
  Heading,
  Center,
} from 'native-base';

import {R} from '../res';

/***
 *  Call an ActionSheet to share the app with de user's friends.
 * @constructor
 */
export const ActionSheetContacts = () => {
  const {isOpen, onOpen, onClose} = useDisclose();
  const FactoryTouchableOpacity = Factory(TouchableOpacity);

  return (
    <>
      <FactoryTouchableOpacity onPress={onOpen}>
        <HStack
          alignItems={'center'}
          justifyContent="space-between"
          w={'100%'}
          h={12}>
          <Text ml={5}>{R.strings.settingsScreen.contacts}</Text>
          <ChevronRightIcon mr={3} />
        </HStack>
      </FactoryTouchableOpacity>

      <Actionsheet isOpen={isOpen} onClose={onClose} size="full">
        <Actionsheet.Content>
          <Center w="50%" h={60} px={4} justifyContent="center">
            <Heading
              fontSize="16"
              color="gray.500"
              _dark={{
                color: 'gray.300',
              }}>
              {R.strings.contactsActionSheet.openWith}
            </Heading>
          </Center>

          <Actionsheet.Item />
          <Actionsheet.Item />
          <Actionsheet.Item />
          <Actionsheet.Item />
          <Actionsheet.Item />
        </Actionsheet.Content>
      </Actionsheet>
    </>
  );
};
export default ActionSheetContacts;

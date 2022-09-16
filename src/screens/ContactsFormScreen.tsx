import * as React from 'react';
import {
  Box,
  Button,
  Center,
  Divider,
  Heading,
  Image,
  Input,
  Pressable,
  Stack,
  Text,
} from 'native-base';
import {useNavigation} from '@react-navigation/native';

import {R} from '../res';
import {routes} from '../navigation';
import {deviceWidth} from '../common';

const ContactsFormScreen = ({navigation}) => {
  return (
    <Box safeArea alignItems={'center'}>
      <Stack space={4} mt={15}>
        {/* Happy Face*/}
        <Center>
          <Image alt={'logo'} size={'sm'} source={R.images.icon} />
          {/*Text and paragraph*/}
          <Heading fontSize={'md'} m={2}>
            {R.strings.loginScreen.accesTitle.toUpperCase()}
          </Heading>
          <Text w={200} textAlign={'center'} fontSize={'sm'} lineHeight={14}>
            {R.strings.loginScreen.Lorem}
          </Text>
        </Center>

        {/*InputTexts*/}
        <Input type={'Username'} placeholder={R.strings.loginScreen.username} />
        <Input type={'password'} placeholder={R.strings.loginScreen.password} />
        <Button onPress={() => navigation.replace(routes.MainTab)}>
          {R.strings.loginScreen.accesButton.toUpperCase()}
        </Button>
      </Stack>
      <Pressable>
        {({isHovered, isPressed}) => {
          return (
            <Text
              color={
                isPressed
                  ? 'cuteGray.400'
                  : isHovered
                  ? 'cuteGray.200'
                  : 'cuteGray.700'
              }
              mt={4}
              style={{
                transform: [
                  {
                    scale: isPressed ? 0.96 : 1,
                  },
                ],
              }}>
              {R.strings.loginScreen.forgotPass}
            </Text>
          );
        }}
      </Pressable>
      <Divider
        bg={'cuteBlue1.700'}
        alignSelf={'center'}
        my={5}
        w={'50'}
        thickness={'2'}
      />

      {/*Social Login*/}
      <Stack space={1} />
    </Box>
  );
};

export default ContactsFormScreen;

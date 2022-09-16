import * as React from 'react';
import {
  Box,
  Text,
  Stack,
  Center,
  Image,
  Heading,
  Button,
  Input,
  Divider,
  Pressable,
  ScrollView,
  Avatar,
} from 'native-base';

import { R } from '../res';
import { deviceWidth } from '../common';
import { routes } from '../navigation';

/***
 * Screen for User Login
 * @param navigation
 * @constructor
 */
const LoginScreen = ({ navigation }) => {
  const [userName, setUserName] = React.useState('');
  const [pass, setPass] = React.useState('');
  const [show, setShow] = React.useState(false);
  const handleVisibilityPass = () => setShow(!show);

  return (
    <Box
      safeArea
      flex={1}
      alignItems={'center'}
      justifyContent={'center'}
      bg={'cuteBg'}>
      <ScrollView w={deviceWidth} showsVerticalScrollIndicator={false}>
        <Stack space={4} mt={'35'} alignItems={'center'}>
          {/* Happy Face*/}
          <Center>
            <Avatar bg={'cuteBg'} size={'60'} shadow={'7'}>
              <Image
                alt={'logo'}
                size={'12'}
                source={R.images.loginHappyFace}
              />
            </Avatar>
            {/*Text and paragraph*/}
            <Heading fontSize={'md'} my={4}>
              {R.strings.loginScreen.accesTitle.toUpperCase()}
            </Heading>
            <Text w={250} textAlign={'center'} fontSize={'sm'} lineHeight={14}>
              {R.strings.loginScreen.loginText}
            </Text>
          </Center>

          {/*InputTexts*/}
          <Input
            type={'Username'}
            placeholder={R.strings.loginScreen.username}
            onChangeText={setUserName}
          />
          <Input
            type={show ? 'text' : 'password'}
            placeholder={R.strings.loginScreen.password}
            onChangeText={setPass}
            rightElement={
              <Pressable onPress={handleVisibilityPass}>
                <Image
                  resizeMode={'contain'}
                  alt={'Visibility Handle'}
                  source={R.images.passVisibility}
                  size={5}
                  ml="5"
                />
              </Pressable>
            }
          />
          <Button onPress={() => navigation.replace(routes.MainTab)}>
            {R.strings.loginScreen.accesButton.toUpperCase()}
          </Button>
        </Stack>
        <Pressable>
          {({ isHovered, isPressed }) => {
            return (
              <Text
                alignSelf={'center'}
                color={
                  isPressed
                    ? 'cuteGray.400'
                    : isHovered
                      ? 'cuteGray.200'
                      : 'cuteGray.700'
                }
                fontSize={13}
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
          bg={'cuteBlue.500'}
          alignSelf={'center'}
          my={5}
          w={'50'}
          thickness={'2'}
        />

        {/*Social Login*/}
        <Stack space={2} alignItems={'center'}>
          <Button
            onPress={() => navigation.navigate(routes.Register)}
            variant={'cuteOutline'}
            _text={{ color: 'cuteGray.700' }}>
            {R.strings.loginScreen.checkIn.toUpperCase()}
          </Button>
          <Button>{R.strings.loginScreen.facebookButton}</Button>
          <Button
            colorScheme={'cuteGrayOther'}
            variant={'subtle'}
            _text={{ color: 'cuteGray.700' }}>
            {R.strings.loginScreen.googleButton}
          </Button>
        </Stack>
        <Pressable onPress={() => navigation.navigate(routes.ScreenForDebugsy)}>
          <Text>Debug</Text>
        </Pressable>
      </ScrollView>
    </Box>
  );
};

export default LoginScreen;

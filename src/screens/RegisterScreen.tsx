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
  ScrollView,
  Avatar,
  Pressable,
} from 'native-base';

import {R} from '../res';
import {routes} from '../navigation';
import {deviceWidth} from '../common';

/***
 * Screen for the User Registration
 * @param navigation
 * @constructor
 */
const RegisterScreen = ({navigation}) => {
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
            <Heading fontSize={'md'} my={4} textAlign={'center'}>
              {R.strings.registerScreen.registerHeadline.toUpperCase()}
            </Heading>
            <Text textAlign={'center'}>
              {R.strings.registerScreen.registerText}
            </Text>
          </Center>
          {/*InputTexts*/}
          <Center>
            <Input placeholder={R.strings.registerScreen.name} />
            <Input placeholder={R.strings.registerScreen.email} />
            <Input
              type={show ? 'text' : 'password'}
              placeholder={R.strings.loginScreen.password}
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
            <Input placeholder={R.strings.registerScreen.phone} />
            <Button
              mt={5}
              onPress={() =>
                navigation.reset({index: 0, routes: routes.MainTab})
              }>
              {R.strings.loginScreen.checkIn.toUpperCase()}
            </Button>
          </Center>
          <Divider
            bg={'cuteBlue.500'}
            alignSelf={'center'}
            my={1}
            w={'50'}
            thickness={'2'}
          />
        </Stack>
        {/*Social Login*/}
        <Stack alignItems={'center'} mt={5} space={2}>
          <Button>{R.strings.loginScreen.facebookButton}</Button>
          <Button colorScheme={'cuteGray'} variant={'subtle'}>
            {R.strings.loginScreen.googleButton}
          </Button>
        </Stack>
      </ScrollView>
    </Box>
  );
};

export default RegisterScreen;

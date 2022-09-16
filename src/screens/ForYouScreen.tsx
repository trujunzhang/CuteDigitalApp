import * as React from 'react';
import {
  Box,
  Text,
  Stack,
  Center,
  Image,
  Heading,
  Button,
  Pressable,
  ScrollView,
} from 'native-base';

import {R} from '../res';
import {routes} from '../navigation';
import {CheckboxFavorites} from '../components';
import {deviceWidth} from '../common';

/***
 * Screen where the user can choose what kind of News he likes to follow.
 * @param navigation {any} Prop for the navigations functions of the component
 * @constructor
 */
const ForYouScreen = ({navigation}) => {
  return (
    <Box
      safeArea
      flex={1}
      alignItems={'center'}
      justifyContent={'center'}
      bg={'cuteBg'}>
      <ScrollView w={deviceWidth} showsVerticalScrollIndicator={false}>
        <Stack alignItems={'center'} space={3} mt={'8'}>
          {/* Star */}
          <Image alt={'Star'} size={'sm'} source={R.images.star} />
          {/*Text and paragraph*/}
          <Heading fontSize={'md'} mt={5}>
            {R.strings.forYouScreen.headline.toUpperCase()}
          </Heading>
          <Text textAlign={'center'} fontSize={'sm'}>
            {R.strings.forYouScreen.info}
          </Text>
        </Stack>

        {/*CheckBoxes*/}
        <CheckboxFavorites />
        <Center>
          <Button onPress={() => navigation.navigate(routes.NewsForYou)} mt={5}>
            {R.strings.forYouScreen.continueButton.toUpperCase()}
          </Button>
          <Pressable onPress={() => navigation.navigate(routes.Sections)}>
            {({isHovered, isPressed}) => {
              return (
                <Text
                  mt={4}
                  color={
                    isPressed
                      ? 'cuteGray.400'
                      : isHovered
                      ? 'cuteGray.200'
                      : 'cuteGray.700'
                  }
                  style={{
                    transform: [
                      {
                        scale: isPressed ? 0.96 : 1,
                      },
                    ],
                  }}>
                  {R.strings.forYouScreen.skip}
                </Text>
              );
            }}
          </Pressable>
        </Center>
      </ScrollView>
    </Box>
  );
};

export default ForYouScreen;

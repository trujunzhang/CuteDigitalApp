import * as React from 'react';
import {Dimensions} from 'react-native';
import {Box, Text, ScrollView, Image, HStack, Divider} from 'native-base';

import {R} from '../res';

const deviceWidth = Dimensions.get('window').width;

/***
 *  This Screen is a container for each individual news.
 * @constructor
 */
const NewsScreen = () => {
  return (
    <Box
      safeArea
      flex={1}
      alignItems={'center'}
      justifyContent={'center'}
      bg={'cuteBg'}>
      <ScrollView w={deviceWidth} showsVerticalScrollIndicator={false}>
        <Image
          w={deviceWidth}
          h={200}
          alt={'image'}
          source={R.images.imgHomeBanner}
        />
        <Text fontSize={20} mt={5} mx={'35'} maxW={deviceWidth - 10}>
          {R.strings.newsScreen.headline}
        </Text>
        <Text mt={2} ml={'35'}>
          {R.strings.newsScreen.autor}
        </Text>
        <Text mt={'35'} mx={'35'}>
          {R.strings.privacyPolicyScreen.text}
        </Text>
        <HStack
          justifyContent={'flex-end'}
          alignItems={'center'}
          space={2}
          mt={3}
          mr={5}>
          <Text fontWeight={'semibold'} color={'cuteBlue.500'}>
            {R.strings.newsScreen.share.toUpperCase()}
          </Text>
          <Image source={R.images.share} alt={'share'} size={'15'} />
          <Image
            source={R.images.facebookSocial}
            alt={'facebook'}
            size={'15'}
          />
          <Image source={R.images.googleSocial} alt={'google'} size={'15'} />
          <Image source={R.images.reddit} alt={'share'} size={'15'} />
          <Image source={R.images.linkedin} alt={'linkedin'} size={'15'} />
          <Image source={R.images.pinterest} alt={'pinterst'} size={'15'} />
          <Image source={R.images.mail} alt={'mail'} size={'15'} />
        </HStack>
      </ScrollView>
    </Box>
  );
};

export default NewsScreen;

import * as React from 'react';
import {TouchableOpacity} from 'react-native';
import {
  Box,
  Stack,
  ScrollView,
  Image,
  Text,
  HStack,
  Heading,
  Factory,
} from 'native-base';

import {R} from '../res';
import {routes} from '../navigation';
import {deviceWidth} from '../common';
import {CardNewsSections, CardNewsForYou} from '../components';
import {TabView} from '../common/components';

/***
 * This Screen contains the Section's news.
 * @param navigation
 * @constructor
 */
const NewsSectionsScreen = ({navigation}) => {
  const FactoryTouchableOpacity = Factory(TouchableOpacity);
  return (
    <Box
      safeArea
      flex={1}
      alignItems={'center'}
      justifyContent={'center'}
      bg={'cuteBg'}>
      <TabView />
      <ScrollView w={deviceWidth} showsVerticalScrollIndicator={false}>
        <FactoryTouchableOpacity
          onPress={() => navigation.navigate(routes.News)}>
          <Image
            w={deviceWidth}
            h={200}
            alt={'image'}
            source={R.images.imgHomeBanner}
          />
          <Text fontSize={20} numberOfLines={2} mt={5} mx={'35'}>
            {R.strings.newsScreen.headline}
          </Text>
          <Text mt={2} ml={'35'}>
            {R.strings.newsScreen.autor}
          </Text>
        </FactoryTouchableOpacity>

        {/* NEWS CARDS FOR YOU*/}
        <HStack mt={5}>
          <CardNewsForYou
            textArticle={R.strings.search.text}
            image={R.images.imgNews}
          />
          <CardNewsForYou
            textArticle={R.strings.search.text}
            image={R.images.imgShark}
          />
        </HStack>
        <HStack mt={1}>
          <CardNewsForYou
            textArticle={R.strings.search.text}
            image={R.images.imgNews}
          />
          <CardNewsForYou
            textArticle={R.strings.search.text}
            image={R.images.imgHomeBanner}
          />
        </HStack>

        <Box h={'16'}>
          <Heading ml={5} mt={5} fontSize={16}>
            {R.strings.newsSectionsScreen.header.toUpperCase()}
          </Heading>
        </Box>

        {/*TEMPORAL LIST OF NEWS*/}
        <Stack space={1}>
          <CardNewsSections
            image={R.images.imgShark}
            textArticle={R.strings.search.text}
            textAutor={R.strings.search.Autor}
          />
          <CardNewsSections
            image={R.images.imgNews}
            textArticle={R.strings.search.text}
            textAutor={R.strings.search.Autor}
          />
          <CardNewsSections
            image={R.images.imgHomeBanner}
            textArticle={R.strings.search.text}
            textAutor={R.strings.search.Autor}
          />
          <CardNewsSections
            image={R.images.imgNews}
            textArticle={R.strings.search.text}
            textAutor={R.strings.search.Autor}
          />
          <CardNewsSections
            image={R.images.imgShark}
            textArticle={R.strings.search.text}
            textAutor={R.strings.search.Autor}
          />
          <CardNewsSections
            image={R.images.imgNews}
            textArticle={R.strings.search.text}
            textAutor={R.strings.search.Autor}
          />
        </Stack>
        <CardNewsSections
          image={R.images.imgHomeBanner}
          textArticle={R.strings.search.text}
          textAutor={R.strings.search.Autor}
        />
        <CardNewsSections
          image={R.images.imgShark}
          textArticle={R.strings.search.text}
          textAutor={R.strings.search.Autor}
        />
      </ScrollView>
    </Box>
  );
};
export default NewsSectionsScreen;

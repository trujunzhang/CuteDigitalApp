import * as React from 'react';
import {Box, Heading, Pressable, ScrollView, Stack} from 'native-base';
import {useNavigation} from '@react-navigation/native';

import {R} from '../res';
import {routes} from '../navigation';
import {deviceWidth} from '../common';
import {TabView} from '../common/components';

import {CardNewsSections, CardNewsHome, CustomCarousel} from '../components';

/***
 * Home Screen of the App
 * @constructor
 */
const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <Box
      safeArea
      flex={1}
      alignItems={'center'}
      justifyContent={'center'}
      bg={'cuteBg'}>
      <TabView />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/*Carousel*/}
        <Pressable
          onPress={() => navigation.navigate(routes.News)}
          w={deviceWidth}
          h={220}>
          <CustomCarousel />
        </Pressable>

        {/*Virals of the day*/}
        <Heading mt={8} fontSize={18} ml={5}>
          {R.strings.home.virals.toUpperCase()}
        </Heading>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
          <CardNewsHome
            textArticle={R.strings.search.text}
            image={R.images.imgNews}
          />
          <CardNewsHome
            textArticle={R.strings.search.text}
            image={R.images.imgHomeBanner}
          />
        </ScrollView>

        {/*Entertaiment*/}
        <Heading mt={5} fontSize={18} ml={5}>
          {R.strings.forYouScreen.check1.toUpperCase()}
        </Heading>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
          <CardNewsHome
            textArticle={R.strings.search.text}
            image={R.images.imgShark}
          />
          <CardNewsHome
            textArticle={R.strings.search.text}
            image={R.images.imgNews}
          />
        </ScrollView>

        {/*Culture*/}
        <Heading mt={5} fontSize={18} ml={5}>
          {R.strings.forYouScreen.check2.toUpperCase()}
        </Heading>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
          <CardNewsHome
            textArticle={R.strings.search.text}
            image={R.images.imgNews}
          />
          <CardNewsHome
            textArticle={R.strings.search.text}
            image={R.images.imgHomeBanner}
          />
        </ScrollView>

        {/*Politics*/}
        <Heading mt={5} fontSize={18} ml={5}>
          {R.strings.forYouScreen.check3.toUpperCase()}
        </Heading>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
          <CardNewsHome
            textArticle={R.strings.search.text}
            image={R.images.imgShark}
          />
          <CardNewsHome
            textArticle={R.strings.search.text}
            image={R.images.imgHomeBanner}
          />
        </ScrollView>

        {/*Red Chronicles*/}
        <Heading mt={5} fontSize={18} ml={5}>
          {R.strings.forYouScreen.check4.toUpperCase()}
        </Heading>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
          <CardNewsHome
            textArticle={R.strings.search.text}
            image={R.images.imgHomeBanner}
          />
          <CardNewsHome
            textArticle={R.strings.search.text}
            image={R.images.imgNews}
          />
        </ScrollView>

        {/*Kitchen*/}
        <Heading mt={5} fontSize={18} ml={5}>
          {R.strings.forYouScreen.check5.toUpperCase()}
        </Heading>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
          <CardNewsHome
            textArticle={R.strings.search.text}
            image={R.images.imgNews}
          />
          <CardNewsHome
            textArticle={R.strings.search.text}
            image={R.images.imgHomeBanner}
          />
        </ScrollView>

        {/*Internationals News*/}
        <Heading mt={5} fontSize={18} ml={5}>
          {R.strings.forYouScreen.check6.toUpperCase()}
        </Heading>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
          <CardNewsHome
            textArticle={R.strings.search.text}
            image={R.images.imgNews}
          />
          <CardNewsHome
            textArticle={R.strings.search.text}
            image={R.images.imgShark}
          />
        </ScrollView>

        {/*Sports*/}
        <Heading mt={5} fontSize={18} ml={5}>
          {R.strings.forYouScreen.check7.toUpperCase()}
        </Heading>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
          <CardNewsHome
            textArticle={R.strings.search.text}
            image={R.images.imgShark}
          />
          <CardNewsHome
            textArticle={R.strings.search.text}
            image={R.images.imgHomeBanner}
          />
        </ScrollView>

        {/*Health*/}
        <Heading mt={5} fontSize={18} ml={5}>
          {R.strings.forYouScreen.check8.toUpperCase()}
        </Heading>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
          <CardNewsHome
            textArticle={R.strings.search.text}
            image={R.images.imgHomeBanner}
          />
          <CardNewsHome
            textArticle={R.strings.search.text}
            image={R.images.imgNews}
          />
        </ScrollView>

        {/*Business and Economics*/}
        <Heading mt={5} fontSize={18} ml={5}>
          {R.strings.forYouScreen.check9.toUpperCase()}
        </Heading>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
          <CardNewsHome
            textArticle={R.strings.search.text}
            image={R.images.imgNews}
          />
          <CardNewsHome
            textArticle={R.strings.search.text}
            image={R.images.imgShark}
          />
        </ScrollView>

        {/*TEMPORAL LIST OF NEWS*/}
        <Stack mt={8} space={1}>
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
      </ScrollView>
    </Box>
  );
};

export default HomeScreen;

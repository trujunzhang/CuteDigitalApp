import * as React from 'react';
import {Box, Heading, ScrollView, Stack} from 'native-base';

import {R} from '../res';
import {deviceWidth} from '../common';
import {CardNewsSections} from '../components';

/***
 *  Search's Screen
 * @constructor
 */
const SearchScreen = () => {
  return (
    <Box
      safeArea
      flex={1}
      alignItems={'center'}
      justifyContent={'center'}
      bg={'cuteBg'}>
      <Box h={'16'}>
        <Heading ml={5} mt={5} fontSize={16}>
          {R.strings.search.headline.toUpperCase()}
        </Heading>
      </Box>
      <ScrollView w={deviceWidth} showsVerticalScrollIndicator={false}>
        <Stack mt={5} space={1}>
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
            image={R.images.imgHomeBanner}
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
          image={R.images.imgNews}
          textArticle={R.strings.search.text}
          textAutor={R.strings.search.Autor}
        />
      </ScrollView>
    </Box>
  );
};

export default SearchScreen;

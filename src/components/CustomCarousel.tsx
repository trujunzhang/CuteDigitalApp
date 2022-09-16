import React from 'react';
import Carousel from 'pinar';
import {Box, Heading, Image} from 'native-base';

import {R} from '../res';
import {deviceWidth} from '../common';

/***
 * Carousel component for the Home Screen
 * @constructor
 */
const CustomCarousel = () => (
  <Box width={deviceWidth} height={220}>
    <Carousel
      loop={true}
      autoplay={true}
      showsControls={false}
      autoplayInterval={5000}>
      <Box>
        <Heading position={'absolute'} alignSelf={'center'} fontSize={24}>
          Noticia 1
        </Heading>

        <Image
          alt={'image'}
          w={deviceWidth}
          h={'220'}
          source={R.images.imgShark}
        />
      </Box>

      <Box>
        <Heading position={'absolute'} alignSelf={'center'} fontSize={24}>
          Noticia 2
        </Heading>

        <Image
          alt={'image'}
          w={deviceWidth}
          h={'220'}
          source={R.images.imgNews}
        />
      </Box>

      <Box>
        <Heading position={'absolute'} alignSelf={'center'} fontSize={24}>
          Noticia 3
        </Heading>
        <Image
          alt={'image'}
          w={deviceWidth}
          h={'220'}
          source={R.images.imgHomeBanner}
        />
      </Box>
    </Carousel>
  </Box>
);
export default CustomCarousel;

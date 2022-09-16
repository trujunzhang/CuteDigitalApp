import * as React from 'react';
import {
  Image,
  Stack,
  HStack,
  Text,
  Spacer,
  Flex,
  Factory,
  Container,
  Box,
} from 'native-base';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import routes from '../navigation/routes';

interface Props {
  textArticle: string;
  textAutor?: string;
  image: any;
}

/***
 * This component feeds cards for the Home Screen
 * @param textArticle {string} Article's Title
 * @param image {any} Article's Image
 * @constructor
 */
const CardNewsHome: React.FC<Props> = ({textArticle, image}) => {
  const FactoryTouchableOpacity = Factory(TouchableOpacity);
  const navigation = useNavigation();
  return (
    <FactoryTouchableOpacity onPress={() => navigation.navigate(routes.News)}>
      <Stack w={270} h={200} alignItems={'center'}>
        <Image
          alt={'logo'}
          source={image}
          resizeMode={'cover'}
          w={250}
          h={'150'}
        />
        <Text mt={1} noOfLines={2} maxW={270}>
          {textArticle}
        </Text>
      </Stack>
    </FactoryTouchableOpacity>
  );
};

const FactoryTouchableOpacity = Factory(TouchableOpacity);

/***
 * This component feeds cards for the NewsSections's Screen
 * @param textArticle {string} Text of the fed article.
 * @param textAutor {string} Autor of the article. This @param is optional.
 * @param image {any} Image of the article.
 * @constructor
 */
const CardNewsSections: React.FC<Props> = ({textArticle, textAutor, image}) => {
  const navigation = useNavigation();
  return (
    <FactoryTouchableOpacity
      onPress={() => navigation.navigate(routes.News)}
      shadow={1}
      borderColor={'cuteGray.100'}
      borderWidth={1}>
      <HStack alignItems={'center'} w={'100%'} h={100}>
        <Image alt={'logo'} size={'lg'} source={image} />
        <Stack w={'300'}>
          <Flex>
            <Text lineHeight={18} noOfLines={3} ml={3}>
              {textArticle}
            </Text>
            <Spacer />
            <Text mt={2} fontSize={12} ml={3}>
              {textAutor}
            </Text>
          </Flex>
        </Stack>
      </HStack>
    </FactoryTouchableOpacity>
  );
};

/***
 * This component feeds Cards for the NewsForYou Screen.
 * @param textArticle {string} Text of the fed article.
 * * @param image {any} Image of the article.
 * @constructor
 */
const CardNewsForYou: React.FC<Props> = ({textArticle, image}) => {
  const navigation = useNavigation();
  return (
    <Container
      w={'50%'}
      h={'250'}
      shadow={1}
      borderColor={'cuteGray.100'}
      borderWidth={1}
      alignItems={'center'}>
      <FactoryTouchableOpacity onPress={() => navigation.navigate(routes.News)}>
        <Image
          alignSelf={'center'}
          m={3}
          alt={'logo'}
          size={'140'}
          source={image}
        />

        <Text m={3} lineHeight={18} noOfLines={3}>
          {textArticle}
        </Text>
      </FactoryTouchableOpacity>
    </Container>
  );
};

export {CardNewsHome, CardNewsSections, CardNewsForYou};

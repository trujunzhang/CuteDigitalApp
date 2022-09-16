import * as React from 'react';
import {Image, HStack, Text, Factory} from 'native-base';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {routes} from '../navigation';

interface Props {
  text: string;
  image: any;
}

/***
 *  Functional Component that feeds others components that needs Cards with these formats.
 * @param text {string} Text of the Card.
 * @param image {any} Card identifier icon.
 * @constructor
 */
const CardSections: React.FC<Props> = ({text, image}) => {
  const navigation = useNavigation();
  const FactoryTouchableOpacity = Factory(TouchableOpacity);

  return (
    <FactoryTouchableOpacity
      onPress={() => navigation.navigate(routes.NewsSections)}>
      <HStack alignItems={'center'} w={'100%'} h={12}>
        <Image alt={'logo'} size={'5'} source={image} resizeMode={'contain'} />
        <Text ml={3}>{text}</Text>
      </HStack>
    </FactoryTouchableOpacity>
  );
};

export default CardSections;

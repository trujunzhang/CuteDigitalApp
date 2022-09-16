import * as React from 'react';
import {ChevronRightIcon, HStack, Text, Factory, Box} from 'native-base';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {deviceWidth} from '../common';

interface Props {
  text: string;
  route?: string;
}

/***
 * Functional component that's build a Card for the component Settings
 * @param text {string} Text the card will contain, e.g. 'Allow notifications', or' 'Share App'.
 * @param route {string | undefined} The route for the navigation if the card is a Button (this @param is optional)
 * @constructor
 */
const CardSettings: React.FC<Props> = ({text, route}) => {
  const FactoryTouchableOpacity = Factory(TouchableOpacity);
  const navigation = useNavigation();
  return (
    <FactoryTouchableOpacity
      onPress={() => {
        navigation.navigate(route);
      }}>
      <Box w={deviceWidth} h={12} shadow={'1'} borderWidth={0.5}>
        <HStack alignItems={'center'} justifyContent="space-between">
          <Text ml={10}>{text}</Text>
          <ChevronRightIcon mr={3} />
        </HStack>
      </Box>
    </FactoryTouchableOpacity>
  );
};

export default CardSettings;

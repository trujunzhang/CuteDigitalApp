import * as React from 'react';
import {Text, Center, Pressable, Box} from 'native-base';

import {routes} from '../../navigation';

interface Props {
  text: string;
}

/***
 * This component feeds the Tabview component.
 * @param text {string} The text in the cards that the TabView is receiving.
 * @constructor
 */
const TabViewCard: React.FC<Props> = ({text}) => {
  return (
    <Pressable>
      {({isPressed}) => {
        return (
          <Center
            h={8}
            borderBottomWidth={'1'}
            borderBottomColor={isPressed ? 'cuteRed.500' : '#fff'}
            mx={4}>
            <Text fontSize={14}>{text}</Text>
          </Center>
        );
      }}
    </Pressable>
  );
};

export default TabViewCard;

import * as React from 'react';
import {Image, Factory} from 'native-base';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {routes} from '../../navigation';
import {R} from '../../res';

/***
 * Happy Face Icon for the right side of the header.
 * @constructor
 */
export const HeaderRightFace = () => {
  const FactoryTouchableOpacity = Factory(TouchableOpacity);
  const navigation = useNavigation();
  return (
    <FactoryTouchableOpacity
      onPress={() => {
        navigation.navigate(routes.User);
      }}>
      <Image
        alt={'HappyFace'}
        size={'6'}
        mr={3}
        source={R.images.loginHappyFace}
      />
    </FactoryTouchableOpacity>
  );
};

/***
 * Share icon for the right side of the header.
 * @constructor
 */
export const HeaderRightShare = () => {
  const FactoryTouchableOpacity = Factory(TouchableOpacity);
  const navigation = useNavigation();
  return (
    <FactoryTouchableOpacity
      //onPress={() => {
      // Shares ActionSheet (callback function????) TODO
      // }}
      alignItems={'center'}>
      <Image alt={'image'} size={'6'} mr={3} source={R.images.share} />
    </FactoryTouchableOpacity>
  );
};

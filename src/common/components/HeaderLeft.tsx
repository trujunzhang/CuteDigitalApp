import * as React from 'react';
import {Image, Factory} from 'native-base';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {routes} from '../../navigation';
import {R} from '../../res';

/***
 * Search Bar for the left side of the Header
 * @constructor
 */
export const HeaderSearch = () => {
  const FactoryTouchableOpacity = Factory(TouchableOpacity);
  const navigation = useNavigation();
  return (
    <FactoryTouchableOpacity
      onPress={() => {
        navigation.navigate(routes.Search);
      }}
      alignItems={'center'}>
      <Image alt={'image'} ml={'3'} size={'6'} source={R.images.search} />
    </FactoryTouchableOpacity>
  );
};

/***
 * Back Arrow for the left side of the Header
 * @constructor
 */
export const HeaderBackArrow = () => {
  const FactoryTouchableOpacity = Factory(TouchableOpacity);
  const navigation = useNavigation();
  return (
    <FactoryTouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}
      alignItems={'center'}>
      <Image alt={'BackArrow'} ml={'3'} size={5} source={R.images.backArrow} />
    </FactoryTouchableOpacity>
  );
};

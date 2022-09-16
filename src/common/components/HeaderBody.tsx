import * as React from 'react';
import {Center, Image} from 'native-base';

import {R} from '../../res';

/***
 * The center part of the Header
 * @constructor
 */
const HeaderBody = () => {
  return (
    <Center w={'70%'}>
      <Image
        alt={'image'}
        size={'25'}
        pt={12}
        source={R.images.logoHeader}
        w={'100%'}
      />
    </Center>
  );
};
export default HeaderBody;

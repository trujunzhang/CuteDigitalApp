import * as React from 'react';
import {Box, Text, ScrollView} from 'native-base';

import {R} from '../res';
import {deviceWidth} from '../common';

/***
 * Private's Policy of CubaCute.
 * @constructor
 */
const PrivacyPolicyScreen = () => {
  return (
    <Box
      safeArea
      flex={1}
      alignItems={'center'}
      justifyContent={'center'}
      bg={'cuteBg'}>
      <ScrollView w={deviceWidth} showsVerticalScrollIndicator={false}>
        <Box m={'35'}>
          <Text>{R.strings.privacyPolicyScreen.text}</Text>
        </Box>
      </ScrollView>
    </Box>
  );
};

export default PrivacyPolicyScreen;

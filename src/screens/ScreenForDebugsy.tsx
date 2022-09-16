import * as React from 'react';
import {Box, Stack, Input, Icon, Text, Button} from 'native-base';

import {R} from '../res';
import {routes} from '../navigation';
import {deviceWidth} from '../common';

/***
 *Screen for DEBUG
 * @constructor
 */
const debugScreen = () => {
  return (
    <Box flex={1} safeArea>
      <Button />

      <Text fontSize={30}>
        The quick brown fox jumps over the lazy dog. Jackdaws love my big sphinx
        of quartz. 0123456789 (.,:;-*!?')
      </Text>
    </Box>
  );
};

export default debugScreen;

import * as React from 'react';
import {Box, Text, ScrollView, Stack, Divider} from 'native-base';

import {R} from '../res';

/***
 *  Screen to change the typography's size of the articles.
 * @constructor
 */
const FontSizeScreen = () => {
  return (
    <Box
      safeArea
      flex={1}
      alignItems={'center'}
      justifyContent={'center'}
      bg={'cuteBg'}>
      <Stack mt={50} space={2}>
        <Text mx={50}>{R.strings.fontSizeScreen.xs}</Text>
        <Divider mx={5} w={350} thickness={'3'} />
        <Text mx={50}>{R.strings.fontSizeScreen.xm}</Text>
        <Divider mx={5} w={350} thickness={'3'} />
        <Text mx={50}>{R.strings.fontSizeScreen.xl}</Text>
        <Divider mx={5} w={350} thickness={'3'} />
        <Text mx={50}>{R.strings.fontSizeScreen.xxl}</Text>
        <Divider mx={5} w={350} thickness={'3'} />
      </Stack>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Box m={'35'}>
          <Text>{R.strings.privacyPolicyScreen.text}</Text>
        </Box>
      </ScrollView>
    </Box>
  );
};

export default FontSizeScreen;

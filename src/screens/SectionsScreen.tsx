import * as React from 'react';
import {Box, Stack, ScrollView} from 'native-base';

import {R} from '../res';
import {routes} from '../navigation';
import {CardSections} from '../components';
import {deviceWidth} from '../common';

/***
 *  It contain the diferents new´s sections of the App.
 * @constructor
 */
const SectionsScreen = () => {
  return (
    <Box
      safeArea
      flex={1}
      alignItems={'center'}
      justifyContent={'center'}
      bg={'cuteBg'}>
      <ScrollView w={deviceWidth} showsVerticalScrollIndicator={false}>
        <Stack ml={30} mt={5}>
          <CardSections
            text={R.strings.sectionsScreens.currentNews}
            image={R.images.news}
            route={routes.NewsSections}
          />
          <CardSections
            text={R.strings.sectionsScreens.entertaiment}
            image={R.images.entertaiment}
          />
          <CardSections
            text={R.strings.sectionsScreens.culture}
            image={R.images.culture}
          />
          <CardSections
            text={R.strings.sectionsScreens.politics}
            image={R.images.politics}
          />
          <CardSections
            text={R.strings.sectionsScreens.virals}
            image={R.images.virals}
          />
          <CardSections
            text={R.strings.sectionsScreens.redChronicle}
            image={R.images.redChronicle}
          />
          <CardSections
            text={R.strings.sectionsScreens.kitchen}
            image={R.images.kitchen}
          />
          <CardSections
            text={R.strings.sectionsScreens.internationalNews}
            image={R.images.internationalNews}
          />
          <CardSections
            text={R.strings.sectionsScreens.sports}
            image={R.images.sports}
          />
          <CardSections
            text={R.strings.sectionsScreens.health}
            image={R.images.health}
          />
          <CardSections
            text={R.strings.sectionsScreens.business}
            image={R.images.business}
          />
        </Stack>
      </ScrollView>
    </Box>
  );
};

export default SectionsScreen;

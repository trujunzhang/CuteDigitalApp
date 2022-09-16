import * as React from 'react';
import {Stack, Checkbox, Center} from 'native-base';

import {R} from '../res';

/***
 * Group of checkboxes for the ForYou component
 * @constructor
 */
const CheckboxFavorites = () => {
  const [groupValue, setGroupValue] = React.useState([]);
  return (
    <Center>
      <Stack mt={4} ml={8}>
        <Checkbox.Group
          defaultValue={groupValue}
          accessibilityLabel="Pick a category"
          onChange={values => {
            setGroupValue(values || []);
          }}>
          <Checkbox value={R.strings.forYouScreen.check1} my="1">
            {R.strings.forYouScreen.check1}
          </Checkbox>
          <Checkbox value={R.strings.forYouScreen.check2} my="1">
            {R.strings.forYouScreen.check2}
          </Checkbox>
          <Checkbox value={R.strings.forYouScreen.check3} my="1">
            {R.strings.forYouScreen.check3}
          </Checkbox>
          <Checkbox value={R.strings.forYouScreen.check4} my="1">
            {R.strings.forYouScreen.check4}
          </Checkbox>
          <Checkbox value={R.strings.forYouScreen.check5} my="1">
            {R.strings.forYouScreen.check5}
          </Checkbox>
          <Checkbox value={R.strings.forYouScreen.check6} my="1">
            {R.strings.forYouScreen.check6}
          </Checkbox>
          <Checkbox value={R.strings.forYouScreen.check7} my="1">
            {R.strings.forYouScreen.check7}
          </Checkbox>
          <Checkbox value={R.strings.forYouScreen.check8} my="1">
            {R.strings.forYouScreen.check8}
          </Checkbox>
          <Checkbox value={R.strings.forYouScreen.check9} my="1">
            {R.strings.forYouScreen.check9}
          </Checkbox>
        </Checkbox.Group>
      </Stack>
    </Center>
  );
};

export default CheckboxFavorites;

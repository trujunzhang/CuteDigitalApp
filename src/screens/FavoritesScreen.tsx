import * as React from 'react';
import {Box} from 'native-base';

import {CheckboxFavorites} from '../components';

/***
 * Screen where the user choose what kind of news he wants.
 * @constructor
 */
const FavoritesScreen = () => {
  return (
    <Box safeArea alignItems={'flex-start'}>
      <CheckboxFavorites />
    </Box>
  );
};

export default FavoritesScreen;

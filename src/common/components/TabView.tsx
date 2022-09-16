import * as React from 'react';
import {ScrollView, Text, FlatList, Box, Pressable} from 'native-base';

import {R} from '../../res';
import {deviceWidth} from '../';
import {TabViewCard} from './';
import sections from '../Sections.json';

/***
 * The TabView component.
 * @constructor
 */
const TabView = () => {
  return (
    <ScrollView
      horizontal={true}
      w={deviceWidth}
      showsHorizontalScrollIndicator={false}
      bg={'#fff'}>
      <TabViewCard text={R.strings.sectionsScreens.currentNews} />
      <TabViewCard text={R.strings.sectionsScreens.entertaiment} />
      <TabViewCard text={R.strings.sectionsScreens.culture} />
      <TabViewCard text={R.strings.sectionsScreens.politics} />
      <TabViewCard text={R.strings.sectionsScreens.virals} />
      <TabViewCard text={R.strings.sectionsScreens.redChronicle} />
      <TabViewCard text={R.strings.sectionsScreens.kitchen} />
      <TabViewCard text={R.strings.sectionsScreens.internationalNews} />
      <TabViewCard text={R.strings.sectionsScreens.sports} />
      <TabViewCard text={R.strings.sectionsScreens.health} />
      <TabViewCard text={R.strings.sectionsScreens.business} />
    </ScrollView>
  );
};

export default TabView;

{
  /* const ItemRender = (text: string) => {
    <Pressable>
      {({isPressed}) => {
        return (
          <Box borderBottomColor={isPressed ? 'red' : undefined} ml={4}>
            <Text>{text}</Text>)
          </Box>
        );
      }}
    </Pressable>;
  };

  return (
    <FlatList
      columnWrapperStyle={{justifyContent: 'space-between'}}
      data={sections}
      keyExtractor={(item, index) => {
        return index;
      }}
      horizontal={true}
      numColumns={1}
      renderItem={({item}) => <ItemRender item={item} />}
    />*/
}

{
  /*
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 7}}
        data={sections}
        keyExtractor={(item, index) => {
          return index;
        }}
        renderItem={({item}) => <ItemRender item={item} />}
      />;
  */
}

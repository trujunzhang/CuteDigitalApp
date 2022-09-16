import { extendTheme } from 'native-base';
import { ICustomTheme } from 'native-base';
import { fontConfig, fonts } from './font';

/***
 * Custom Theme for the brand. All the customizations are the colorShemes that Google allowed.
 * The CubaCute Standard Color are: cuteBlue=500, cuteRed=500, cuteGray=700 and cuteGrayOther=50.
 */
const customTheme = extendTheme({
  colors: {
    cuteBlue: {
      50: '#def4ff',
      100: '#b0dbff',
      200: '#80c4ff',
      300: '#147ae4',
      400: '#50acfe',
      500: '#004480',
      600: '#2694fc',
      700: '#085fb2',
      800: '#00294f',
      900: '#000f1f',
    },
    cuteBlueAlternative: {
      50: '#def4ff',
      100: '#b0dbff',
      200: '#80c4ff',
      300: '#50acfe',
      400: '#2694fc',
      500: '#147ae4',
      600: '#085fb2',
      700: '#004480',
      800: '#00294f',
      900: '#000f1f',
    },

    cuteRed: {
      50: '#ffe1e1',
      100: '#ffb1b1',
      200: '#ff7f7f',
      300: '#ff4c4c',
      400: '#ff1a1a',
      500: '#e60000',
      600: '#b40000',
      700: '#810000',
      800: '#500000',
      900: '#210000',
    },
    cuteGray: {
      50: '#fbf0f2',
      100: '#dcd8d9',
      200: '#bfbfbf',
      300: '#a6a6a6',
      400: '#8c8c8c',
      500: '#737373',
      600: '#595959',
      700: '#404040',
      800: '#282626',
      900: '#150a0d',
    },
    cuteGrayOther: {
      50: '#f0f0f5',
      100: '#d2d2db',
      200: '#b4b4c4',
      300: '#9696ae',
      400: '#797899',
      500: '#5f5e7f',
      600: '#4a4a63',
      700: '#353546',
      800: '#201f29',
      900: '#0a0a0f',
    },

    cuteBg: '#fff',
  },

  /*Custom Fonts*/
  fontConfig,

  fonts,

  /*Custom Components*/
  components: {
    Button: {
      defaultProps: {
        rounded: 'full',
        w: 270,
        h: '10',
        colorScheme: 'cuteBlue',
        _text: {
          fontWeight: '500',
        },
      },
      variants: {
        cuteOutline: {
          borderColor: 'cuteBlue.500',
          borderWidth: '2',
        },
      },
    },
    Checkbox: {
      baseStyle: {},
      defaultProps: {
        colorScheme: 'cuteBlueAlternative',
      },
    },

    Switch: {
      baseStyle: {},
      defaultProps: {
        colorScheme: 'cuteBlueAlternative',
      },
    },

    Input: {
      baseStyle: {},
      defaultProps: {
        fontFamily: 'body',
        variant: 'underlined',
        borderColor: 'cuteGrayOther.200',
        fontSize: '11',
        _focus: {
          borderColor: 'cuteBlue.500',
        },
        w: 250,
        h: 10,
      },
    },
  },
});

/* Get the type of the CustomTheme*/
type CustomThemeType = typeof customTheme;

/* Extend the internal NativeBase Theme*/
declare module 'native-base' {
  interface ICustomTheme extends CustomThemeType { }
}

export default customTheme;

import {
  HeaderBody,
  HeaderRightFace,
  HeaderRightShare,
  HeaderSearch,
  HeaderBackArrow,
} from '../common/components';

export const options = {
  Home: {
    headerLeft: HeaderSearch,
    headerTitle: HeaderBody,
    headerRight: HeaderRightFace,
  },
  ForYou: {
    title: 'PARA Tí',
    headerLeft: HeaderBackArrow,
    headerRight: HeaderRightFace,
    headerBackVisible: false,
  },
  Login: {
    headerTitle: HeaderBody,
    headerBackVisible: false,
  },
  Register: {
    headerTitle: HeaderBody,
    headerLeft: HeaderBackArrow,
    headerBackVisible: false,
  },
  Search: {
    title: ' ',
    headerLeft: HeaderSearch,
  },
  News: {
    title: ' ',
    headerLeft: HeaderBackArrow,
    headerRight: HeaderRightShare,
    headerBackVisible: false,
  },
  Settings: {
    title: 'AJUSTES',
    headerLeft: HeaderBackArrow,
    headerBackVisible: false,
  },
  Notifications: {
    title: 'NOTIFICACIONES',
    headerLeft: HeaderBackArrow,
    headerBackVisible: false,
  },
  FontSize: {
    title: 'TAMAÑO DEL TEXTO',
    headerLeft: HeaderBackArrow,
    headerBackVisible: false,
  },
  PrivacyPolicy: {
    title: ' POLÍTICA DE PRIVACIDAD',
    headerLeft: HeaderBackArrow,
    headerBackVisible: false,
  },
  Sections: {
    title: 'SECCIONES',
    headerLeft: HeaderBackArrow,
    headerBackVisible: false,
  },
  User: {
    title: 'USUARIO',
    headerLeft: HeaderBackArrow,
    headerBackVisible: false,
  },
  Favorites: {
    title: 'PREFERENCIAS FAVORITOS',
    headerLeft: HeaderBackArrow,
    headerBackVisible: false,
  },
  NewsSections: {
    headerLeft: HeaderSearch,
    headerTitle: HeaderBody,
    headerRight: HeaderRightFace,
    headerBackVisible: false,
  },
  NewsForYou: {
    title: 'PARA TÍ',
    headerRight: HeaderRightFace,
    headerLeft: HeaderBackArrow,
    headerBackVisible: false,
  },
  SettingsUserRegistered: {
    title: 'AJUSTES',
    headerLeft: HeaderBackArrow,
    headerBackVisible: false,
  },
};

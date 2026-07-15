import type { StrapiApp } from '@strapi/strapi/admin';
import logo from './logo.png';

export default {
  config: {
    auth: {
      logo,
    },
    head: {
      favicon: logo,
    },
    menu: {
      logo,
    },
    translations: {
      en: {
        'Auth.form.welcome.title': 'Rotary Blood Centre',
        'Auth.form.welcome.subtitle': 'Log in to your admin account',
        'app.components.LeftMenu.navbrand.title': 'Rotary Blood Centre',
        'app.components.LeftMenu.navbrand.workplace': 'Admin Panel',
      },
    },
    theme: {
      light: {
        colors: {
          primary100: '#ffe8e8',
          primary200: '#ffc2c2',
          primary500: '#e02b2b',
          primary600: '#c91e1e',
          primary700: '#aa1616',
          buttonPrimary500: '#c91e1e',
          buttonPrimary600: '#aa1616',
        },
      },
      dark: {
        colors: {
          primary100: '#ffe8e8',
          primary200: '#ffc2c2',
          primary500: '#e02b2b',
          primary600: '#c91e1e',
          primary700: '#aa1616',
          buttonPrimary500: '#c91e1e',
          buttonPrimary600: '#aa1616',
        },
      },
    },
  },
  bootstrap(app: StrapiApp) {},
};

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
  },
  bootstrap(app: StrapiApp) {},
};

import {
  BookOpenIcon,
  HeartIcon,
  HomeIcon,
  RocketLaunchIcon,
} from '@heroicons/react/24/outline'

export const defaultMainNav = [
  {
    name: 'common:navs.defaultMainNav.news',
    href: '/news/',
  },
  {
    name: 'common:navs.defaultMainNav.doc',
    href: '/doc/',
  },
]

export const commonFooterNav = [
  {
    name: 'common:navs.commonFooterNav.news',
    href: '/news/',
  },
  {
    name: 'common:navs.commonFooterNav.doc',
    href: '/doc/',
  },
  {
    name: 'common:navs.commonFooterNav.privacy',
    href: '/legal/privacy-policy/',
  },
]

export const docMenuNav = [
  { name: 'doc:menuNav.home', href: '/doc/', icon: HomeIcon },
  {
    name: 'doc:menuNav.general.groupTitle',
    children: [
      {
        name: 'doc:menuNav.general.motivation',
        href: '/doc/general/motivation/',
        icon: HeartIcon,
      },
      {
        name: 'doc:menuNav.general.quickstart',
        href: '/doc/general/quickstart/',
        icon: RocketLaunchIcon,
      },
      {
        name: 'doc:menuNav.general.readme',
        href: '/doc/general/readme/',
        icon: BookOpenIcon,
      },
    ],
  },
]

export const docHeaderNav = [
  {
    name: 'doc:headerNav.home',
    href: '/',
  },
  {
    name: 'doc:headerNav.news',
    href: '/news/',
  },
]

export const userMenuNav = [
  { name: 'user:menuNav.home', href: '/user/', icon: HomeIcon },
  {
    name: 'user:menuNav.general.groupTitle',
    children: [
      {
        name: 'user:menuNav.general.motivation',
        href: '/user/chat/',
        icon: HeartIcon,
      },
      {
        name: 'user:menuNav.general.quickstart',
        href: '/user/settings/',
        icon: RocketLaunchIcon,
      },
    ],
  },
]

export const userHeaderNav = [
  {
    name: 'user:headerNav.home',
    href: '/',
  },
  {
    name: 'user:headerNav.news',
    href: '/news/',
  },
]

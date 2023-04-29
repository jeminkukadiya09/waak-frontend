// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'App',
    path: '/',
    icon: icon('ic_analytics'),
  },
  {
    title: 'E-commerce',
    path: '/dashboard/user',
    icon: icon('ic_user'),
  },
  {
    title: 'Analytics',
    path: '/dashboard/products',
    icon: icon('ic_cart'),
  },
  {
    title: 'Banking',
    path: '/dashboard/blog',
    icon: icon('ic_blog'),
  },
  {
    title: 'Booking',
    path: '/login',
    icon: icon('ic_lock'),
  }
];
const navConfig2 = [
  {
    title: 'Mail',
    path: '/dashboard/app',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Chat',
    path: '/dashboard/user',
    icon: icon('ic_user'),
  },
  {
    title: 'Calendar',
    path: '/dashboard/products',
    icon: icon('ic_cart'),
  },
  {
    title: 'Kanban',
    path: '/dashboard/blog',
    icon: icon('ic_blog'),
  }
];

const navConfig3 = [
  {
    title: 'User',
    // path: '/dashboard/blog',
    icon: icon('ic_blog'),
    isOption:true,
    option:[{
      title: 'Kanban',
      path: '/dashboard/blog',
      icon: icon('ic_blog'),
    },
    {
      title: 'Calendar',
      path: '/dashboard/products',
      icon: icon('ic_cart'),
    },
  ]
  },
  {
    title: 'E-Commerce',
    // path: '/dashboard/blog',
    icon: icon('ic_blog'),
    isOption:true,
    option:[{
      title: 'Kanban',
      path: '/dashboard/blog',
      icon: icon('ic_blog'),
    },
    {
      title: 'Calendar',
      path: '/dashboard/products',
      icon: icon('ic_cart'),
    },
  ]
  },
    {
    title: 'Invoice',
    // path: '/dashboard/blog',
    icon: icon('ic_blog'),
    isOption:true,
    option:[{
      title: 'Kanban',
      path: '/dashboard/blog',
      icon: icon('ic_blog'),
    },
    {
      title: 'Calendar',
      path: '/dashboard/products',
      icon: icon('ic_cart'),
    },
  ]
  },
  {
    title: 'Blog',
    // path: '/dashboard/blog',
    icon: icon('ic_blog'),
    isOption:true,
    option:[{
      title: 'Kanban',
      path: '/dashboard/blog',
      icon: icon('ic_blog'),
    },
    {
      title: 'Calendar',
      path: '/dashboard/products',
      icon: icon('ic_cart'),
    },
  ]
  },
];

export {navConfig, navConfig2, navConfig3};

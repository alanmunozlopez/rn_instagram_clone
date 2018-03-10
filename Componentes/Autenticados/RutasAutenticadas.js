import { TabNavigator } from 'react-navigation';
import { StackHome } from './StackHome';
import Add from './Add';
import Follow from './Follow';
import Profile from './Profile';
import Search from './Search';

const RutasAutenticadas = TabNavigator({
  Home: {
    screen: StackHome,
  },
  Search: {
    screen: Search,
  },
  Add: {
    screen: Add,
  },
  Follow: {
    screen: Follow,
  },
  Profile: {
    screen: Profile,
  },
},
{
  tabBarPosition: 'bottom',
},
);

export { RutasAutenticadas };
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home/HomeScreen';
import SearchScreen from '../screens/Search/SearchScreen';
import OrdersScreen from '../screens/Orders/OrdersScreen';
import FavoritesScreen from '../screens/Favorites/FavoritesScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import HomeIcon from '@/assets/images/home.svg';
import SearchIcon from '@/assets/images/search.svg';
import OrdersIcon from '@/assets/images/orders.svg';
import FavoritesIcon from '@/assets/images/favorites.svg';
import ProfileIcon from '@/assets/images/profile.svg';

const Tab = createBottomTabNavigator();

export default function MainNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'green', // Cor da aba ativa
        tabBarInactiveTintColor: 'gray', // Cor da aba inativa
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ size }) => <HomeIcon width={size} height={size} />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ size }) => <SearchIcon width={size} height={size} />,
        }}
      />
      <Tab.Screen
        name="Orders"
        component={OrdersScreen}
        options={{
          tabBarIcon: ({ size }) => <OrdersIcon width={size} height={size} />,
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          tabBarIcon: ({ size }) => (
            <FavoritesIcon width={size} height={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ size }) => <ProfileIcon width={size} height={size} />,
        }}
      />
    </Tab.Navigator>
  );
}

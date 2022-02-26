import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {Config, Counters} from '../../screens';
import {RootRoutes, RootTabsParamsList} from '../types';
import {colors, metrics} from '../../styles';

const {Navigator, Screen} = createBottomTabNavigator<RootTabsParamsList>();

const tabsScreenProps: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarStyle: {
    height: 80,
    backgroundColor: colors.primary.dark,
  },
  tabBarItemStyle: {height: 50},
  tabBarLabelStyle: {
    fontSize: metrics.font_size.xxx_small,
  },
  tabBarActiveTintColor: colors.primary.light,
  tabBarInactiveTintColor: colors.secondary.default,
};

const Root: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={tabsScreenProps}>
        <Screen name={RootRoutes.COUNTERS} component={Counters} />
        <Screen name={RootRoutes.CONFIG} component={Config} />
      </Navigator>
    </NavigationContainer>
  );
};

export default Root;

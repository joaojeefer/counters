import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {Config, Counters} from '../../screens';
import {RootRoutes, RootTabsParamsList} from '../types';
import {colors, metrics} from '../../styles';
import {StatusBar} from 'react-native';

const {Navigator, Screen} = createBottomTabNavigator<RootTabsParamsList>();

const tabsScreenProps: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarStyle: {
    height: 70,
    backgroundColor: colors.primary.dark,
  },
  tabBarItemStyle: {height: metrics.spacing.xx_large},
  tabBarLabelStyle: {
    fontSize: metrics.font_size.xxx_small,
  },
  tabBarActiveTintColor: colors.primary.light,
  tabBarInactiveTintColor: colors.secondary.light,
  tabBarHideOnKeyboard: true,
};

const Root: React.FC = () => {
  return (
    <>
      <StatusBar
        backgroundColor={colors.primary.dark}
        barStyle="light-content"
      />
      <NavigationContainer>
        <Navigator screenOptions={tabsScreenProps}>
          <Screen name={RootRoutes.COUNTERS} component={Counters} />
          <Screen name={RootRoutes.CONFIG} component={Config} />
        </Navigator>
      </NavigationContainer>
    </>
  );
};

export default Root;

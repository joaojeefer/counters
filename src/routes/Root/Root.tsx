import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Config, Counters} from '../../screens';
import {RootRoutes, RootTabsParamsList} from '../types';

const {Navigator, Screen} = createBottomTabNavigator<RootTabsParamsList>();

const Root: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{headerShown: false}}>
        <Screen name={RootRoutes.COUNTERS} component={Counters} />
        <Screen name={RootRoutes.CONFIG} component={Config} />
      </Navigator>
    </NavigationContainer>
  );
};

export default Root;

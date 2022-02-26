import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Config, Counters} from '../../screens';
import {RootRoutes, RootStackParamsList} from '../types';

const {Navigator, Screen} = createNativeStackNavigator<RootStackParamsList>();

const Root: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name={RootRoutes.COUNTERS} component={Counters} />
        <Screen name={RootRoutes.CONFIG} component={Config} />
      </Navigator>
    </NavigationContainer>
  );
};

export default Root;

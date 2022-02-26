import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

const Counter: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Counter 1</Text>
      <Text style={styles.counterText}>0008</Text>
    </View>
  );
};

export default Counter;

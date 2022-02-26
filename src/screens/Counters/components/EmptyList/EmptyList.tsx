import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

const EmptyList: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.descriptionText}>No counters configured!</Text>
    </View>
  );
};

export default EmptyList;

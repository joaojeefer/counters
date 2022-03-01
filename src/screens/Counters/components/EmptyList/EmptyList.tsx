import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors, metrics} from '../../../../styles';
import styles from './styles';

const EmptyList: React.FC = () => {
  return (
    <View style={styles.container}>
      <Icon
        name="sad-outline"
        size={metrics.spacing.xxx_large}
        color={colors.secondary.dark}
      />
      <Text style={styles.descriptionText}>No counters configured!</Text>
    </View>
  );
};

export default EmptyList;

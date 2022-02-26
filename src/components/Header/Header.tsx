import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{title}</Text>
    </View>
  );
};

export default Header;

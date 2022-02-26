import React from 'react';
import {Text} from 'react-native';
import styles, {Container} from './styles';

interface CounterProps {
  title: string;
}

const Counter: React.FC<CounterProps> = ({title}) => {
  return (
    <Container active={true}>
      <Text style={styles.titleText}>{title}</Text>
      <Text style={styles.counterText}>0008</Text>
    </Container>
  );
};

export default Counter;

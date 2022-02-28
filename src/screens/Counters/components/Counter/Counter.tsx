import React, {useContext, useEffect, useState} from 'react';
import {Text} from 'react-native';
import {CounterContext} from '../../../../contexts/CounterContext';
import styles, {Container} from './styles';

interface CounterProps {
  id: string;
  title: string;
  active: boolean;
  startTime?: number;
}

const Counter: React.FC<CounterProps> = ({
  id,
  title,
  active,
  startTime = 0,
}) => {
  const [time, setTime] = useState(startTime);

  const {activateCounter, counter} = useContext(CounterContext);

  useEffect(() => {
    if (active) {
      setTime(startTime + counter);
    }
  }, [active, counter, startTime]);

  const handleActivateCounter = () => {
    if (!active) {
      activateCounter(id);
    }
  };

  return (
    <Container active={active} onPress={handleActivateCounter}>
      <Text style={styles.titleText}>{title}</Text>
      <Text style={styles.counterText}>{active ? time : startTime}</Text>
    </Container>
  );
};

export default Counter;

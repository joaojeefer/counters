import React, {useContext, useState} from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {ActionButton, Header} from '../../components';
import {CounterContext} from '../../contexts/CounterContext';
import styles from './styles';

const Config: React.FC = () => {
  const [increment, setIncrement] = useState('0');
  const [decrement, setDecrement] = useState('0');

  const {
    counters,
    addCounter,
    removeActiveCounter,
    incrementActiveCounter,
    decrementActiveCounter,
    resetActiveCounter,
  } = useContext(CounterContext);

  return (
    <View style={styles.container}>
      <Header title="Config" />
      <ScrollView style={styles.scrolledContent}>
        <Text style={styles.titleText}>Counters</Text>
        <View style={styles.buttonsArea}>
          <ActionButton title="Add Counter" onPress={addCounter} />
          <View style={styles.betweenButtons} />
          <ActionButton title="Remove Counter" onPress={removeActiveCounter} />
        </View>

        <Text style={styles.titleText}>Selected Counter</Text>
        <View style={styles.inputsArea}>
          <View style={styles.inputRow}>
            <TextInput
              style={styles.input}
              placeholder="0"
              keyboardType="numeric"
              onChangeText={setIncrement}
              value={increment}
              onSubmitEditing={() => incrementActiveCounter(Number(increment))}
            />
            <TouchableOpacity
              disabled={counters.length < 1}
              style={styles.inputButton}
              onPress={() => incrementActiveCounter(Number(increment))}>
              <Text style={styles.inputButtonText}>+</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.inputRow}>
            <TextInput
              style={styles.input}
              placeholder="0"
              keyboardType="numeric"
              onChangeText={setDecrement}
              value={decrement}
              onSubmitEditing={() => decrementActiveCounter(Number(decrement))}
            />
            <TouchableOpacity
              disabled={counters.length < 1}
              style={styles.inputButton}
              onPress={() => decrementActiveCounter(Number(decrement))}>
              <Text style={styles.inputButtonText}>-</Text>
            </TouchableOpacity>
          </View>
          <ActionButton title="Reset Counter" onPress={resetActiveCounter} />
        </View>
      </ScrollView>
    </View>
  );
};

export default Config;

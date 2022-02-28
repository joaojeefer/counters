import React, {createContext, ReactNode, useRef, useState} from 'react';
import {Alert} from 'react-native';
import uuid from 'react-native-uuid';
import {Counter} from '../models/counter';

interface CounterContextData {
  counters: Counter[];
  activateCounter: (idCounter: string) => void;
  addCounter: () => void;
  removeActiveCounter: () => void;
  incrementActiveCounter: (value: number) => void;
  decrementActiveCounter: (value: number) => void;
  resetActiveCounter: () => void;
  counter: number;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
}

interface CounterProviderProps {
  children: ReactNode;
}

export const CounterContext = createContext({} as CounterContextData);

export function CounterProvider({children}: CounterProviderProps) {
  const [counters, setCounters] = useState<Counter[]>([]);
  const [counter, setCounter] = useState(0);

  let timer = useRef<Timer>();

  const runTimer = () => {
    timer.current = setInterval(() => setCounter(c => c + 1), 1000);
  };

  const clearTimer = () => {
    clearInterval(timer.current);
  };

  const activateCounter = (idCounter: string) => {
    clearTimer();

    setCounters(oldCounters =>
      oldCounters.map(c => {
        return {
          ...c,
          startTime: c.active ? c.startTime + counter : c.startTime,
        };
      }),
    );

    setCounter(0);

    setCounters(oldCounters =>
      oldCounters.map(c => {
        return {
          ...c,
          active: c.id === idCounter,
        };
      }),
    );

    runTimer();
  };

  const addCounter = () => {
    const newCounter: Counter[] = [
      {id: uuid.v4(), active: false, startTime: 0},
    ];
    setCounters(oldCounters => newCounter.concat(oldCounters));
    activateCounter(String(newCounter[0].id));
  };

  const removeActiveCounter = () => {
    if (counters.length > 0) {
      const newCounters = counters.filter(c => !c.active);
      setCounters(newCounters);
      if (newCounters.length > 0) {
        activateCounter(newCounters[0].id.toString());
      }
    } else {
      Alert.alert('Error', 'There is no active counters to remove!');
    }
  };

  const incrementActiveCounter = (value: number) => {
    if (value > 0) {
      setCounters(oldCounters =>
        oldCounters.map(c => {
          return {
            ...c,
            startTime: c.active ? c.startTime + value : c.startTime,
          };
        }),
      );
    } else {
      Alert.alert('Error', 'Enter a value greater than zero!');
    }
  };

  const decrementActiveCounter = (value: number) => {
    console.log('dec');
    if (value > 0) {
      setCounters(oldCounters =>
        oldCounters.map(c => {
          return {
            ...c,
            startTime: c.active ? c.startTime - value : c.startTime,
          };
        }),
      );
    } else {
      Alert.alert('Error', 'Enter a value greater than zero!');
    }
  };

  const resetActiveCounter = () => {
    clearTimer();
    setCounters(oldCounters =>
      oldCounters.map(c => {
        return {
          ...c,
          startTime: c.active ? 0 : c.startTime,
        };
      }),
    );
    setCounter(0);
    runTimer();
  };

  return (
    <CounterContext.Provider
      value={{
        counters,
        activateCounter,
        addCounter,
        removeActiveCounter,
        incrementActiveCounter,
        decrementActiveCounter,
        resetActiveCounter,
        counter,
        setCounter,
      }}>
      {children}
    </CounterContext.Provider>
  );
}

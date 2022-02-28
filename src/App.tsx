import React from 'react';
import {CounterProvider} from './contexts/CounterContext';
import {Root as RootRoutes} from './routes';

const App: React.FC = () => {
  return (
    <CounterProvider>
      <RootRoutes />
    </CounterProvider>
  );
};

export default App;

import React, {useContext} from 'react';
import {FlatList, View} from 'react-native';
import {Header} from '../../components';
import {Counter, EmptyList} from './components';
import {CounterContext} from '../../contexts/CounterContext';
import styles from './styles';

const Counters: React.FC = () => {
  const {counters} = useContext(CounterContext);

  return (
    <View style={styles.container}>
      <Header title="Counters" />
      <FlatList
        data={counters}
        keyExtractor={(_, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrolledContent}
        renderItem={({item, index}) => (
          <Counter
            id={item.id.toString()}
            title={`Counter ${index + 1}`}
            active={item.active}
            startTime={item.startTime}
          />
        )}
        ListEmptyComponent={() => <EmptyList />}
        ItemSeparatorComponent={() => <View style={styles.betweenItems} />}
        ListFooterComponent={() => <View style={styles.listFooter} />}
      />
    </View>
  );
};

export default Counters;

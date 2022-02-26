import React from 'react';
import {FlatList, View} from 'react-native';
import {Header} from '../../components';
import {Counter, EmptyList} from './components';
import styles from './styles';

const Counters: React.FC = () => {
  return (
    <View style={styles.container}>
      <Header title="Counters" />
      <FlatList
        data={[]}
        keyExtractor={(_, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrolledContent}
        renderItem={() => <Counter />}
        ListEmptyComponent={() => <EmptyList />}
        ItemSeparatorComponent={() => <View style={styles.betweenItems} />}
        ListFooterComponent={() => <View style={styles.listFooter} />}
      />
    </View>
  );
};

export default Counters;

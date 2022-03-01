import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  descriptionText: {
    fontSize: metrics.font_size.small,
    color: colors.secondary.dark,
  },
});

export default styles;

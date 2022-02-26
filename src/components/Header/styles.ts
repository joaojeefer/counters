import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../styles';

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: '100%',
    backgroundColor: colors.primary.dark,
    justifyContent: 'flex-end',
    paddingHorizontal: metrics.spacing.medium,
  },
  titleText: {
    fontSize: metrics.font_size.x_large,
    fontWeight: 'bold',
    color: colors.secondary.lightest,
  },
});

export default styles;

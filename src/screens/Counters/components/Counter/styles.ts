import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../../../styles';

const styles = StyleSheet.create({
  container: {
    height: 150,
    width: '100%',
    padding: metrics.spacing.x_small,
    backgroundColor: colors.secondary.light,
    borderRadius: metrics.radius.small,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleText: {
    fontSize: metrics.font_size.small,
    fontWeight: 'bold',
    lineHeight: metrics.spacing.medium,
    color: colors.secondary.default,
  },
  counterText: {
    fontSize: 60,
    fontWeight: 'bold',
    color: colors.secondary.dark,
    alignSelf: 'flex-end',
  },
});

export default styles;

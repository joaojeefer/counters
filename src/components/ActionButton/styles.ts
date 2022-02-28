import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: metrics.spacing.xx_small,
    paddingHorizontal: metrics.spacing.large,
    backgroundColor: colors.secondary.light,
    borderRadius: metrics.radius.small,
    shadowColor: colors.secondary.dark,
    shadowOffset: {
      width: metrics.spacing.xxx_small,
      height: metrics.spacing.xx_small,
    },
    shadowOpacity: 1,
    shadowRadius: metrics.radius.small,
    elevation: 5,
  },
  titleText: {
    fontSize: metrics.font_size.x_small,
    fontWeight: 'bold',
    color: colors.primary.dark,
    textAlign: 'center',
  },
});

export default styles;

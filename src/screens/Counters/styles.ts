import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary.default,
  },
  scrolledContent: {
    flexGrow: 1,
    marginTop: metrics.spacing.medium,
    paddingHorizontal: metrics.spacing.medium,
  },
  betweenItems: {
    marginVertical: metrics.spacing.xx_small,
  },
  listFooter: {
    marginBottom: metrics.spacing.xx_large,
  },
});

export default styles;

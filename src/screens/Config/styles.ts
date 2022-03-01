import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../styles';

const styles = StyleSheet.create({
  container: {flex: 1},
  scrolledContent: {
    flexGrow: 1,
    backgroundColor: colors.primary.default,
    padding: metrics.spacing.medium,
  },
  titleText: {
    fontSize: metrics.font_size.medium,
    fontWeight: 'bold',
    color: colors.secondary.dark,
  },
  buttonsArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: metrics.spacing.small,
  },
  betweenButtons: {
    marginHorizontal: metrics.spacing.small,
  },
  inputsArea: {
    marginVertical: metrics.spacing.small,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: metrics.spacing.small,
  },
  input: {
    height: metrics.spacing.x_large,
    width: 100,
    padding: 0,
    paddingLeft: metrics.spacing.x_small,
    backgroundColor: colors.secondary.light,
    fontSize: metrics.font_size.medium,
    color: colors.primary.dark,
    borderColor: colors.primary.dark,
    borderTopLeftRadius: metrics.radius.small,
    borderBottomLeftRadius: metrics.radius.small,
  },
  inputButton: {
    height: metrics.spacing.x_large,
    width: metrics.spacing.xx_large,
    paddingHorizontal: metrics.spacing.x_small,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary.dark,
    borderTopRightRadius: metrics.radius.small,
    borderBottomRightRadius: metrics.radius.small,
  },
  inputButtonText: {
    fontSize: metrics.font_size.small,
    color: colors.secondary.lightest,
  },
});

export default styles;

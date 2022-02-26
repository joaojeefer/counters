import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import {colors, metrics} from '../../../../styles';

interface ContainerProps {
  active: boolean;
}

export const Container = styled.TouchableOpacity<ContainerProps>`
  height: 150px;
  width: 100%;
  padding: ${metrics.spacing.x_small}px;
  background-color: ${colors.secondary.light};
  border-radius: ${metrics.radius.small}px;
  flex-direction: row;
  justify-content: space-between;
  opacity: ${({active}) => (active ? 1 : metrics.opacity[3])};
  box-shadow: 0 ${metrics.spacing.xxx_small}px ${metrics.spacing.xx_small}px
    ${colors.secondary.dark};
  elevation: 5;
`;

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

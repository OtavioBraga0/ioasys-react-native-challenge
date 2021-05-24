import {colors} from '../constants';
// @ts-ignore
import styled from 'styled-components/native';
import {TypeProps} from '../../components/Type';

export const Container = styled.TouchableOpacity`
  padding: 12px 24px;
  background-color: ${(props: TypeProps) =>
    props.selected ? colors.color2 : colors.color7};
  border-radius: 58px;

  margin-left: 16px;
`;

export const Title = styled.Text`
  color: ${(props: TypeProps) =>
    props.selected ? colors.color7 : colors.color2};

  font-weight: bold;
  font-size: 18px;
  line-height: 23px;
`;

import {StyleSheet} from 'react-native';
// @ts-ignore
import styled from 'styled-components/native';
import {colors} from '../constants';

export const Container = styled.View`
  width: 100%;
  position: relative;
  padding-right: 24px;
`;

export const Content = styled.View`
  width: 100%;
  background-color: ${colors.color7};
  border-radius: 24px;

  padding: 12px;

  margin-bottom: 16px;

  height: 88px;

  flex-direction: row;
  align-items: center;
`;

export const Logo = styled.Image`
  height: 100%;
  width: 85px;
  border-radius: 16px;

  margin-right: 8px;
`;

export const Name = styled.Text`
  color: black;

  font-weight: 500;
  font-size: 16px;
  line-height: 18px;

  margin-bottom: 8px;
  margin-right: 16px;

  width: 100%;
`;

export const Type = styled.Text`
  font-weight: 500;
  font-size: 14px;
  line-height: 14px;

  color: ${colors.color8};
  margin-right: 16px;
`;

export const Button = styled.TouchableHighlight`
  position: absolute;
  height: 48px;
  width: 48px;
  border-radius: 24px;

  right: 0;
  top: 50%;

  background-color: ${colors.color3};

  align-items: center;
  justify-content: center;
`;

export const Description = styled.View`
  width: 60%;
`;

export const ButtonIcon = styled.Image``;

export const styles = StyleSheet.create({
  actionButton: {
    transform: [{translateY: -30}, {rotateZ: '90deg'}],
  },
});

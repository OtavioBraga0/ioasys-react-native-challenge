import {colors} from '../constants';

// @ts-ignore
import styled from 'styled-components/native';

export const Main = styled.SafeAreaView`
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: white;
`;

export const SafeArea = styled.ScrollView`
  height: 100%;
  width: 100%;
`;

export const Form = styled.View`
  align-items: center;
  justify-content: center;
  height: 100%;
  flex: 1;
  width: 100%;
  padding: 0 24px;

  margin: 100px 0;
`;

export const Logo = styled.Image`
  margin-bottom: 136px;
`;

export const Title = styled.Text`
  font-size: 18px;
  line-height: 16px;
  font-weight: 400;
`;

export const SubmitButton = styled.TouchableOpacity`
  background-color: ${colors.color2};
  justify-content: center;
  align-items: center;
  padding: 16px 0;
  width: 100%;

  margin-top: 40px;

  border-radius: 8px;
`;

export const SubmitButtonText = styled.Text`
  color: white;
  font-size: 16px;
  line-height: 24px;
`;

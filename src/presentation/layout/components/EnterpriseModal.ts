// @ts-ignore
import styled from 'styled-components/native';
import {colors} from '../constants';

export const Content = styled.View`
  padding: 42px 24px;

  flex: 1;
  height: 100%;
`;

export const Logo = styled.Image`
  width: 86px;
  height: 64px;

  border-radius: 16px;

  margin: 0 auto;
  margin-bottom: 40px;
`;

export const Title = styled.Text`
  font-weight: 500;
  font-size: 24px;
  line-height: 31px;

  margin-bottom: 16px;
`;

export const Type = styled.Text`
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;

  margin-bottom: 42px;
  color: ${colors.color8};
`;

export const Description = styled.Text`
  font-size: 16px;
  line-height: 28px;

  margin-bottom: 42px;

  height: auto;
  flex: 1;
`;

export const Information = styled.View`
  flex-direction: row;
  align-items: center;

  margin-bottom: 32px;
`;

export const InformationDetails = styled.View`
  margin-left: 22px;
`;

export const InformationTitle = styled.Text`
  font-weight: 500;
  font-size: 10px;
  line-height: 13px;

  margin-bottom: 4px;

  color: ${colors.color8};
`;

export const InformationDescription = styled.Text``;

export const Social = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const SocialButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;

  margin: 0 auto;

  width: 72px;
  height: 72px;
  border-radius: 36px;

  background-color: ${colors.color7};
`;

export const Backdrop = styled.View`
  background-color: rgba(0, 0, 0, 0.7);
  justify-content: center;
  align-items: center;

  flex: 1;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  z-index: 9;
`;
export const ModalBody = styled.View`
  background-color: white;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  position: absolute;
  top: 32px;
  right: 0;
  left: 0;
  bottom: 0;

  z-index: 10;
`;

export const CloseButton = styled.TouchableOpacity`
  position: absolute;
  right: 24px;
  top: 24px;

  width: 40px;
  height: 40px;
  border-radius: 20px;

  background-color: ${colors.color7};

  justify-content: center;
  align-items: center;

  z-index: 3;
`;

import {colors} from '../constants';

// @ts-ignore
import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';

export const Container = styled.View`
  height: 100%;
  background-color: white;
`;

export const Header = styled.View`
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
  padding: 0 24px;
  padding-top: 16px;
`;

export const Logo = styled.Image`
  width: 86px;
`;

export const Profile = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;

export const ProfileImage = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 20px;
`;

export const HorizontalSpace = styled.View`
  margin: 0 24px;
`;

export const SessionTitle = styled.Text`
  color: ${colors.color2};
  font-size: 12px;
  line-height: 15px;

  margin-top: 24px;
  margin-bottom: 4px;
`;

export const Types = styled.FlatList`
  padding-bottom: 10px;
  padding-left: 8px;
  margin-left: -24px;
  overflow: visible;
  width: 100%;
`;

export const Enterprises = styled.ScrollView`
  height: 100%;
  width: 100%;
`;

export const MenuAction = styled.TouchableOpacity`
  margin-bottom: 16px;
`;

export const MenuActionText = styled.Text`
  color: white;

  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
`;

export const styles = StyleSheet.create({
  logo: {
    resizeMode: 'contain',
  },
  profileMenu: {
    backgroundColor: colors.color3,
    padding: 16,
    paddingBottom: 0,

    width: 85,

    position: 'absolute',
    top: '100%',
    right: 0,

    borderRadius: 5,
  },
});

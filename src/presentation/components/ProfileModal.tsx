import React, {Dispatch, SetStateAction} from 'react';
import {
  Content,
  Avatar,
  Name,
  Email,
  Information,
  InformationDescription,
  InformationTitle,
  InformationDetails,
} from '../layout/components/ProfileModal';

import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import {colors} from '../layout/constants';
import {useSelector} from 'react-redux';

import {authSelector} from '../../domain/ducks/authReducer';
import {Modal, ScrollView, StyleSheet} from 'react-native';
import {
  Backdrop,
  ModalBody,
  CloseButton,
} from '../layout/components/ProfileModal';

// @ts-ignore
import profilePlaceholder from '../assets/profile_placeholder.png';

type ProfileModalProps = {
  profileModalVisible: boolean;
  setProfileModalVisible: Dispatch<SetStateAction<boolean>>;
};

export const ProfileModal: React.FC<ProfileModalProps> = ({
  profileModalVisible,
  setProfileModalVisible,
}) => {
  const {user} = useSelector(authSelector);

  if (!user?.investor) {
    return <></>;
  }

  return (
    <>
      <Modal animationType="fade" visible={profileModalVisible}>
        <Backdrop />
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={profileModalVisible}
        onRequestClose={() => setProfileModalVisible(false)}>
        <ModalBody>
          <CloseButton onPress={() => setProfileModalVisible(false)}>
            <AntDesignIcon name="close" color={colors.color8} size={20} />
          </CloseButton>
          <ScrollView style={StyleSheet.absoluteFill}>
            <Content>
              <Avatar
                source={
                  (((process.env.REACT_APP_BASE_URL as string) +
                    user?.investor.photo) as string) || profilePlaceholder
                }
              />
              <Name>{user?.investor.investor_name}</Name>
              <Email>{user?.investor.email}</Email>

              {user?.investor.city && user?.investor.country && (
                <Information>
                  <MaterialCommunityIcon
                    name="map-marker"
                    color={colors.color3}
                    size={26}
                  />
                  <InformationDetails>
                    <InformationTitle>Location</InformationTitle>
                    <InformationDescription>
                      {user.investor?.city}, {user.investor?.country}
                    </InformationDescription>
                  </InformationDetails>
                </Information>
              )}

              {user?.investor.balance && (
                <Information>
                  <FontAwesomeIcon
                    name="balance-scale"
                    color={colors.color3}
                    size={24}
                  />
                  <InformationDetails>
                    <InformationTitle>Balance</InformationTitle>
                    <InformationDescription>
                      {user.investor?.balance}
                    </InformationDescription>
                  </InformationDetails>
                </Information>
              )}

              <Information>
                <FontAwesome5Icon
                  name="comments-dollar"
                  color={colors.color3}
                  size={26}
                />
                <InformationDetails>
                  <InformationTitle>Super Angel</InformationTitle>
                  <MaterialCommunityIcon
                    name={
                      user.investor.super_angel
                        ? 'check-circle-outline'
                        : 'close-circle-outline'
                    }
                    color={user.investor.super_angel ? 'green' : 'red'}
                    size={20}
                  />
                </InformationDetails>
              </Information>
            </Content>
          </ScrollView>
        </ModalBody>
      </Modal>
    </>
  );
};

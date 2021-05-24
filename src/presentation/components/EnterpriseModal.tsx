import React, {Dispatch, SetStateAction} from 'react';
import {Linking, Modal, ScrollView, StyleSheet} from 'react-native';
import {useEnterprise} from '../hooks/useEnterprise';
import {
  Content,
  Description,
  Information,
  Logo,
  Title,
  Type,
  InformationTitle,
  InformationDescription,
  InformationDetails,
  Social,
  SocialButton,
  Backdrop,
  ModalBody,
  CloseButton,
} from '../layout/components/EnterpriseModal';

import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {colors} from '../layout/constants';
import {envs} from '../utils/envs';
import {useSelector} from 'react-redux';
import {enterpriseSelector} from '../../domain/ducks/enterpriseReducer';

type EnterpriseModalProps = {
  modalVisible: boolean;
  setModalVisible: Dispatch<SetStateAction<boolean>>;
};

export const EnterpriseModal: React.FC<EnterpriseModalProps> = ({
  modalVisible,
  setModalVisible,
}) => {
  const {detailedEnterprise} = useEnterprise();

  const {isLoading} = useSelector(enterpriseSelector);

  if (isLoading || !detailedEnterprise) {
    return <></>;
  }

  return (
    <>
      <Modal animationType="fade" visible={modalVisible}>
        <Backdrop />
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <ModalBody>
          <CloseButton onPress={() => setModalVisible(false)}>
            <AntDesignIcon name="close" color={colors.color8} size={20} />
          </CloseButton>
          <ScrollView style={StyleSheet.absoluteFill}>
            <Content>
              <Logo
                source={{uri: `${envs.BASE_URL}${detailedEnterprise.photo}`}}
              />
              <Title>{detailedEnterprise.enterprise_name}</Title>
              <Type>
                {detailedEnterprise.enterprise_type.enterprise_type_name}
              </Type>
              <Description>{detailedEnterprise.description}</Description>

              {detailedEnterprise.city && detailedEnterprise.country && (
                <Information>
                  <MaterialCommunityIcon
                    name="map-marker"
                    color={colors.color3}
                    size={26}
                  />
                  <InformationDetails>
                    <InformationTitle>Location</InformationTitle>
                    <InformationDescription>
                      {detailedEnterprise.city}, {detailedEnterprise.country}
                    </InformationDescription>
                  </InformationDetails>
                </Information>
              )}

              {detailedEnterprise.phone && (
                <Information>
                  <FontAwesomeIcon
                    name="phone"
                    color={colors.color3}
                    size={24}
                  />
                  <InformationDetails>
                    <InformationTitle>Phone</InformationTitle>
                    <InformationDescription>
                      {detailedEnterprise.phone}
                    </InformationDescription>
                  </InformationDetails>
                </Information>
              )}

              <Information>
                <AntDesignIcon
                  name="linechart"
                  color={colors.color3}
                  size={26}
                />
                <InformationDetails>
                  <InformationTitle>Share Price</InformationTitle>
                  <InformationDescription>
                    {detailedEnterprise.share_price}
                  </InformationDescription>
                </InformationDetails>
              </Information>
              <Social>
                {detailedEnterprise.linkedin && (
                  <SocialButton
                    onPress={() =>
                      Linking.openURL(detailedEnterprise.linkedin as string)
                    }>
                    <MaterialCommunityIcon
                      name="linkedin"
                      color={colors.color8}
                      size={24}
                    />
                  </SocialButton>
                )}
                {detailedEnterprise.twitter && (
                  <SocialButton
                    onPress={() =>
                      Linking.openURL(detailedEnterprise.twitter as string)
                    }>
                    <MaterialCommunityIcon
                      name="twitter"
                      color={colors.color8}
                      size={24}
                    />
                  </SocialButton>
                )}
                {detailedEnterprise.facebook && (
                  <SocialButton
                    onPress={() =>
                      Linking.openURL(detailedEnterprise.facebook as string)
                    }>
                    <FontAwesomeIcon
                      name="facebook-square"
                      color={colors.color8}
                      size={24}
                    />
                  </SocialButton>
                )}
              </Social>
            </Content>
          </ScrollView>
        </ModalBody>
      </Modal>
    </>
  );
};

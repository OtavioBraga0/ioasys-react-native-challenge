import React, {Dispatch, SetStateAction, useCallback} from 'react';
import {Enterprise} from '../../domain/entities/enterprise';

import {
  Container,
  Content,
  Logo,
  Name,
  Type,
  Button,
  styles,
  ButtonIcon,
  Description,
} from '../layout/components/EnterpriseCard';
import {envs} from '../utils/envs';

// @ts-ignore
import doubleArrow from '../assets/icons/double-arrow.png';
import {colors} from '../layout/constants';

type EnterpriseCardProps = {
  enterprise: Enterprise;
  setModalVisible: Dispatch<SetStateAction<boolean>>;
  handleSelectEnterprise: (id: number) => void;
};

export const EnterpriseCard: React.FC<EnterpriseCardProps> = ({
  enterprise,
  setModalVisible,
  handleSelectEnterprise,
}) => {
  const handleSelect = useCallback(() => {
    setModalVisible(true);
    handleSelectEnterprise(enterprise.id);
  }, [enterprise, handleSelectEnterprise, setModalVisible]);

  if (!enterprise) {
    return <></>;
  }

  const {photo, enterprise_name, enterprise_type}: Enterprise = enterprise;

  return (
    <Container>
      <Content>
        <Logo source={{uri: `${envs.BASE_URL}${photo}`}} />
        <Description>
          <Name numberOfLines={1}>{enterprise_name}</Name>
          <Type numberOfLines={1}>{enterprise_type.enterprise_type_name}</Type>
        </Description>
      </Content>
      <Button
        style={styles.actionButton}
        onPress={handleSelect}
        underlayColor={colors.color2}
        activeOpacity={1}>
        <ButtonIcon source={doubleArrow} />
      </Button>
    </Container>
  );
};

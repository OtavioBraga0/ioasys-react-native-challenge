import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  Header,
  Logo,
  Profile,
  ProfileImage,
  SessionTitle,
  Types,
  Container,
  styles,
  Enterprises,
  HorizontalSpace,
  MenuAction,
  MenuActionText,
} from '../layout/pages/Home';

import {useSelector} from 'react-redux';
import {authSelector} from '../../domain/ducks/authReducer';

// @ts-ignore
import logo from '../assets/logo.png';
// @ts-ignore
import profilePlaceholder from '../assets/profile_placeholder.png';
import {Input} from '../components/Input';
import {useEnterprise} from '../hooks/useEnterprise';
import {useAuth} from '../hooks/useAuth';
import {StackNavigationProp} from '@react-navigation/stack';
import {ParamListBase} from '@react-navigation/routers';
import {Type} from '../components/Type';
import {EnterpriseCard} from '../components/EnterpriseCard';
import {EnterpriseModal} from '../components/EnterpriseModal';
import {EnterpriseType} from '../../domain/entities/enterprise';
import {Animated, View} from 'react-native';
import {ProfileModal} from '../components/ProfileModal';

type HomeProps = {
  navigation: StackNavigationProp<ParamListBase, 'Home'>;
};

export const Home: React.FC<HomeProps> = ({navigation}) => {
  const {user} = useSelector(authSelector);

  const [modalVisible, setModalVisible] = useState(false);
  const [modalProfileVisible, setModalProfileVisible] = useState(false);
  const [profileMenuVisible, setProfileMenuVisible] = useState(false);

  const {
    enterprises,
    types,
    setSearch,
    search,
    setType,
    selectedType,
    actions: {handleGetEnterpriseDetails},
  } = useEnterprise();
  const {
    actions: {handleSignOut},
  } = useAuth({navigation});

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const hideAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = useCallback(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
    Animated.timing(hideAnim, {
      toValue: 2,
      duration: 5,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim, hideAnim]);

  const fadeOut = useCallback(() => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
    Animated.timing(hideAnim, {
      toValue: -1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim, hideAnim]);

  useEffect(() => {
    if (profileMenuVisible) {
      fadeIn();
    } else {
      fadeOut();
    }
  }, [fadeOut, fadeIn, profileMenuVisible]);

  return (
    <Container>
      <Header>
        <Logo source={logo} style={styles.logo} />
        <View>
          <Profile onPress={() => setProfileMenuVisible(prev => !prev)}>
            <ProfileImage
              source={
                (((process.env.REACT_APP_BASE_URL as string) +
                  user?.investor.photo) as string) || profilePlaceholder
              }
            />
          </Profile>
          <Animated.View
            style={[styles.profileMenu, {opacity: fadeAnim, zIndex: hideAnim}]}>
            <MenuAction onPress={() => setModalProfileVisible(true)}>
              <MenuActionText>Account</MenuActionText>
            </MenuAction>
            <MenuAction onPress={handleSignOut}>
              <MenuActionText>Logout</MenuActionText>
            </MenuAction>
          </Animated.View>
        </View>
      </Header>
      <Enterprises>
        <HorizontalSpace>
          <Input
            icon="search"
            placeholder="Search"
            value={search}
            onChangeText={value => setSearch(value)}
          />
          <SessionTitle>Filter by</SessionTitle>
          <Types
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={types}
            renderItem={(type: {item: EnterpriseType; index: number}) => (
              <>
                {type.index === 0 && (
                  <Type
                    name="All"
                    selected={selectedType === 0}
                    onPress={() => setType(0)}
                  />
                )}
                <Type
                  name={type.item.enterprise_type_name}
                  selected={type.item.id === selectedType}
                  onPress={() => setType(type.item.id)}
                />
              </>
            )}
            keyExtractor={(type: EnterpriseType) => type.id}
          />
        </HorizontalSpace>
        <HorizontalSpace>
          <SessionTitle>Enterprises</SessionTitle>
          {enterprises.map(enterprise => (
            <EnterpriseCard
              key={enterprise.id}
              enterprise={enterprise}
              setModalVisible={setModalVisible}
              handleSelectEnterprise={handleGetEnterpriseDetails}
            />
          ))}
        </HorizontalSpace>
      </Enterprises>
      <EnterpriseModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      <ProfileModal
        profileModalVisible={modalProfileVisible}
        setProfileModalVisible={setModalProfileVisible}
      />
    </Container>
  );
};

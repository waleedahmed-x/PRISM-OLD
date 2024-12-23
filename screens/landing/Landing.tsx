import React, {useEffect} from 'react';
import {
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
} from 'react-native';
import {Avatar} from 'react-native-paper';
import styled from 'styled-components/native';
import HomeElement from '@components/HomeElement';
import {LandingProps} from '@interfaces/landing';
import {useUser} from '@/contexts/userContext';

const Landing: React.FC<LandingProps> = ({navigation}) => {
  const {user, logout} = useUser();
  useEffect(() => {
    // @ts-ignore
    !user && navigation.navigate('Login');
  }, [user, navigation]);

  return (
    <SuperParent>
      <SafeAreaView>
        <BackgroundImage source={require('@assets/images/bg.png')} />
        <StatusBar barStyle="light-content" backgroundColor="#000" />
        {/* eslint-disable-next-line react-native/no-inline-styles */}
        <ScrollView style={{height: '100%'}}>
          <MainContainerView>
            <TitleContainer>
              <TitleImage source={require('@assets/images/PrismLogo.png')} />
              <Avatar.Image
                size={50}
                source={require('@assets/images/avatar.png')}
              />
            </TitleContainer>
            <ContentContainer>
              <HomeElement
                title="Prism Arcade"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                background={require('@assets/images/P-BG.png')}
                icon={require('@assets/images/vr.png')}
                navigation={navigation}
                goTo="Prism Arcade"
              />
              <HomeElement
                title="Challenges"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                background={require('@assets/images/MilitaryGreen-BG.png')}
                icon={require('@assets/images/star.png')}
                navigation={navigation}
                goTo="Challenges"
              />
              <HomeElement
                title="Lore"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                background={require('@assets/images/grey-BG.png')}
                icon={require('@assets/images/pearl.png')}
                navigation={navigation}
                goTo="Lore"
              />
              <HomeElement
                title="My NFTs"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                background={require('@assets/images/gold-BG.png')}
                icon={require('@assets/images/prism.png')}
                navigation={navigation}
                goTo="Prism Arcade"
              />
              <HomeElement
                title="Settings"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                background={require('@assets/images/setting-BG.png')}
                icon={require('@assets/images/setting.png')}
                navigation={navigation}
                goTo="Prism Arcade"
              />
              <Button title="Logout" onPress={logout} />
            </ContentContainer>
          </MainContainerView>
        </ScrollView>
      </SafeAreaView>
    </SuperParent>
  );
};

const SuperParent = styled(View)`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: black;
`;
const BackgroundImage = styled(Image)`
  position: absolute;
  bottom: 0px;
  left: 0px;
  z-index: -1;
  width: 100%;
`;
const MainContainerView = styled(View)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-between;
`;
const TitleContainer = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
  padding-top: 20px;
`;
const TitleImage = styled(Image)`
  width: 150px;
`;
const ContentContainer = styled(View)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 40px;
  height: 100%;
`;

export default Landing;

import React from 'react';
import {Image, ScrollView, View} from 'react-native';
import {Divider, Text} from 'react-native-paper';
import styled from 'styled-components/native';
import {HeaderBack} from '@components/Header';

function LoreGuard({navigation}: any) {
  return (
    <LoreParent>
      <HeaderBack
        navigation={navigation}
        navigateTo="Lore"
        screenTitle="Guard"
      />
      <BackgroundImage source={require('@assets/images/bg.png')} />
      {/* eslint-disable-next-line react-native/no-inline-styles */}
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <ContentContainer>
          <LoreCard>
            <BGImage source={require('@assets/images/guard.png')} />
            <PosterContainer>
              <Poster source={require('@assets/images/guardposter.png')} />
            </PosterContainer>
          </LoreCard>
          <Title>The Guard</Title>
          <Section>
            <SectionTitle>Summary</SectionTitle>
            <Description>
              Harnessing AI to more deeply understand nature, the Guard are
              brilliant synthetic biologists who find their own answers to the
              universe through a profound understanding of organic life and
              genetic engineering. Their goal is to restore Earth and transform
              it from its current barren state to a once-again green and blue
              paradise.
            </Description>
          </Section>
          <StyledDivider />
          <Section>
            <SectionTitle>Societal Beliefs</SectionTitle>
            <SectionSubTitle>
              Technological and Genetic Stewardship
            </SectionSubTitle>
            <Description>
              The Guard leverages advanced AI and genetic engineering to manage
              and restore Earth's ecosystems. They use these technologies to
              analyze, predict, and intervene in environmental and biological
              processes, aiming to correct past damages and prevent future
              ecological imbalances.
            </Description>
          </Section>
        </ContentContainer>
      </ScrollView>
    </LoreParent>
  );
}
const LoreParent = styled(View)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
const BackgroundImage = styled(Image)`
  position: absolute;
  bottom: 0px;
  left: 0px;
  z-index: -1;
  width: 100%;
`;

const ContentContainer = styled(View)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 30px;
`;
const LoreCard = styled(View)`
  position: relative;
  display: flex;
  flex-direction: row;
  border-radius: 30px;
  overflow: hidden;
  margin-top: 25px;
  width: 95%;
  height: 200px;
`;
const BGImage = styled(Image)`
  position: absolute;
  top: 0px;
  left: 0px;
  object-fit: cover;
  z-index: 0;
`;
const PosterContainer = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;
const Poster = styled(Image)``;
const Title = styled(Text)`
  font-size: 30px;
  color: #fff;
  font-weight: 500;
  padding: 30px 0px 10px 10px;
`;
const Section = styled(View)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const SectionTitle = styled(Text)`
  font-size: 25px;
  color: #fff;
  padding: 10px 0px 20px 10px;
`;
const SectionSubTitle = styled(Text)`
  font-size: 20px;
  color: #fff;
  padding: 10px 0px 10px 10px;
`;
const Description = styled(Text)`
  color: #f1f1f1;
  font-size: 15px;
  padding: 0px 10px;
`;

const StyledDivider = styled(Divider)`
  width: 95%;
  margin: 40px 0px;
  height: 1px;
`;

export default LoreGuard;

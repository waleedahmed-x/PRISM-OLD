import {HomeElementProps} from '@/interfaces/landing';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Image} from 'react-native';
import styled from 'styled-components/native';

const HomeElement: React.FC<HomeElementProps> = ({
  title,
  description,
  background,
  icon,
  navigation,
  goTo,
}) => {
  return (
    <ClickableParent onPress={() => navigation.navigate(goTo)}>
      <Box>
        <BoxBG source={background} />
        <TextContent>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </TextContent>
        <IconImage>
          <Icon source={icon} />
        </IconImage>
      </Box>
    </ClickableParent>
  );
};

const ClickableParent = styled(TouchableOpacity)`
  z-index: 3;
`;

const Box = styled(View)`
  position: relative;
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  overflow: hidden;
  border-radius: 25px;
  height: 117px;
  border: 1px solid #f9f9f930;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 15px 10px;
  width: 95%;
`;
const BoxBG = styled(Image)`
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  height: 150%;
`;
const TextContent = styled(View)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60%;
`;
const Title = styled(Text)`
  color: white;
  font-size: 28px;
  font-weight: bold;
  padding-left: 10px;
`;
const Description = styled(Text)`
  color: white;
  padding-top: 10px;
  padding-left: 10px;
  width: 100%;
  font-size: 12px;
`;
const IconImage = styled(View)`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 40%;
`;
const Icon = styled(Image)`
  position: absolute;
  bottom: -15px;
  object-fit: contain;
`;
export default HomeElement;

import React from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

export default function SocialButton({title, imgSrc}: any) {
  return (
    <ButtonBody>
      <IconImage source={imgSrc} />
      <Title>{title}</Title>
    </ButtonBody>
  );
}
const ButtonBody = styled(TouchableOpacity)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 90%;
  height: 60px;
  border-radius: 50px;
  margin-top: 20px;
  background-color: #555f70;
`;
const IconImage = styled(Image)`
  width: 30px;
  height: 30px;
`;
const Title = styled(Text)`
  font-weight: 700;
  font-size: 20px;
  color: #d5e4f7;
`;

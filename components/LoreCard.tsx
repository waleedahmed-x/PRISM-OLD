import React from 'react';
import {Image, Text, View} from 'react-native';
import styled from 'styled-components/native';
import {CardProps} from '@interfaces/lore';

function LoresCard({
  name,
  polyIcon,
  bgImgSrc,
  poster,
}: CardProps): React.JSX.Element {
  return (
    <LoreCard>
      <BGImage source={bgImgSrc} />
      <NamePoly>
        <Name>{name}</Name>
        <PolyIcon source={polyIcon} />
      </NamePoly>
      <PosterContainer>
        <Poster source={poster} />
      </PosterContainer>
    </LoreCard>
  );
}
const LoreCard = styled(View)`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 30px;
  overflow: hidden;
  margin-top: 25px;
  width: 92%;
  height: 200px;
`;
const BGImage = styled(Image)`
  position: absolute;
  top: 0px;
  left: 0px;
  object-fit: cover;
  z-index: 0;
`;

const NamePoly = styled(View)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 80%;
  width: 30%;
`;
const Name = styled(Text)`
  font-size: 30px;
  color: #000;
  font-weight: 500;
`;
const PolyIcon = styled(Image)``;
const PosterContainer = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 70%;
`;
const Poster = styled(Image)``;
export default LoresCard;

import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styled from 'styled-components/native';
import {Tag, TypeTag} from './Tags';
import {CardProps} from '@interfaces/arcade';
import {useGameContext} from '@/contexts/gameContext';

function ArcadeCard({
  title,
  tag,
  type,
  imgSrc,
  fixedWidth,
  game,
  navigation,
}: CardProps): React.JSX.Element {
  const {setSelectedGame} = useGameContext();

  return (
    <CardParent
      fixedWidth={fixedWidth}
      onPress={() => {
        navigation.navigate('Game');
        setSelectedGame(game);
      }}>
      {/* @ts-ignore */}
      <GlassImage source={imgSrc} blurRadius={25} />
      <CardDisplay>
        {/* @ts-ignore */}
        <CardImage source={imgSrc} />
        <Tags>
          {tag && tag.map((tagName, i) => <Tag text={tagName} key={i} />)}
        </Tags>
      </CardDisplay>
      <Description>
        <Name>{title}</Name>
        <TypeTag text={type} />
      </Description>
    </CardParent>
  );
}
interface ArcadeCardInterface {
  fixedWidth?: boolean;
}
const CardParent = styled(TouchableOpacity)<ArcadeCardInterface>`
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 25px;
  overflow: hidden;
  margin: ${({fixedWidth}) => (fixedWidth ? '10px 5px' : '10px 10px')};
  width: ${({fixedWidth}) => (fixedWidth ? '390px' : '95%')};
  overflow: hidden;
`;
const GlassImage = styled(Image)`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  opacity: 0.5;
`;
const Description = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
const Name = styled(Text)`
  color: #fff;
  font-size: 20px;
  padding: 0px 0px 0px 20px;
  font-weight: 500;
`;
const CardDisplay = styled(View)`
  position: relative;
  overflow: hidden;
`;
const CardImage = styled(Image)`
  width: 100%;
  object-fit: fill;
  height: 200px;
  border-radius: 25px;
`;
const Tags = styled(View)`
  position: absolute;
  bottom: 10px;
  display: flex;
  flex-direction: row;
`;

export default ArcadeCard;

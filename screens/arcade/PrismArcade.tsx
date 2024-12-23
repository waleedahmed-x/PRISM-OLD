import React from 'react';
import {
  View,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
  Text,
} from 'react-native';
import styled from 'styled-components/native';
import ArcadeCard from '@components/ArcadeCard';
import Header from '@components/Header';
import {PrismHomeProps} from '@interfaces/arcade';
import {games} from '@/dummy/games';

export default function PrismArcade({
  navigation,
}: PrismHomeProps): React.JSX.Element {
  return (
    <SuperParent>
      <Header
        navigation={navigation}
        navigateTo="Home"
        screenTitle="Prism Arcade"
      />
      <SearchContainer>
        <SearchInputContainer>
          <SearchInputImage source={require('@assets/icons/search.png')} />
          <SearchInput placeholder="Search" placeholderTextColor="grey" />
        </SearchInputContainer>
        <FilterButton>
          <FilterImage source={require('@assets/icons/filter.png')} />
        </FilterButton>
      </SearchContainer>
      <ArcadeContentParent>
        <Featured>
          <Title>Featured</Title>
          <CardsHorizontal horizontal={true}>
            {games &&
              games.slice(0, 2).map((game, i) => {
                return (
                  <ArcadeCard
                    key={i}
                    title={game.title}
                    tag={game.genres}
                    type="STR"
                    imgSrc={String(game.image)}
                    fixedWidth
                    game={game}
                    navigation={navigation}
                  />
                );
              })}
          </CardsHorizontal>
        </Featured>
        <Latest>
          <Title>Latest</Title>
          <Cards>
            {games.map((game, i) => {
              return (
                <ArcadeCard
                  key={i}
                  title={game.title}
                  tag={game.genres}
                  imgSrc={String(game.image)}
                  type="DEX"
                  game={game}
                  navigation={navigation}
                />
              );
            })}
          </Cards>
        </Latest>
      </ArcadeContentParent>
    </SuperParent>
  );
}

const SuperParent = styled(View)`
  background-color: #000;
  height: 100%;
  width: 100%;
`;

const SearchContainer = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px;
  width: 100%;
  margin-top: 20px;
`;

const SearchInputContainer = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #2d2e3499;
  border-radius: 15px;
  width: 85%;
`;

const SearchInput = styled(TextInput)`
  border-radius: 15px;
  color: #fff;
  background-color: transparent;
  padding: 15px;
  height: 50px;
`;

const SearchInputImage = styled(Image)`
  margin-left: 10px;
`;
const FilterButton = styled(TouchableOpacity)`
  border-radius: 15px;
  background-color: #2d2e3499;
  height: 50px;
  width: 50px;
`;
const FilterImage = styled(Image)`
  margin-top: 13.5px;
  margin-left: 13.5px;
`;
const ArcadeContentParent = styled(ScrollView)``;
const Featured = styled(View)`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;
const Title = styled(Text)`
  color: #fff;
  font-size: 24px;
  margin-top: 20px;
  margin-left: 10px;
`;

const CardsHorizontal = styled(ScrollView)`
  display: flex;
  flex-direction: row;
  padding-top: 20px;
`;
const Cards = styled(View)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
`;

const Latest = styled(View)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 10px;
  width: 100%;
`;

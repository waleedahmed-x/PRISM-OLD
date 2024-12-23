import React, {useState} from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';
import Dropdown from '@components/ui/Dropdown';
import {ChallengeMenuOptionInterface} from '@interfaces/challenges';

const options: ChallengeMenuOptionInterface = {
  game: ['Game', 'Option 1', 'Option 2', 'Option 3'],
  mode: ['Mode', 'Option 1', 'Option 2', 'Option 3'],
  prize: ['Prize', 'Option 1', 'Option 2', 'Option 3'],
};

export default function ChallengeMenu() {
  const [selectedGame, setSelectedGame] = useState<string>('Game');
  const [selectedMode, setSelectedMode] = useState<string>('Mode');
  const [selectedPrize, setSelectedPrize] = useState<string>('Prizes');

  return (
    <MenuParent>
      <Dropdown
        title={selectedGame}
        options={options.game}
        onSelect={setSelectedGame}
        widthInPercentage={31}
        heightInPixels={50}
      />
      <Dropdown
        title={selectedMode}
        options={options.mode}
        onSelect={setSelectedMode}
        widthInPercentage={31}
        heightInPixels={50}
      />
      <Dropdown
        title={selectedPrize}
        options={options.prize}
        onSelect={setSelectedPrize}
        widthInPercentage={31}
        heightInPixels={50}
      />
    </MenuParent>
  );
}

const MenuParent = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 95%;
  margin-top: 15px;
`;

import React from 'react';
import {
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styled from 'styled-components/native';
import {StyledProps} from '@interfaces/challenges';

interface TabNavigatorProps {
  items: {
    name: string;
    icons?: {
      dark: ImageSourcePropType;
      light: ImageSourcePropType;
    };
  }[];
  state: string;
  setState: (state: string) => void;
}

export default function TabNavigator({
  items,
  state,
  setState,
}: TabNavigatorProps): React.JSX.Element {
  return (
    <TabNavigatorContainer>
      {items &&
        items.map((item, i) => {
          const isActive = state === item.name;
          return (
            <TabItem
              key={i}
              backgroundColor={isActive ? '#d3d3d3' : 'transparent'}
              onPress={() => setState(item.name)}>
              {item.icons && (
                <Image
                  source={isActive ? item.icons.dark : item.icons.light}
                  // eslint-disable-next-line react-native/no-inline-styles
                  style={{marginRight: 5}}
                />
              )}
              <ItemText color={isActive ? '#000000' : '#ffffff'}>
                {item.name}
              </ItemText>
            </TabItem>
          );
        })}
    </TabNavigatorContainer>
  );
}

const TabNavigatorContainer = styled(View)`
  display: flex;
  flex-direction: row;
  width: 95%;
  justify-content: space-between;
  background-color: #2d2e3499;
  border-radius: 15px;
  padding: 0px 5px;
`;
const TabItem = styled(TouchableOpacity)<StyledProps>`
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({backgroundColor}) => backgroundColor};
  height: 45px;
  margin: 5px 0px;
  border-radius: 10px;
`;
const ItemText = styled(Text)<StyledProps>`
  color: ${({color}) => color};
  font-size: 15px;
`;

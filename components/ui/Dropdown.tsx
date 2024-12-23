import React, {useState} from 'react';
import {
  Image,
  // Platform,
  Pressable,
  // StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Divider} from 'react-native-paper';
import styled from 'styled-components/native';

interface DropdownInterface {
  title: string;
  options: string[];
  onSelect: (value: string) => void;
  widthInPercentage: number;
  heightInPixels: number;
}
export default function Dropdown({
  title,
  options,
  onSelect,
  widthInPercentage,
  heightInPixels,
}: DropdownInterface) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (value: string) => {
    onSelect(value);
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && <BG onPress={() => setIsOpen(false)} />}
      <DropdownParent
        widthInPercentage={widthInPercentage}
        heightInPixels={heightInPixels}>
        {/* @ts-ignore */}
        <GradientBorder
          widthInPercentage={widthInPercentage}
          heightInPixels={heightInPixels}
        />
        <DropdownContainer
          onPress={() => setIsOpen(!isOpen)}
          widthInPercentage={widthInPercentage}
          heightInPixels={heightInPixels}
          // style={styles.gradientBorder}
        >
          <Title>{title}</Title>
          <Icon source={require('@assets/icons/arrowdown.png')} />
        </DropdownContainer>
        {isOpen && (
          <Options>
            {options.map((option, i) => (
              <TouchableOpacity
                key={option}
                onPress={() => handleSelect(option)}>
                <OptionText>{option}</OptionText>
                {i < options.length - 1 && <StyledDivider />}
              </TouchableOpacity>
            ))}
          </Options>
        )}
      </DropdownParent>
    </>
  );
}
// const styles = StyleSheet.create({
//   // @ts-ignore
//   gradientBorder: Platform.select({
//     android: {
//       borderColor: '#323232',
//       borderWidth: 1,
//     },
//     ios: {
//       padding: 10,
//       backgroundColor: '#000000',
//       shadowColor: '#ccc',
//       shadowOpacity: 0.5,
//       shadowRadius: 1,
//       shadowOffset: {
//         height: -0.7,
//         width: 0.7,
//       },
//     },
//   }),
// });
const BG = styled(TouchableOpacity)`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 3;
`;
interface DropdownContainerProps {
  widthInPercentage: number;
  heightInPixels: number;
}
const DropdownParent = styled(View)<DropdownContainerProps>`
  position: relative;
  min-width: ${({widthInPercentage}) => `${widthInPercentage}%`};
  height: ${({heightInPixels}) => `${heightInPixels}px`};
`;

const DropdownContainer = styled(Pressable)<DropdownContainerProps>`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 15px;
  align-items: center;
  margin: 0px 2px;
  flex: 1;
  min-width: ${({widthInPercentage}) => `${widthInPercentage}%`};
  height: ${({heightInPixels}) => `${heightInPixels}px`};
  margin-top: 5px;
  background-color: #000000;
  border-radius: 15px;
  z-index: 1;
`;
const GradientBorder = styled(LinearGradient).attrs({
  colors: ['#000000', '#AAA'],
  start: {x: 0.7, y: 1},
  end: {x: 0.8, y: -0.3},
})<DropdownContainerProps>`
  position: absolute;
  bottom: 0.5px;
  right: -0.5px;
  min-width: 98%;
  height: ${({heightInPixels}) => `${heightInPixels - 3.5}px`};
  background-color: #ffffff;
  border-radius: 15px;
  z-index: 0;
`;
const Title = styled(Text)`
  color: #bbb;
  font-size: 15px;
  font-weight: 500;
`;
const Icon = styled(Image)`
  width: 20px;
  height: 20px;
`;
const Options = styled(View)`
  position: absolute;
  top: 120%;
  right: 0px;
  background-color: rgba(0, 0, 0, 0.89);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 120px;
  border-radius: 15px;
  border: 0.5px solid #282828;
  padding: 5px;
  z-index: 10;
`;
const OptionText = styled(Text)`
  text-align: center;
  color: #ffffff;
  margin: 10px 0px;
`;
const StyledDivider = styled(Divider)`
  background-color: #ffffff48;
  width: 100px;
  height: 1px;
`;

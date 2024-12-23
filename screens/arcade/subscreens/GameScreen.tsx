import React, {useState} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import WebView from 'react-native-webview';
import {useGameContext} from '@/contexts/gameContext';
import styled from 'styled-components/native';
import injectedJavaScript from '@/utils/Injections';

export default function Game({navigation}: any) {
  const {selectedGame} = useGameContext();
  const [hidden, setHidden] = useState(false);
  const handleToogle = () => {
    setHidden(!hidden);
    setTimeout(() => {
      setHidden(false);
    }, 2000);
  };
  return (
    <Parent>
      {hidden ? (
        <BackButton onPress={() => navigation.navigate('Prism Arcade')}>
          <Image source={require('@assets/icons/back.png')} />
        </BackButton>
      ) : (
        <ToggleBar onPress={handleToogle}>
          <Bar />
        </ToggleBar>
      )}
      <WebView
        originWhitelist={['*']}
        source={{uri: selectedGame.url}}
        javaScriptEnabled
        incognito
        injectedJavaScript={injectedJavaScript}
        // eslint-disable-next-line react-native/no-inline-styles
        style={{flex: 1}}
        onMessage={() => {}}
      />
    </Parent>
  );
}
const Parent = styled(View)`
  background-color: #000;
  width: 100%;
  height: 100%;
`;
const BackButton = styled(TouchableOpacity)`
  position: absolute;
  top: 50px;
  left: 0px;
  z-index: 100;
  background-color: #000;
  border-radius: 50px;
`;

const ToggleBar = styled(TouchableOpacity)`
  position: absolute;
  top: 50px;
  left: 0px;
  z-index: 100;
`;
const Bar = styled(View)`
  width: 10px;
  height: 40px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.2);
  border: 1px solid #515151;
`;

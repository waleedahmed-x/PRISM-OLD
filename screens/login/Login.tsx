import React, {useEffect, useRef, useState} from 'react';
import {
  Image,
  SafeAreaView,
  StatusBar,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Button, Text} from 'react-native-paper';
import styled from 'styled-components/native';
import {useUser} from '@/contexts/userContext';
import {useLoginWithEmail, usePrivy} from '@privy-io/expo';
import {useAlert} from '@/contexts/alertContext';
import SocialButton from '@/components/ui/SocialButtons';
export default function Login({navigation}: {navigation: any}) {
  const [code, setCode] = useState('');
  const [email, setEmail] = useState('');
  const [showLoginModal, setShowLoginModal] = useState(false);
  const {user, logout} = usePrivy();
  const {user: globalUser, login} = useUser();
  const {showAlert} = useAlert();
  const {loginWithCode, sendCode, state} = useLoginWithEmail({
    onLoginSuccess(_user, _isNewUser) {
      // @ts-ignore
      login(_user);
      showAlert('success', 'Login Success');
      setTimeout(() => {
        navigation.navigate('Home');
      }, 2000);
    },
    onError(err) {
      if (err.message.includes('Invalid email address')) {
        showAlert('error', 'Invalid email address');
      } else if (err.message.includes('Verification code must have 6 digits')) {
        showAlert('error', 'Verification code must have 6 digits.');
      } else {
        showAlert('error', err.message);
      }
    },
  });

  useEffect(() => {
    state.status === 'awaiting-code-input' &&
      showAlert('loading', 'Waiting for code input');
    if (state.status === 'sending-code') {
      showAlert('loading', 'Sending code to your email');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state, globalUser, navigation]);

  return (
    <SafeAreaView style={{backgroundColor: '#2e3133'}}>
      <StatusBar backgroundColor="#2e3133" />
      {/* <BackgroundImage source={require('@assets/images/bg.png')} /> */}
      <LoginParent>
        <Title>Signup</Title>
        <InputCodeButton>
          <StyledTextInput
            value={email}
            onChangeText={setEmail}
            placeholder="Email"
            inputMode="email"
            placeholderTextColor="#fff"
          />
          <SendCodeButton
            disabled={!/\S+@\S+\.\S+/.test(email)}
            onPress={() => {
              setShowLoginModal(true);
              sendCode({email});
            }}>
            Send Code
          </SendCodeButton>
        </InputCodeButton>
        {user && <Button onPress={() => logout()}>Logout</Button>}
        <SocialButton
          title="Signin with Google"
          imgSrc={require('@assets/icons/google.png')}
        />
        <SocialButton
          title="Signin with Twitter"
          imgSrc={require('@assets/icons/twitter.png')}
        />
        <SocialButton
          title="Signin with Discord"
          imgSrc={require('@assets/icons/discordBtn.png')}
        />
      </LoginParent>
      {state.status === 'awaiting-code-input' && showLoginModal && (
        <LoginModal
          setShow={setShowLoginModal}
          code={code}
          setCode={setCode}
          loginWithCode={loginWithCode}
          email={email}
        />
      )}
    </SafeAreaView>
  );
}

const LoginParent = styled(View)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
const Title = styled(Text)`
  font-size: 20px;
  color: #fff;
  margin-bottom: 50px;
  font-size: 40px;
`;
const StyledTextInput = styled(TextInput)`
  background-color: transparent;
  border: 0.5px solid #aaa;
  height: 60px;
  border-radius: 50px;

  color: #fff;
  width: 90%;
  padding-left: 20px;
`;
// const BackgroundImage = styled(Image)`
//   position: absolute;
//   bottom: 0px;
//   left: 0px;
//   z-index: -1;
//   width: 100%;
// `;
const InputCodeButton = styled(View)`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;
const SendCodeButton = styled(Button)`
  position: absolute;
  top: 10px;
  height: 40px;
  right: 30px;
  background-color: #fff;
  color: #000;
  border-radius: 50px;
`;

function LoginModal({
  setShow,
  code,
  setCode,
  loginWithCode,
  email,
}: {
  setShow: (x: boolean) => void;
  code: string;
  setCode: (code: string) => void;
  loginWithCode: (params: {code: string; email: string}) => void;
  email: string;
}) {
  const inputRefs = useRef<TextInput[]>([]);

  const handleCodeChange = (text: string, index: number) => {
    let newCode = code.split('');
    newCode[index] = text;
    const updatedCode = newCode.join('');
    setCode(updatedCode);

    if (text && index < 5) {
      inputRefs.current[index + 1].focus();
    }
    if (updatedCode.length === 6) {
      loginWithCode({code: updatedCode, email});
    }
  };
  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === 'Backspace' && !code[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <ModalParent>
      <Close onPress={() => setShow(false)}>
        <CloseContent>x</CloseContent>
      </Close>
      <OTPContainer>
        {Array.from({length: 6}).map((_, index) => (
          <OTPInput
            key={index}
            // @ts-ignore
            ref={ref => (inputRefs.current[index] = ref)}
            value={code[index] || ''}
            onChangeText={text => handleCodeChange(text, index)}
            onKeyPress={e => handleKeyPress(e, index)}
            maxLength={1}
            keyboardType="numeric"
            textAlign="center"
          />
        ))}
      </OTPContainer>
    </ModalParent>
  );
}

const OTPContainer = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  width: 80%;
  margin-bottom: 20px;
`;

const OTPInput = styled(TextInput)`
  width: 40px;
  height: 40px;
  border-width: 2px;
  border-color: #fff;
  border-radius: 8px;
  color: #fff;
  background-color: #333;
  font-size: 18px;
  margin: 0 5px;
`;

const ModalParent = styled(View)`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #000000dc;
`;
const Close = styled(TouchableOpacity)`
  position: absolute;
  top: 20px;
  right: 20px;
`;
const CloseContent = styled(Text)`
  color: #fff;
  font-size: 30px;
`;

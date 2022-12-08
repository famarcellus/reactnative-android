import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useRef, useState} from 'react';
import {useActor} from '@xstate/react';
import commonStyle from '../../style/common.style';

import {logInService} from '../../machines/LogInMachine';
import {EmailField} from '../../components/InputField/EmailField';
import {PasswordField} from '../../components/InputField/PasswordField';
import {PrimaryButton} from '../../components/AppButton/PrimaryButton';
import {SecondaryButton} from '../../components/AppButton/SecondaryButton';
import PageContainer from '../PageContainer';
import {LoginProps} from '../../types/navigation';

export const Login = (props: LoginProps) => {
  console.log('Login app loaded');
  const validate = () => {
    const valid =
      validEmailState &&
      validPasswordState &&
      !loggedInState.matches('loggedIn');

    if (valid) {
      send('LOADING');
      const isCorrectPattern = String(passwordState).match(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/,
      );

      if (isCorrectPattern) {
        setTimeout(() => {
          send('LOGIN');
          setIncorrectInfoState(!isCorrectPattern);
          const newUserId = Math.floor(Math.random() * 100) + 1;
          props.navigation.navigate('Dashboard', {
            userId: newUserId,
            screen: 'Home',
          });
        }, 1800);
      }
      if (!isCorrectPattern) {
        setTimeout(() => {
          send('LOGOUT');
          setIncorrectInfoState(!isCorrectPattern);
        }, 1000);
      }
    }
    if (!valid && !validPasswordState) {
      setValidPasswordState(false);
    }
  };

  const [loggedInState, send] = useActor(logInService);
  const [emailState, onEmailChange] = useState('');
  const [validEmailState, setValidEmailState] = useState(true);
  const [passwordState, onPasswordChange] = useState('');
  const [validPasswordState, setValidPasswordState] = useState(true);
  const [incorrectInfoState, setIncorrectInfoState] = useState(false);

  const secondInputRef: React.MutableRefObject<any> = useRef();

  return (
    <PageContainer>
      <View style={styles.headerContainer}>
        <Text style={styles.loginHeader}>Log In</Text>
      </View>
      <View style={[commonStyle.flex, commonStyle.alignItemsCenter]}>
        <Text
          style={[
            styles.welcomeText,
            commonStyle.h2Text,
            !loggedInState.matches('loggedIn')
              ? commonStyle.invisible
              : commonStyle.visible,
          ]}>
          Welcome!
        </Text>
        <Text
          style={[
            styles.falseInfo,
            incorrectInfoState ? commonStyle.visible : commonStyle.invisible,
          ]}>
          Incorrect email or password.
        </Text>
      </View>
      <View style={commonStyle.form}>
        <EmailField
          inputState={emailState}
          onInputChange={onEmailChange}
          validState={validEmailState}
          onChangeValidity={setValidEmailState}
          onSubmitEditing={() => {
            if (secondInputRef.current) {
              secondInputRef.current.focus();
            }
          }}
        />
        <PasswordField
          ref={secondInputRef}
          inputState={passwordState}
          onInputChange={onPasswordChange}
          validState={validPasswordState}
          onChangeValidity={setValidPasswordState}
          onSubmitEditing={() => validate()}
        />
        <PrimaryButton
          buttonText={
            loggedInState.matches('loggedIn') ? 'Logged In' : 'Log In'
          }
          loading={loggedInState.matches('loading')}
          onPress={() => validate()}
        />
        <Text style={styles.secondaryButtonLabel}>
          Don't Have An Account Yet?
        </Text>
        <SecondaryButton buttonText="Sign Up" onPress={() => console.log('')} />
      </View>
    </PageContainer>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },

  loginHeader: {
    fontSize: 37.32,
    fontWeight: 'bold',
  },

  welcomeText: {
    fontWeight: '500',
    marginTop: 45,
  },

  falseInfo: {
    color: 'red',
    fontSize: 18,
    fontWeight: '600',
  },

  secondaryButtonLabel: {
    marginTop: 25,
  },
});

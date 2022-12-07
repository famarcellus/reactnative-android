import {useEffect} from 'react';
import {
  NativeSyntheticEvent,
  TextInputSubmitEditingEventData,
} from 'react-native';

import InputField from './InputField';

type EmailFieldProps = {
  label: string;
  autoFocus: boolean | undefined;
  errorText: string;
  validState: boolean;
  placeholder: string;
  secureTextEntry: boolean;
  inputState: string;
  onInputChange: React.Dispatch<React.SetStateAction<string>>;
  onChangeValidity: React.Dispatch<React.SetStateAction<boolean>>;
  onSubmitEditing: (
    e: NativeSyntheticEvent<TextInputSubmitEditingEventData>,
  ) => void;
};

export const EmailField = (props: EmailFieldProps) => {
  function validateEmail(email: string) {
    const valid = String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      );
    const bool = Boolean(valid);
    props.onChangeValidity(bool);
  }

  useEffect(() => {
    if (props.inputState && props.validState === false) {
      validateEmail(props.inputState);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.inputState]);

  return (
    <InputField
      label="Email"
      autoFocus={true}
      placeholder="example@email.com"
      keyboardType="email-address"
      inputState={props.inputState}
      secureTextEntry={false}
      onInputChange={props.onInputChange}
      validState={props.validState}
      onSubmitEditing={props.onSubmitEditing}
      blurOnSubmit={false}
      onBlur={() => validateEmail(props.inputState)}
      errorText="Please enter a valid email."
    />
  );
};

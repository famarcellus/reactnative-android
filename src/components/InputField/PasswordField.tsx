import {useEffect, forwardRef} from 'react';
import {
  NativeSyntheticEvent,
  TextInputSubmitEditingEventData,
} from 'react-native';

import InputField from './InputField';

type PasswordFieldProps = {
  validState: boolean;
  inputState: string;
  onInputChange: React.Dispatch<React.SetStateAction<string>>;
  onChangeValidity: React.Dispatch<React.SetStateAction<boolean>>;
  onSubmitEditing: (
    e: NativeSyntheticEvent<TextInputSubmitEditingEventData>,
  ) => void;
};

export const PasswordField = forwardRef((props: PasswordFieldProps, ref) => {
  function verifyNotEmpty(password: string) {
    const isNotEmpty = Boolean(password);
    const bool = Boolean(isNotEmpty);
    props.onChangeValidity(bool);
  }

  useEffect(() => {
    if (props.inputState) {
      verifyNotEmpty(props.inputState);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.inputState]);

  return (
    <InputField
      ref={ref}
      label="Password"
      autoFocus={false}
      placeholder="Password"
      keyboardType="default"
      secureTextEntry={true}
      inputState={props.inputState}
      onInputChange={props.onInputChange}
      validState={props.validState}
      onSubmitEditing={props.onSubmitEditing}
      blurOnSubmit={true}
      onBlur={() => verifyNotEmpty(props.inputState)}
      errorText="Please enter your password."
    />
  );
});

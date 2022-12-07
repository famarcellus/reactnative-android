import {forwardRef} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  TextInputSubmitEditingEventData,
  TextInputFocusEventData,
} from 'react-native';

import commonStyle from '../../style/common.style';

type InputFieldProps = {
  label: string;
  autoFocus: boolean | undefined;
  keyboardType: KeyboardTypeOptions;
  errorText: string;
  validState: boolean;
  placeholder: string;
  secureTextEntry: boolean;
  inputState: string;
  onInputChange: React.Dispatch<React.SetStateAction<string>>;
  onSubmitEditing: (
    e: NativeSyntheticEvent<TextInputSubmitEditingEventData>,
  ) => void;
  blurOnSubmit: boolean;
  onBlur: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
};

const InputField = forwardRef(
  (props: InputFieldProps, ref: React.ForwardedRef<any>) => {
    return (
      <View>
        <Text style={commonStyle.inputLabel}>{props.label}</Text>
        <TextInput
          ref={ref || null}
          autoFocus={props.autoFocus}
          style={[
            commonStyle.input,
            !props.validState ? styles.errorBorder : null,
          ]}
          placeholder={props.placeholder}
          placeholderTextColor="#a8a8a8"
          keyboardType={props.keyboardType}
          secureTextEntry={props.secureTextEntry}
          value={props.inputState}
          onChangeText={props.onInputChange}
          onSubmitEditing={props.onSubmitEditing}
          blurOnSubmit={props.blurOnSubmit}
          onBlur={props.onBlur}
        />
        <Text
          style={[
            styles.inlineError,
            !props.validState ? styles.visible : styles.invisible,
          ]}>
          {props.errorText}
        </Text>
      </View>
    );
  },
);

const styles = StyleSheet.create({
  inlineError: {
    color: 'red',
    marginTop: 5,
    marginBottom: 20,
    opacity: 0,
  },
  errorBorder: {
    borderColor: 'red',
    borderWidth: 1,
  },
  visible: {
    opacity: 1,
  },
  invisible: {
    opacity: 0,
  },
});

export default InputField;

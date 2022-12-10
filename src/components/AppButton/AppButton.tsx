import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {ActivityIndicator} from 'react-native';
import {StyleProp} from 'react-native';

import commonStyle from '../../style/common.style';

type AppButtonProps = {
  onPress: () => void;
  buttonStyles: StyleProp<any>;
  loading: boolean;
  textStyles: StyleProp<any>;
  buttonText: string;
};

export const AppButton = (props: AppButtonProps) => {
  return (
    <TouchableOpacity
      onPress={() => {
        props?.onPress ? props.onPress() : '';
      }}
      style={[commonStyle.button, props.buttonStyles, styles.marginAndSize]}>
      <Text style={[commonStyle.buttonLabel, props.textStyles]}>
        {props.loading ? (
          <ActivityIndicator
            size="small"
            color="#ffffff"
            style={styles.loaderSize}
          />
        ) : (
          props.buttonText
        )}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  marginAndSize: {
    marginTop: 10,
    width: '95%',
  },
  loaderSize: {
    width: 30,
    height: 30,
  },
});

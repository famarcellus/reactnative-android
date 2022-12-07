import {AppButton} from './AppButton';
import commonStyle from '../../style/common.style';

type SecondaryButtonProps = {
  onPress: () => void;
  buttonText: string;
};

export const SecondaryButton = (props: SecondaryButtonProps) => {
  return (
    <AppButton
      onPress={props.onPress}
      loading={false}
      buttonText={props.buttonText}
      buttonStyles={commonStyle.secondaryButton}
      textStyles={commonStyle.primaryTextColor}
    />
  );
};

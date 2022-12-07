import {AppButton} from './AppButton';
import commonStyle from '../../style/common.style';

type SecondaryButtonProps = {
  onPress: () => void;
  loading: boolean;
  buttonText: string;
};

export const SecondaryButton = (props: SecondaryButtonProps) => {
  return (
    <AppButton
      onPress={props.onPress}
      loading={props.loading}
      buttonText={props.buttonText}
      buttonStyles={commonStyle.secondaryButton}
      textStyles={commonStyle.primaryTextColor}
    />
  );
};

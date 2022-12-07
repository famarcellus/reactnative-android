import {AppButton} from './AppButton';
import commonStyle from '../../style/common.style';

type PrimaryButtonProps = {
  onPress: () => void;
  loading: boolean;
  buttonText: string;
};

export const PrimaryButton = (props: PrimaryButtonProps) => {
  return (
    <AppButton
      onPress={props.onPress}
      loading={props.loading}
      buttonText={props.buttonText}
      buttonStyles={commonStyle.primaryButton}
      textStyles={commonStyle.whiteText}
    />
  );
};

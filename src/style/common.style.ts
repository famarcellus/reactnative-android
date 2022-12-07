import {StyleSheet} from 'react-native';

const bodyTypeSize = 18;
const inputPadding = bodyTypeSize * 0.8;
const buttonHorizontalPad = bodyTypeSize * 1.33;
const mainColor = '#297bff';
const semiBoldText = '600';

export default StyleSheet.create({
  primaryTextColor: {
    color: mainColor,
  },
  bodyFontSize: {
    fontSize: bodyTypeSize,
  },
  inputPadding: {
    paddingVertical: inputPadding,
    paddingHorizontal: inputPadding,
  },
  elementWidth: {
    width: 270,
    // width: 350,
  },
  semiBoldWeight: {
    fontWeight: semiBoldText,
  },
  flex: {
    display: 'flex',
  },
  alignItemsCenter: {
    alignItems: 'center',
  },
  justifyContentCenter: {
    justifyContent: 'center',
  },
  visible: {
    opacity: 1,
  },
  invisible: {
    opacity: 0,
  },

  h1Text: {
    fontSize: 37.32,
  },
  h2Text: {
    fontSize: 31.1,
  },
  inputLabel: {
    fontSize: bodyTypeSize,
    fontWeight: semiBoldText,
  },

  form: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 50,
  },

  button: {
    paddingVertical: bodyTypeSize,
    paddingHorizontal: buttonHorizontalPad,
    display: 'flex',
    alignItems: 'center',
    borderRadius: 4,
    minWidth: '100%',
  },
  primaryButton: {
    backgroundColor: mainColor,
    marginBottom: 15,
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    borderColor: mainColor,
    borderWidth: 1,
    marginTop: 10,
  },
  buttonLabel: {
    fontSize: bodyTypeSize * 1.2,
    fontWeight: semiBoldText,
  },
  whiteText: {
    color: 'white',
  },
  input: {
    fontSize: bodyTypeSize,
    marginTop: 5,
    paddingVertical: inputPadding,
    paddingHorizontal: inputPadding,
    minWidth: '100%',
    borderColor: '#728096',
    borderWidth: 1,
    borderRadius: 3,
  },
});

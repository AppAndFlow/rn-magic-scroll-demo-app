import * as React from 'react';
import { MagicScroll } from '@appandflow/rn-magic-scroll';
import { ReturnKeyTypeOptions, TextInputProps, ViewStyle } from 'react-native';
import { Text16Asap400, Text18Asap400 } from '../common/typography';
import Animated, {
  FadeIn,
  FadeInDown,
  FadeInUp,
  FadeOut,
  FadeOutDown,
  FadeOutUp,
} from 'react-native-reanimated';

const IndependantTI = ({
  name,
  onSubmit,
  label,
  returnKeyType,
  style,
  tiProps,
  bottomText,
}: {
  name: string;
  onSubmit?: () => void;
  label?: string;
  returnKeyType: ReturnKeyTypeOptions;
  style?: ViewStyle;
  tiProps?: TextInputProps;
  bottomText?: string;
}) => {
  const [isFocused, setIsFocued] = React.useState(false);

  return (
    <MagicScroll.TextInput
      name={name}
      containerStyle={{
        flex: 1,
        marginBottom: 10,
        ...style,
      }}
      renderTop={() => (
        <Text18Asap400 style={{ color: 'white' }}>{label}</Text18Asap400>
      )}
      textInputProps={{
        onFocus: () => setIsFocued(true),
        keyboardType: 'default',
        autoCapitalize: 'none',
        onSubmitEditing: onSubmit,
        onBlur: () => setIsFocued(false),
        returnKeyType: returnKeyType,
        selectionHandleColor: '#874BF6',
        selectionColor: '#874BF6',
        style: {
          color: 'white',
          fontSize: 18,
          marginTop: 4,
          marginBottom: 8,
          padding: 8,
          height: 46,

          borderWidth: isFocused ? 2 : 0,
          borderColor: isFocused ? '#874BF6' : 'black',
          backgroundColor: isFocused ? 'black' : '#474747',
          borderRadius: 6,
        },
        ...tiProps,
      }}
      renderBottom={
        bottomText && isFocused
          ? () => (
              <Animated.View entering={FadeInUp} exiting={FadeOutUp}>
                <Text16Asap400 style={{ fontSize: 14, color: 'white' }}>
                  {bottomText}
                </Text16Asap400>
              </Animated.View>
            )
          : undefined
      }
    />
  );
};

export default IndependantTI;
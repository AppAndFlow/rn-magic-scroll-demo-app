import React from 'react';
import { Box } from 'react-native-design-utility';
import { observer } from 'mobx-react-lite';

import { TextNormal } from '../common/typography';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text } from 'react-native';

/**
 * You will mostlikely delete this screen.
 * See routes.tsx to add new screens.
 */
const WelcomeScreen = observer(() => {
  const navigation = useNavigation<NavigationProp<any, any>>();
  return (
    <Box f={1} justify="center" align="center" bg="blue">
      <TextNormal>Welcome</TextNormal>
      <TouchableOpacity onPress={() => navigation.navigate('FormScreen')}>
        <Text>Go to Form</Text>
      </TouchableOpacity>
    </Box>
  );
});

export default WelcomeScreen;

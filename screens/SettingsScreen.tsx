import * as React from 'react';
import { Button, View} from 'react-native';
import {styles} from '../util/styles';
import {RootStackParamList,ScreenProps} from '../types/navigation';

function SettingsScreen({ navigation }: ScreenProps<'Settings'>) {
  return (
    <View style={styles.container}>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

export default SettingsScreen; 
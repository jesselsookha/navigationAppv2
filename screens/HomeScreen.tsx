import * as React from 'react';
import { Button, View} from 'react-native';
import {styles} from '../util/styles';
import {RootStackParamList,ScreenProps} from '../types/navigation';

function HomeScreen({ navigation }: ScreenProps<'Home'>) {
  // declare all state variables 

  // *arrow - loadMenu - load array - calc stuff 
  // useEffect  ^

  return (
    <View style={styles.container}>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
}

export default HomeScreen;
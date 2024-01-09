import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import SelectScreen from './src/screens/SelectScreen';

export default function App() {

  return (

    <SafeAreaView style={styles.container}>

      <SelectScreen/>
      
    </SafeAreaView>

  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
  },
});

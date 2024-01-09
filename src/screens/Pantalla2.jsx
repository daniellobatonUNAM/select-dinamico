import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Pantalla2 = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Pantalla 2</Text>
      </View>
    )
  };
  
  export default Pantalla2;
  
  const styles = StyleSheet.create({
      container: {
          flex: 1,
          backgroundColor: '#12664f',
          alignItems: 'center',
          justifyContent: 'center',
      },
      titulo: {
          color: '#fff',
          fontSize: 24,
      }
  });
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Pantalla3 = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Pantalla 3</Text>
      </View>
    )
  };
  
  export default Pantalla3;
  
  const styles = StyleSheet.create({
      container: {
          flex: 1,
          backgroundColor: '#e5625e',
          alignItems: 'center',
          justifyContent: 'center',
      },
      titulo: {
          color: '#fff',
          fontSize: 24,
      }
  });
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Pantalla1 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Pantalla 1</Text>
    </View>
  )
};

export default Pantalla1;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#080357',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titulo: {
        color: '#fff',
        fontSize: 24,
    }
});
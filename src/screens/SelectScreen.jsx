import { StyleSheet, Text, View } from 'react-native';
import React, {useState} from 'react';
import RNPickerSelect from 'react-native-picker-select';
import Pantalla3 from './Pantalla3';
import Pantalla1 from './Pantalla1';
import Pantalla2 from './Pantalla2';

const SelectScreen = () => {

    const [selectedItem, setSelectedItem] = useState('');

    const [tempSelectedItem, setTempSelectedItem] = useState('');    // Variable temporal para almacenar el valor seleccionado en el picker

    return (

        <View style={styles.container}>

            <RNPickerSelect
                onValueChange={(value) => setTempSelectedItem(value)}
                onDonePress={() => {
                    console.log(tempSelectedItem);
                    setSelectedItem(tempSelectedItem)
                }}
                items={[
                { label: 'Pantalla 1', value: '1' },
                { label: 'Pantalla 2', value: '2' },
                { label: 'Pantalla 3', value: '3' },
                ]}
                style={pickerSelectStyles}
                placeholder={{
                    label: 'Selecciona una pantalla...',
                    value: null,
                }}
            />

            {selectedItem && <Text style={{alignSelf: 'flex-start'}}>Seleccionaste: Pantalla {selectedItem}</Text>}

            <View style={styles.fragmentContainer}>
                
                {selectedItem === '1' ?

                    <Pantalla1/> :

                selectedItem === '2' ?

                    <Pantalla2/> :

                selectedItem === '3' ?

                    <Pantalla3/> :

                    null}

            </View>

        </View>
    );



}

export default SelectScreen;

// Estilos para el contenedor
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
    },
    fragmentContainer: {
        flex: 1,
        marginVertical: 8,
        width: '100%',
        height: '100%',
    }
  });
  
  const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
      fontSize: 16,
      paddingVertical: 12,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 4,
      color: 'black',
      paddingRight: 30, // para asegurarse de que el texto no se oculte detrás del ícono
    },
    inputAndroid: {
      fontSize: 16,
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderWidth: 0.5,
      borderColor: 'purple',
      borderRadius: 8,
      color: 'black',
      paddingRight: 30, // para asegurarse de que el texto no se oculte detrás del ícono
    },
  });
  
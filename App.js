import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity, Dimensions, Alert } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

// Función principal de la aplicación
export default function App() {
  const [isFocused, setIsFocused] = useState(false); // Estado para el foco del campo de texto
  const [showMessage, setShowMessage] = useState(false); // Estado para mostrar el mensaje

  // Función para manejar el clic en el botón
  const handleButtonPress = () => {
    setShowMessage(true); // Actualizar el estado para mostrar el mensaje
    Alert.alert('Mensaje', 'Mira debajo de tu cama!'); // Mostrar un cuadro de diálogo con el mensaje
  };

  return (
    <ImageBackground source={require('./assets/juliofloresdeoz.jpg')} style={styles.background}>
      <View style={styles.container}>
        <Text>Bienvenido al averno</Text>
        <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
          <Text style={styles.buttonText}>Estas seguro de querer seguir?</Text>
        </TouchableOpacity>
        <TextInput
          style={[styles.input, { color: isFocused ? '#fff' : '#000' }]}
          placeholder="Pide tu deseo"
          placeholderTextColor={isFocused ? '#888' : '#888'}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        {showMessage && <Text>Mira debajo de tu cama!</Text>} {/* Mostrar el mensaje si showMessage es true */}
      </View>
    </ImageBackground>
  );
}

// Estilos para los elementos de la aplicación
const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    width: windowWidth,
    height: windowHeight,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginTop: 20,
    width: '80%',
  },
});

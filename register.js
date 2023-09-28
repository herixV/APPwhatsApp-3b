import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function Register () {

  
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton}>
        <Image
          source={require('./imagenes/flechita.jpeg')}
          style={styles.flechita}
        />
      </TouchableOpacity>
      <Text style={styles.registerText}>Regístrate</Text>
      <Text style={styles.subtitle}>Rellena lo siguiente:</Text>
      <View style={styles.formContainer}>
        <TextInput style={styles.input} placeholder="Nombre" />
        <TextInput style={styles.input} placeholder="Correo Electrónico" />
        <TextInput style={styles.input} placeholder="Contraseña" secureTextEntry={true} />
        <TextInput style={styles.input} placeholder="Confirmar Contraseña" secureTextEntry={true} />
        <TouchableOpacity style={styles.nextButton}>
          <Text style={styles.nextButtonText}>Siguiente</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.loginLink}>
        <Text style={styles.loginLinkText}>¿Ya tienes una cuenta? Accede</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  backButton: {
    position: 'absolute',
    top: 60,
    left: 3,
  },
  flechita: {
    width: 40,
    height: 40,
  },
  registerText: {
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 20,
    width: 340,
    height: 70,
  },
  subtitle: {
    fontSize: 16,
    marginTop: 10,
    fontWeight: 'bold',
    width: 200,
    height: 70,
  },
  formContainer: {
    width: '90%',
    marginTop: 20,
  },
  input: {
    borderWidth: 4,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 100,
    marginBottom: 40,
    
  },
  nextButton: {
    backgroundColor: 'red',
    borderRadius: 25,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 30,
  },
  nextButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  loginLink: {
    marginTop: 20,
  },
  loginLinkText: {
    color: 'blue',
    textAlign: 'center',
    marginTop: 100,
  },
});



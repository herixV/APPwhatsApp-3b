import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Register from './register';

export default function Login (props) {

  const {navigation} = props;
  const iraRegistro=()=>{
    navigation.navigate(Register);
  }

  return (
    <View style={styles.container}>
      <Image
        source={require('./imagenes/descarga.jpeg')}
        style={{ width: 390, height: 260 }}
      />
      <Text style={styles.logoText}>Trevelo</Text>
      <View style={styles.inputContainer}>
        <Text>Correo Electrónico</Text>
        <TextInput style={styles.input} placeholder="Ingresa tu correo" />
        <Text>Contraseña</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingresa tu contraseña"
          secureTextEntry={true}
        />
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>¿Has olvidado tu contraseña?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Acceder</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.createAccount} on onPress={iraRegistro}>
        <Text style={styles.createAccountText}>¿No tienes cuenta? Crea una</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logoText: {
    fontSize: 40,
    fontWeight: 'bold',
    position: 'absolute',
    color: "white",
    top: '15%',
    marginTop: 40,
  },
  inputContainer: {
    width: '80%',
    marginTop: 90,
    width: 360, 
    height: 250,
  },
  input: {
    borderWidth: 3,
    borderColor: '#ccc',
    borderRadius: 7,
    paddingHorizontal: 10,
    marginBottom: 10,
    width: 360, 
    height: 45,
  },
  forgotPassword: {
    textAlign: 'right',
    color: 'black',
  },
  loginButton: {
    backgroundColor: 'pink',
    borderRadius: 45,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 45,
  },
  loginButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 33,
  },
  createAccount: {
    marginTop: 95,
  },
  createAccountText: {
    color: 'blue',
    textAlign: 'center',
  },
});





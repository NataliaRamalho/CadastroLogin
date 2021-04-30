import React, {useState } from "react";
import axios from 'axios'

import env from '../utils/env';

import {
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  Keyboard,
  Alert,
} from "react-native";

import { Button } from "../components/Button";
import { RectButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import colors from "../styles/colors";
import { useNavigation } from "@react-navigation/core";

export function Login() {

  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');
  const [hide, setHide] = useState(true);
  const navigation = useNavigation();

  function handleInputEmail(value: string){
     setEmail(value)
  }

  function handleInputPassword(value: string){
    setPassword(value)
 }

  function handleHide() {
    setHide(!hide);
  }
  async function handleSubmit(){
    if(!email){
      return Alert.alert('Voce não digitou seu email 🧐')
    }
    if(!password){
      return Alert.alert('Voce não digitou sua senha 🧐')
    }

    return await axios.post(`${env.apiUrl}/login`,{email, password})
              .then((user)=>{Alert.alert(`${user.data.name} realizou o login no sistema 😃`)})
              .catch(error =>{Alert.alert(`${error!.response.data} ` || 'não foi possível conectar ao servidor 😢')})
    
  }

  function goRegister(){
    setEmail('')
    setPassword('')
    navigation.navigate('Register')
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <Text style={styles.text}> Login </Text>
          <TextInput 
            style={styles.input} 
            placeholder="Digite seu email"
            onChangeText={handleInputEmail}
            value={email}
             />
          <TextInput
            style={styles.input}
            placeholder="Digite sua senha"
            secureTextEntry={hide}
            onChangeText={handleInputPassword}
            value={password}
          />

          <RectButton
            style={styles.containerButton}
            onPress={() => handleHide()}
          >
            {hide ? (
              <Feather name="eye-off" size={15} color={colors.text} />
            ) : (
              <Feather name="eye" size={15} color={colors.text} />
            )}
            <Text style={styles.textButton}>
              {hide ? "Ver senha" : "ocultar senha"}
            </Text>
          </RectButton>
          <Button title="Logar" onPress={handleSubmit}/>
          
          <Button title="Ir para o cadastro" onPress={goRegister}/>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.background,
  },
  text: {
    fontSize: 35,
    fontWeight: "bold",
    alignSelf: "center",
    color: colors.text,
    marginVertical: 5,
  },
  input: {
    backgroundColor: colors.input,
    borderRadius: 15,
    width: 290,
    marginVertical: 8,
    height: 40,
    paddingHorizontal: 20,
  },
  containerButton: {
    flexDirection: "row",
    alignSelf: "flex-start",
    marginVertical: 10,
  },
  textButton: {
    color: colors.text,
    marginHorizontal: 7,
    fontWeight: 'bold',
    fontSize:12
  },
});

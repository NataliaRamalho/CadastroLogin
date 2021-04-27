import React, { useState } from "react";
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

export function Register() {
  const[name, setName] = useState<String>()
  const[email, setEmail] = useState<String>()
  const[password, setPassword] = useState<String>()
  const [hide, setHide] = useState(true);
  const navigation = useNavigation();

  function handleInputName(value: string){
    setName(value)
  }

  function handleInputEmail(value: string){
     setEmail(value)
  }

  function handleInputPassword(value: string){
    setPassword(value)
 }

  function handleHide() {
    setHide(!hide);
  }
  function handleSubmit(){
    if(!name){
      return Alert.alert('Voce não digitou seu nome 🧐')
    }
    if(!email){
      return Alert.alert('Voce não digitou seu email 🧐')
    }
    if(!password){
      return Alert.alert('Voce não digitou sua senha 🧐')
    }
    Alert.alert(` Parabéns ${name} esta cadastrado no sistema 😀`) 
    navigation.navigate('Login')

  }

  function goLogin(){
    navigation.navigate('Login')
  }


  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <Text style={styles.text}> Cadastro </Text>

          <TextInput 
            style={styles.input} 
            placeholder="Digite seu nome"
            onChangeText={handleInputName}
             />

          <TextInput 
            style={styles.input} 
            placeholder="Digite seu email"
            onChangeText={handleInputEmail}
             />
          <TextInput
            style={styles.input}
            placeholder="Digite sua senha"
            secureTextEntry={hide}
            onChangeText={handleInputPassword}
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
          <Button title="Cadastrar" onPress={handleSubmit}/>
          
          <Button title="Voltar para o login" onPress={goLogin}/>
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

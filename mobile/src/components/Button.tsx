import React from "react";
import {
  StyleSheet,
  Text,
} from "react-native";
import {RectButton, RectButtonProps} from 'react-native-gesture-handler'
import colors from "../styles/colors";

interface ButtonProps extends RectButtonProps{
    title:string; 
}

export function Button({title, ...rest}: ButtonProps) {
    return (
        <RectButton 
         style={styles.containerButton}
         {...rest}
         >
            <Text style={styles.text}> {title}</Text>
        </RectButton>
    )
}

const styles = StyleSheet.create({
    containerButton:{
        backgroundColor: colors.colorButton,
        borderRadius: 15,
        width:290,
        marginVertical: 8,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text:{
        color:colors.textButton,
        fontSize:20,
    }   
})
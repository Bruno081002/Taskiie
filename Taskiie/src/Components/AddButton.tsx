import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { useState } from "react";


type AddButtonProps = {
  isOpen: () => void, 
}

export default function AddButton({isOpen}:AddButtonProps) {  
    return (
      <View style={buttonStyle.container}>
        <TouchableOpacity onPress={isOpen}>
          <Text style={buttonStyle.plus}>
            <FontAwesome6 name="plus" size={50} color="white" />
          </Text>
        </TouchableOpacity>
      </View>
    );
}


const buttonStyle = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: 24,
        right: 30,
        height: 100,
        width: 100,
        backgroundColor: "#00ffff",
        borderRadius: 100,
        margin: 20,
        alignItems: "center",
        justifyContent: "center",
        elevation: 5
    }, 
    plus: {
        fontWeight: "bold"
    }
 
})
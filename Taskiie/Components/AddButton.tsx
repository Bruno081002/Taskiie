import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { useState } from "react";

export default function AddButton() {
    const [modalVisibel, setModalVisible] = useState(false);
    return (
      <View style={buttonStyle.container}>
            <TouchableOpacity onPress={() => setModalVisible(true) }>
          <Text  style={buttonStyle.plus}>
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
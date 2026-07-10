import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export default function AddButton() {
    return (
        <View style={buttonStyle.container}>
            <TouchableOpacity>
                <Text>
                    Add
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
        backgroundColor: "blue",
        borderRadius: 100,
        margin: 20,
        alignItems: "center",
        justifyContent: "center",
        elevation: 5
    }, 
    text: {

    }
})
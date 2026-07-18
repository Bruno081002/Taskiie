import { View, Text} from "react-native";
import { StyleSheet, TouchableOpacity} from "react-native";
import { blue } from "react-native-reanimated/lib/typescript/Colors";


export default function Header() {
    return (
      <View style={HeaderStyle.container}>
        <View style={HeaderStyle.container1}>
          <TouchableOpacity>
            <Text style={HeaderStyle.text}>Taskiee</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
}

const HeaderStyle = StyleSheet.create({
  container: {
    top: 0,
    padding: 10,
    boxShadow: "0px 0px 4px 0px black",
    shadowColor: "black",
    backgroundColor: "#f8f3f0",
    marginBottom: 25
  },
  container1: {
    margin: 10,
  },
  text: {
    justifyContent: "space-between",
    marginLeft: 0,
    fontWeight: "bold",
    fontSize:25
  },
});
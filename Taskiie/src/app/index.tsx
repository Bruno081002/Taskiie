import { Text, View, StyleSheet } from "react-native";
import Header from "../../Components/Header";
import AddButton from "../../Components/AddButton";

export default function Index() {
  return (
    <View style={styles.container}>
      {/* <Text>Edit src/app/index.tsx to edit this screen.</Text> */}
      <Header />
      <View style={styles.container1}></View>
      <AddButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative"
  },
  container1: {

  }
});

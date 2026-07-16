import { Text, View, StyleSheet } from "react-native";
import Header from "../../Components/header";
import AddButton from "../../Components/addButton";
import AddTaskModal from "../../Components/addTaskModal";
import { useState } from "react";

export default function Index() {
 const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      {/* <Text>Edit src/app/index.tsx to edit this screen.</Text> */}
      <Header />
      <View style={styles.container1}></View>
      <AddButton isOpen={() => setModalVisible}/>
      <AddTaskModal modalVisible={modalVisible} />
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

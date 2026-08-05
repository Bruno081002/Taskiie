import { Text, View, StyleSheet } from "react-native";
import Header from "../Components/Header";
import AddButton from "../Components/AddButton";
import AddTaskModal from "../Components/addTaskModal";
import Signup from "@/Authentication/SignUp";
import Signin from "@/Authentication/Signin";
import { useState } from "react";

export default function Index() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      {/* <Text>Edit src/app/index.tsx to edit this screen.</Text> */}
      {/* <Header />
      <View style={styles.container1}></View>
      <AddButton isOpen={() => setModalVisible(true)} />
      <AddTaskModal
        modalVisible={modalVisible}
        isClosed={() => setModalVisible(false)}
      /> */}
      {/* <Signup /> */}
      <Signin />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  container1: {},
});

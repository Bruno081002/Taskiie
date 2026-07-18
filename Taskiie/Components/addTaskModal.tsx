import { Modal, View, Text, Pressable, TextInput, TouchableOpacity} from "react-native";
import { StyleSheet } from "react-native";


type ModalProps = {
  modalVisible: boolean,
  isClosed: () =>  void
}

export default function AddTaskModal({ modalVisible, isClosed}: ModalProps) {
  return (
    <Modal visible={modalVisible} transparent={true}>
      <Pressable onPress={isClosed} style={addModalStyle.Modalcontainer}>
        <Pressable
          onPress={(e) => e.stopPropagation()}
          style={addModalStyle.ModalView}
        >
          <Text style={addModalStyle.Title}>AddTask</Text>
          <Text style={addModalStyle.ModalText}>Tittle</Text>
          <View style={addModalStyle.ModalInput}>
            <TextInput style={addModalStyle.input}></TextInput>
          </View>
          <Text style={addModalStyle.ModalText}>Date</Text>
          <TextInput style={addModalStyle.ModalInput}></TextInput>
          <Text style={addModalStyle.ModalText}>Description</Text>
          <TextInput style={addModalStyle.ModalInput}></TextInput>
          <View style={addModalStyle.buttons}>
            <TouchableOpacity style={addModalStyle.buttonStyle}>
              <Text>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity style={addModalStyle.buttonStyle}>
              <Text>Cancel</Text>
            </TouchableOpacity>
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
}


const addModalStyle = StyleSheet.create({
  Modalcontainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00000044",
  },
  ModalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    paddingBottom: 35,
    paddingRight: 35,
  },
  Title: {
    fontSize: 20,
    margin: 8,
    fontWeight: "bold",
    textAlign: "left",
    paddingRight: 35,
  },
  ModalText: {
    marginBottom:5,
    paddingLeft: 35,
  },
  ModalInput: {
    marginLeft: 35,
    marginBottom: 25,
    paddingLeft: 35,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#ccc",
  },
  input: {
    height: 44,
    fontSize: 16,
    paddingRight: 12,
    paddingVertical: 8,
  },
  buttons: {
    flex: 1,
    marginLeft: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems:"center"
  },
  buttonStyle: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "blue"
  }
});
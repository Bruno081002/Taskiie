import { Modal, View, Text, TouchableWithoutFeedback } from "react-native";
import { useState } from "react";

type ModalProps = {
    modalVisible: boolean,
}

export default function AddTaskModal({ modalVisible }: ModalProps) {
    
    return (
      <View>
        <TouchableWithoutFeedback>
                <Modal visible={modalVisible} ></Modal>
        </TouchableWithoutFeedback>
      </View>
    );
}
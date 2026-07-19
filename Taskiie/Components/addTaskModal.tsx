import {
	Modal,
	View,
	Text,
	Pressable,
	TextInput,
	TouchableOpacity,
} from "react-native";
import { StyleSheet } from "react-native";
import { PRIORITIES, PRIORITY_COLORS } from "../Constants/Priorities";
import { use, useState } from "react";


type ModalProps = {
	modalVisible: boolean;
	isClosed: () => void;
};

export default function AddTaskModal({ modalVisible, isClosed }: ModalProps) {
	const [selectedButton,setSelectedButton] = useState<String | null>(null);
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
					<Text style={addModalStyle.ModalText}>Priority</Text>
					<View style={addModalStyle.ModalPriority}>
						{PRIORITIES.map((p) => (
							<TouchableOpacity
								key={p}
								onPress={ () => setSelectedButton(p)}
								style={[
									addModalStyle.ModalPriorityButton,
									{ backgroundColor: selectedButton === p ? PRIORITY_COLORS[p] : "#bdbdbd" },
								]}
							>
								<Text>{p}</Text>
							</TouchableOpacity>
						))}
					</View>
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
		marginBottom: 5,
		paddingLeft: 35,
	},
	ModalInput: {
		marginLeft: 35,
		marginBottom: 25,
		borderWidth: 1,
		borderRadius: 8,
		borderColor: "#ccc",
	},
	input: {
		height: 44,
		fontSize: 16,
	},
	buttons: {
		flex: 1,
		marginLeft: 30,
		flexDirection: "row",
		alignItems: "center",
		justifyContent:"center",
		gap: 20,
	},
	buttonStyle: {
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "blue",
		borderRadius: 20,
		padding: 20,
	},
	ModalPriority: {
		flex: 1,
		flexDirection: "row",
		marginBottom: 5,
		paddingLeft: 35,
	},
	ModalPriorityButton: {
		justifyContent: "center",
		alignItems: "center",
		padding:20,
		margin: 6,
		borderRadius:20
	},
});

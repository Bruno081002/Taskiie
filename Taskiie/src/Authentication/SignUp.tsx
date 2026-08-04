import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { useState } from "react";

export default function Signup() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	return (
		<View style={SignupStyle.container}>
			<View style={SignupStyle.card}>
				<Text style={SignupStyle.logo}>Taskiie</Text>
				<View style={SignupStyle.form}>
					<TextInput style={SignupStyle.input} placeholder="name"></TextInput>
					<TextInput style={SignupStyle.input} placeholder="email"></TextInput>
					<TextInput
						style={SignupStyle.input}
						placeholder="password"
						secureTextEntry={true}
					></TextInput>
					<TextInput
						style={SignupStyle.input}
						placeholder="confirmPassword"
						secureTextEntry={true}
					></TextInput>
					<TouchableOpacity>
						<Text>SignUp</Text>
					</TouchableOpacity>
					<TouchableOpacity>
						<Text>Signin</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
}

const SignupStyle = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "gray",
		padding: 20,
	},
	card: {
		width: "100%",
		maxWidth: 380,
		backgroundColor: "#FFFFFF",
		borderRadius: 24,
		paddingVertical: 32,
		paddingHorizontal: 28,
		alignItems: "center",
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 8 },
		shadowOpacity: 0.08,
		shadowRadius: 20,
		elevation: 5,
	},

	logo :{
		fontSize:30,
		fontWeight: "800",
		color: "#111827",
		marginBottom: 4
		
	},
	form: {
		width: "100%",
	},
	input: {
		borderWidth: 2,
		marginBottom: 8,
		borderRadius: 10,
	},
	title: {},
});

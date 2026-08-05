
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { useState } from "react";

export default function Signin() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	return (
		<View style={SignupStyle.container}>
			<View style={SignupStyle.card}>
				<Text style={SignupStyle.logo}>Taskiie</Text>
				<Text style={SignupStyle.title}>Create you account</Text>
				<View style={SignupStyle.form}>
					<TextInput
						style={SignupStyle.input}
						placeholder="email"
						placeholderTextColor="#9ca3af"
						value={email}
						onChangeText={setEmail}
					></TextInput>
					<TextInput
						style={SignupStyle.input}
						placeholder="password"
						placeholderTextColor="#9ca3af"
						secureTextEntry={true}
						value={password}
						onChangeText={setPassword}
					></TextInput>
					<TouchableOpacity style={SignupStyle.signupbutton}>
						<Text>SignIn</Text>
					</TouchableOpacity>
					<View style={SignupStyle.signinstyle}>
						<Text>Don't You have an account?</Text>
						<TouchableOpacity>
							<Text>Signup</Text>
						</TouchableOpacity>
					</View>
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

	logo: {
		fontSize: 30,
		fontWeight: "800",
		color: "#111827",
		marginBottom: 4,
	},
	title: {
		fontSize: 14,
		color: "#9ca3af",
		marginBottom: 20,
	},
	form: {
		width: "100%",
	},
	input: {
		width: "100%",
		borderWidth: 1,
		borderColor: "#E5e7eb",
		backgroundColor: "#f9faf8",
		marginBottom: 12,
		borderRadius: 12,
		paddingVertical: 12,
		paddingHorizontal: 14,
		fontSize: 15,
		color: "#111827",
	},
	signupbutton: {
		backgroundColor: "#00FFFF",
		justifyContent: "center",
		alignItems: "center",
		alignSelf:"center",
		padding: 0,
		borderRadius: 10,
		margin: 10,
		width:90,
		height:32,
	},
	signinstyle: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		gap: 4,
	},
});

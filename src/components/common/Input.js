import React from 'react';
import {View, Text, TextInput} from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureField }) => {
	const { containerStyle,  labelStyle, inputFieldStyle } = styles;

	return (
		<View style={containerStyle}>
			<Text style={labelStyle}>{label}</Text>
			<TextInput 
				style={inputFieldStyle }
				placeholder = {placeholder}
				value = { value }
				onChangeText = { onChangeText }
				autoCorrect = {false}
				secureTextEntry = {secureField}
			/>
		</View>
	)
}

const styles = {
	containerStyle: {
		height: 40,
		flex: 1, 
		flexDirection: 'row',
		alignItems: 'center'
	}, 
	labelStyle: {
		fontSize: 18,
		paddingLeft: 20, 
		flex: 1
	},
	inputFieldStyle: {
		color: '#000',
		paddingLeft: 5,
		paddingRight: 5,
		fontSize: 18,
		lineHeight: 23,
		flex: 2
	}
	
}

export { Input }
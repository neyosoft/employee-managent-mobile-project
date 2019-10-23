import React from 'react';
import { Text, TouchableOpacity } from 'react-native';


const Button = ({onClick, children}) => {
	const {buttonStyle, textStyle} = styles;

	return (
		<TouchableOpacity style={buttonStyle} onPress={ onClick }>
			<Text style={textStyle}>{children}</Text>
		</TouchableOpacity> 
	);
}

const styles = {
	buttonStyle: {
		flex: 1,
		alignSelf: 'stretch',
		backgroundColor: '#FFF',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: '#007ffa',
		marginLeft: 5,
		marginRight: 5
	},
	textStyle: {
		fontSize: 16,
		alignSelf: 'center',
		color: '#007ffa',
		fontWeight: '600',
		paddingTop: 10, 
		paddingBottom: 10
	}
}
export { Button };
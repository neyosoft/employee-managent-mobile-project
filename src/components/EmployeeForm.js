import React, { Component } from 'react';
import { Text, View, Picker } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';

import { Card, CardSection, Input, Button } from '../components/common';

class EmployeeForm extends Component{
    render(){
    
        return (
            <View>
                <CardSection>
                    <Input 
                        label = "Name"
                        placeholder = "Enter your employee name"
                        onChangeText = { value => this.props.employeeUpdate({props: 'name', value}) }
                        value = { this.props.name }
                    />
                </CardSection>

                <CardSection>
                    <Input 
                        label = "Phone"
                        placeholder = "0813-233-8203"
                        value = { this.props.phone }
                        onChangeText = { value => this.props.employeeUpdate({props: 'phone', value}) }
                    />
                </CardSection>

                <CardSection style={{ flexDirection: 'column' }}>
                    <Text style={styles.pickerTextStyle}>Shift</Text>
                    <Picker
                        selectedValue={this.props.shift}
                        onValueChange={value => this.props.employeeUpdate({props: 'shift', value})}
                    >
                        <Picker.Item label="Monday" value="Monday" />
                        <Picker.Item label="Tuesday" value="Tuesday" />
                        <Picker.Item label="Wednessday" value="Wednessday" />
                        <Picker.Item label="Thursday" value="Thursday" />
                        <Picker.Item label="Friday" value="Friday" />
                        <Picker.Item label="Saturday" value="Saturday" />
                        <Picker.Item label="Sunday" value="Sunday" />
                    </Picker>
                </CardSection>
            </View>
        )
    }   
}

const styles = {
    pickerTextStyle: {
        fontSize: 18,
        paddingLeft: 20    
    }
}

const mapStateToProps = ({employeeForm}) => {
    const { name, phone, shift } = employeeForm;
    
    return { name, phone, shift};
}

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);
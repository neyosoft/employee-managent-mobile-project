import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeePopulate } from '../actions';
import { Text, View, TouchableWithoutFeedback } from 'react-native';

import { CardSection } from './common'

class ListItem extends Component{
    render(){
        const { name } = this.props.employee;

        return (
            <TouchableWithoutFeedback onPress={this.onRowPress}>
                <View>
                    <CardSection>
                        <Text style={styles.titleStyle}>{name}</Text>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>
        )
    }

    onRowPress = () => {
        this.props.employeePopulate(this.props.employee);
        this.props.nav.navigate('EmployeeEdit', {employee: this.props.employee});
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
}
export default connect(null, {employeePopulate})(ListItem);
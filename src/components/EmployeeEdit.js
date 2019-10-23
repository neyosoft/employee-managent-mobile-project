import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeeSave, employeeDelete } from '../actions';
import Communication from 'react-native-communications';

import EmployeeForm from './EmployeeForm';
import { Card, CardSection, Button, Confirm } from './common';

class EmployeeEdit extends Component{
    state = {
        showModal: false
    }

    static navigationOptions = {
        title: 'Edit Employee'
    }

    render(){
        
        return (
            <Card>

                <EmployeeForm /> 

                <CardSection>
                    <Button onClick={ this.onSaveButtonClick }>
                        Save Changes
                    </Button>
                </CardSection>

                <CardSection>
                    <Button onClick={ this.onTextClick }>
                        Text Schedule
                    </Button>
                </CardSection>

                <CardSection>
                    <Button onClick={ () => this.setState({ showModal: true}) }>
                        Fire
                    </Button>
                </CardSection>

                <Confirm 
                    visible = {this.state.showModal}
                    onAccept = {this.onAccept}
                    onDecline = { () => this.setState({ showModal: false}) }
                >
                    Are you sure you want to delete this?
                </Confirm>
            
            </Card>
        );
    }

    onSaveButtonClick = () => {
        const { name, phone, shift } = this.props;
        const { employee } = this.props.navigation.state.params;

        this.props.employeeSave({name, phone, shift, uid: employee.uid});
    }

    onTextClick = () => {
        const { name, phone, shift } = this.props;
        const body = `Hello ${name}, Your upcoming shift is on ${shift}`;

        Communication.text(phone, body);
    }

    onAccept = () => {
        this.props.employeeDelete(this.props.navigation.state.params.employee.uid);
        this.setState({ showModal: false})
    }

}

const mapStateToProps = ({employeeForm}) => {
    const { name, phone, shift } = employeeForm;
    
    return { name, phone, shift};
}

export default connect(mapStateToProps, { employeeSave, employeeDelete })(EmployeeEdit);
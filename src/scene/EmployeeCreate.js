import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeeCreate } from '../actions';

import EmployeeForm from '../components/EmployeeForm';
import { Card, CardSection, Button } from '../components/common';

class EmployeeCreate extends Component{
    static navigationOptions = {
        title: 'Add Employee'
    }
   
    render(){
        
        return (
            <Card>

                <EmployeeForm {...this.props} />

                <CardSection>   
                    <Button onClick={ this.onButtonClick }>
                        Add Employee
                    </Button>
                </CardSection>
            
            </Card>
        );
    }

    onButtonClick = () => {
        const { name, phone, shift } = this.props;

        this.props.employeeCreate({name, phone, shift});
    }

}

const mapStateToProps = ({employeeForm}) => {
    const { name, phone, shift } = employeeForm;
    
    return { name, phone, shift};
}

export default connect(mapStateToProps, { employeeCreate })(EmployeeCreate);
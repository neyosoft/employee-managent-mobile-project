import React, { Component } from 'react';
import {Text} from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Button, Input, Spinner } from './common';
import { emailChanaged, passwordChanged, loginUser } from '../actions';

class LoginForm extends Component{
    static navigationOptions = {
        title: 'Log in'
    };
    
    render(){
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder='email@gmail.com'
                        onChangeText = {this.onChangeEmail.bind(this)}
                        value = {this.props.email}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        secureField
                        label="Password"
                        placeholder='Enter password'
                        onChangeText = {this.onChangePassword.bind(this)}
                        value = {this.props.password}
                    />
                </CardSection>

                <Text style={styles.errorTextStyle}>
                    {this.props.error}
                </Text>

                <CardSection>
                    { this.renderButton() }
                </CardSection>
            </Card>
        ); 
    }

    renderButton(){
        if(this.props.loading){
            return <Spinner size="large" />
        }else{
            return <Button onClick={this.attempLogin}> Log In</Button>
        }
    }

    onChangeEmail(text){
        this.props.emailChanaged(text);
    }

    onChangePassword(text){
        this.props.passwordChanged(text);
    }

    attempLogin = () => {
        const { email, password } = this.props;
        this.props.loginUser({email, password});
    }
}

const styles = {
    errorTextStyle: {
        color: 'red',
        fontSize: 20,
        alignSelf: 'center'
    }
}

const mapStateToProps = ({auth}) => {
    const {email, password, error, loading } = auth;
    return { email, password, error, loading }
}

export default connect(mapStateToProps, { emailChanaged, passwordChanged, loginUser })(LoginForm);
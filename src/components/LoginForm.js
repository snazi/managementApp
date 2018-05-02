import React, { Component } from 'react';
import {View, Text} from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;

    this.props.loginUser({ email, password });
  }

  renderErrorMessage() {
    if (this.props.errorMessage) {
      return(
        <View style={{backgroundColor: 'white'}}>
          <Text style={styles.errorMessageStyle}>
            {this.props.errorMessage}
          </Text>
        </View>
      );
    }
  }

  renderButton() {
    if(this.props.isLoading) {
      return <Spinner size="large" />;
    }

    return(
      <Button onPress={this.onButtonPress.bind(this)}>
            Login
          </Button>
    );
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@gmail.com"
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
          />
        </CardSection>
          {this.renderErrorMessage()}
        <CardSection>
          
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorMessageStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
}

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    errorMessage: state.auth.errorMessage,
    isLoading: state.auth.isLoading
  };
};

export default connect(mapStateToProps, {
  emailChanged, passwordChanged, loginUser
})(LoginForm);

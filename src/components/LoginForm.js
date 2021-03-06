import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '' };
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder="example@gmail.com"
            label="Email"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry={true} // could also just list it without true, since it would be true by default
            placeholder="password"
            label="Password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>

        <CardSection>
          <Button>
            Log In
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;

import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyCc5ZE8nQzSnw7wKTVvBWd72zKj74-yNO8",
      authDomain: "auth-811ce.firebaseapp.com",
      databaseURL: "https://auth-811ce.firebaseio.com",
      projectId: "auth-811ce",
      storageBucket: "auth-811ce.appspot.com",
      messagingSenderId: "39366263604"
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;

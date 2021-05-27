import React, {Component} from 'react';
import {ImageBackground, View, StatusBar} from 'react-native';
import {Container, Button, H3, Text} from 'native-base';

import styles from './styles';

class Home extends Component {
  render() {
    return (
      <Container>
        <StatusBar barStyle="light-content" />
        <H3 style={styles.text}>App to showcase</H3>
      </Container>
    );
  }
}

export default Home;

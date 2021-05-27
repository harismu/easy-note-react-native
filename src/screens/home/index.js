import React, {Component} from 'react';
import {ImageBackground, View, StatusBar} from 'react-native';
import {Header, Container, Button, H3, Text, Left, Icon} from 'native-base';

import styles from './styles';

class Home extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button
            transparent>
              <Icon name="ios-menu"/>
            </Button>
          </Left>
        </Header>
            <View style={{ marginTop: 50 }} />
            <H3 style={styles.text}>App to showcase</H3>
            <View style={{ marginTop: 8 }} />
            <H3 style={styles.text}>NativeBase components</H3>
            <View style={{ marginTop: 8 }} />
      </Container>
    );
  }
}

export default Home;

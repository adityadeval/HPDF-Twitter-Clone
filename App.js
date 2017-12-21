import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Title, Drawer, Thumbnail, Left, Body, Button, Right, } from 'native-base';
import HomeScreen from './Component/HomeScreen';
import SearchScreen from './Component/SearchScreen';
import MessagesScreen from './Component/MessagesScreen';
import NotificationScreen from './Component/NotificationScreen';
import Side from './Component/Side';

const Styles = {
        headerStyle: {
          paddingTop: 5
        },
        tcolor: {
          color: 'white'
        },
        tabc: {
          color: 'white'
	  viewStyle: {
          backgroundColor: '#0084b4',
          paddingTop: 20
        },
}
};

export default class App extends Component {
      closeDrawer = () => {
      this.drawer._root.close()
    };
    openDrawer = () => {
      this.drawer._root.open()
    };
  render() {
    return (
      <Drawer
        ref={(ref) => { this.drawer = ref; }}
        content={<Side navigator={this.navigator} />}
        onClose={() => this.closeDrawer()}>
              <Container>
                  <Header style={Styles.viewStyle}>
                    <Left>
                      <Button onPress={() => this.openDrawer()} transparent>
                        <Thumbnail source={{ uri: 'https://pbs.twimg.com/profile_images/943822697653346304/VNRbPOeU_400x400.jpg' }} style=    {{ width: 30, height: 30 }} />
                       </Button>
                    </Left>
                    <Body>
                      <Title>Home</Title>
                    </Body>
                    <Right />
                  </Header>

            <Tabs>
              <Tab heading={<TabHeading><Icon name="md-home" /></TabHeading>}>
                <HomeScreen />
              </Tab>
              <Tab heading={<TabHeading><Icon name="md-search" /></TabHeading>}>
                <SearchScreen />
              </Tab>
              <Tab heading={<TabHeading><Icon name="ios-notifications-outline" /></TabHeading>}>
                <NotificationScreen />
              </Tab>
              <Tab heading={<TabHeading><Icon name="md-mail-open" /></TabHeading>}>
                <MessagesScreen />
              </Tab>
            </Tabs>
          </Container>
      </Drawer>
    );
  }
}


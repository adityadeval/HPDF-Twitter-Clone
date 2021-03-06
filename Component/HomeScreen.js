import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
export default class HomeScreen extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Content>
            <Card>
              <CardItem>
                <Left>
                  <Thumbnail source={{ uri: 'https://pbs.twimg.com/profile_images/718314653181427716/9gKTzW1d_400x400.jpg'}} />
                  <Body>
                    <Text>PMO India</Text>
		    <Text note>@PMOIndia</Text>
                  </Body>
                </Left>
              </CardItem>
              <Body>
                <Text>
                  Mr. Osamu Suzuki met PM @narendramodi today morning.
                </Text>
              </Body>
              <CardItem cardBody>
                <Image source={{uri: 'https://pbs.twimg.com/media/DRjb1ErUMAAwfxb.jpg'}} style={{height: 200, width: null, flex: 1}}/>
              </CardItem>
              <CardItem>
                <Left>
                  <Button transparent>
                    <Icon active name="ios-chatbubbles-outline" />
                    <Text>153</Text>
                  </Button>
                </Left>
                <Body>
                  <Button transparent>
                    <Icon active name="ios-git-compare" />
                    <Text>310</Text>
                  </Button>
                </Body>
                <Right>
                  <Button transparent>
                    <Icon active name="ios-heart-outline" />
                    <Text>2.0K</Text>
                  </Button>
                </Right>
                <Right>
                  <Button transparent>
                    <Icon active name="ios-mail-outline" />
                    <Text></Text>
                  </Button>
                </Right>
              </CardItem>
            </Card>
          </Content>
        <Card>
          <CardItem>
            <Left>
              <Thumbnail source={{uri: 'https://pbs.twimg.com/profile_images/875388334003986432/eUsjmVRJ_400x400.jpg'}} />
              <Body>
                <Text>Windows</Text>
                <Text note>@Windows</Text>
              </Body>
            </Left>
          </CardItem>
          <Body>
            <Text>
              Pick up the hit thriller #ITMovie, three weeks before it's out on BluRay, 
              on #MicrosoftMoviesTV: http://msft.social/xLmG63 
            </Text>
          </Body>
          <CardItem cardBody>
            <Image source={{uri: 'https://pbs.twimg.com/media/DRiP3m4W4AAwBpA.jpg'}} style={{height: 200, width: null, flex: 1}}/>
          </CardItem>
         
          <CardItem>
            <Left>
              <Button transparent>
                <Icon active name="ios-chatbubbles-outline" />
                <Text>4</Text>
              </Button>
            </Left>
            <Body>
              <Button transparent>
                <Icon active name="ios-git-compare" />
                <Text>16</Text>
              </Button>
            </Body>
            <Right>
              <Button transparent>
                <Icon active name="ios-heart-outline" />
                <Text>104</Text>
              </Button>
            </Right>
            <Right>
              <Button transparent>
                <Icon active name="ios-mail-outline" />
                <Text>2</Text>
              </Button>
            </Right>
          </CardItem>
        </Card>
        <Content>
        <Card>
          <CardItem>
            <Left>
              <Thumbnail source={{uri: 'https://pbs.twimg.com/profile_images/841566871480614912/L26uTKo__400x400.jpg'}} />
              <Body>
                <Text>Kalam Center</Text>
                <Text note>@KalamCenter</Text>
              </Body>
            </Left>
          </CardItem>
          <Body>
            <Text>
              Our @Dreamathon campaign saw many #young #dreamers 
              from across the country who carved their destiny 
              through #paintings and #poems depicting #Superpower 
              #India
            </Text>
          </Body>
          <CardItem cardBody>
            <Image source={{uri: 'https://pbs.twimg.com/media/DRfRRGyVoAAul3X.png'}} style={{height: 200, width: null, flex: 1}}/>
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent>
                <Icon active name="ios-chatbubbles-outline" />
                <Text>220</Text>
              </Button>
            </Left>
            <Body>
              <Button transparent>
                <Icon active name="ios-git-compare" />
                <Text>100</Text>
              </Button>
            </Body>
            <Right>
              <Button transparent>
                <Icon active name="ios-heart-outline" />
                <Text>10</Text>
              </Button>
            </Right>
            <Right>
              <Button transparent>
                <Icon active name="ios-mail-outline" />
                <Text>3</Text>
              </Button>
            </Right>
          </CardItem>
        </Card>
      </Content>
      </Container>
    );
  }
}

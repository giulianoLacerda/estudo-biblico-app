import React, { Component } from 'react';
import { StatusBar, Image, TouchableNativeFeedback } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Header, Title, Button, Icon, Left, Body, Right } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class ContentExample extends Component {
    render() {
        return (
            <Container>
            <StatusBar backgroundColor='#003366'/>
                <Content>
                        <Card>
                            <CardItem>
                            <Left>
                                <Thumbnail source={require('../img/logo2.png')} />
                                <Body>
                                <Text>Estudo Bíblico</Text>
                                <Text note>Espírito de Profecia</Text>
                                </Body>
                            </Left>
                            </CardItem>
                            <CardItem button onPress={()=> Actions.month()} cardBody>
                            <Image source={require('../img/logo2.png')} style={{height: 200, width: null, flex: 1}}/>
                            </CardItem>
                            <CardItem>
                            <Left>
                                <Button transparent>
                                <Icon active name="thumbs-up" />
                                <Text>12 Likes</Text>
                                </Button>
                            </Left>
                            <Body>
                                <Button transparent>
                                <Icon active name="chatbubbles" />
                                <Text>4 Comments</Text>
                                </Button>
                            </Body>
                            </CardItem>
                        </Card>
                </Content>
            </Container>
        );
    }
}
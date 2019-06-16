import React, { Component } from 'react';
import { Image, ListView, FlatList } from 'react-native';
import { Container, Content, Badge, List, Switch, ListItem, Text, Header, Title, Button, Icon, Left, Body, Right } from 'native-base';

export default class ContentExample extends Component {
    render() {

        var months = ['Janeiro','Fevereiro','Março','Abril','Mail','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];

        return (
            <Container>
                <Content>
                    <List dataArray={months}
                        renderRow={(item) =>
                        <ListItem icon>
                            <Body>
                                <Text>{item}</Text>
                            </Body>
                            <Right>
                                <Icon active name="arrow-forward" />
                            </Right>
                        </ListItem>
                    }>
                    </List>
                </Content>
            </Container>
        );
    }
}
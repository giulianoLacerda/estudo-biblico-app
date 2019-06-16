import React, { Component } from 'react';
import { Container, 
    Content, 
    Card, 
    CardItem, 
    Text, Body,
    ListItem } from 'native-base';
import { View, FlatList, ScrollView } from 'react-native';
import * as bible from '../bibleBooks/books';
import * as plans from '../bibleBooks/plans';
import { connect } from 'react-redux';

const biblicalText = props => {

    const month = props.month;
    const day = props.day;

    this.state = {
        day: plans[month]['days'][day],
        data: plans[month]['days'][day]['books']
    }    

    _getText = (book, cap) => {
        var text = "";
        const capsLenght = cap.length;
        for(i=cap[0]; i<(cap[0]+capsLenght); i++) {
            text = text+"\n"+"Capítulo "+i.toString()+"\n"+"\n";
            const versesNumber = Object.keys(book[i-1][(i).toString()]).length;
            for(j=1; j<=versesNumber; j++) {
                text = text+j.toString()+". ";
                text = text+book[i-1][(i).toString()][j.toString()];
                text = text+"\n";
            }
        }
        return text;
    
    }

    _renderSeparator = () => {
        return (
            <View
            style={{
                height: 0,
                width: "86%",
                backgroundColor: "#CED0CE",
                marginLeft: "14%"
            }}
            />
        );
    };

    _renderItem = ({ item }) => {
        const index = this.state.data.findIndex(month => month === item);
        return (
        <Content>
            <Card>
                <CardItem header>
                    <Text> {item} </Text>
                </CardItem>
                <CardItem>
                    <Body>
                       <Text>
                           {this._getText(bible[item], this.state.day['caps'][index])}
                       </Text>
                    </Body>
                </CardItem>
            </Card>
        </Content>
        );
        
    };

    
    return (
        <FlatList
        data={this.state.data}
        renderItem={this._renderItem}
        keyExtractor={item => item}
        ItemSeparatorComponent={this._renderSeparator}
        containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}
        style={{backgroundColor: "#fff"}}
        />
    );
    
}

const mapStateToProps = state => (
    {
        month: state.accessReducer.month,
        day: state.accessReducer.day
    }
)

export default connect(mapStateToProps, null)(biblicalText);
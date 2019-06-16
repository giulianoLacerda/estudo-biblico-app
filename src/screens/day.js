import React, { Component } from 'react';
import { View, List, FlatList } from 'react-native';
import { Text, ListItem, Left, Body, Icon, Right, Title } from "native-base";
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { changeDay } from '../actions/accessActions';
import * as plans from '../bibleBooks/plans';

const daysList = props => {
    
    const month = props.month;

    this.state = {
        data: plans[month]['days'],
    };
    

    bookItem = ( item ) => {
        // Replace spaces between caps by `,`.
        this.caps1 = item.caps[0].toString().replace(" ", ", ");
        if (item.caps.length === 2) {
            this.caps2 = item.caps[1].toString().replace(" ", ", ");
            return (
                <Text note>{item.books[0]} {this.caps1} - {item.books[1]} {this.caps2}</Text>
            
            );       
        } else {
            return (
                <Text note>{item.books[0]} {this.caps1}</Text>
            )
        }
    }

    renderItem = ({ item }) => {
        return (
        <ListItem style={{ marginLeft: 0}}
        onPress={()=> {props.changeDay(item.day-1); return(Actions.biblicalText())}}>
            <Body>
            <Text>{item.title}</Text>
            {this.bookItem(item)}
            </Body>
            <Right>
                <Icon active name='arrow-forward'/>
            </Right>
        </ListItem>
        );
        
    };
    
    return (
        <FlatList
        data={this.state.data}
        renderItem={this.renderItem}
        keyExtractor={item => item.title}
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

export default connect(mapStateToProps, { changeDay })(daysList);
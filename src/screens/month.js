import React, { Component } from 'react';
import { FlatList, TouchableNativeFeedback } from 'react-native';
import { Text, ListItem, Left, Body, Icon, Right, Title, Button } from "native-base";
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { changeMonth } from '../actions/accessActions';

const monthsList = props => {
    
    this.state = {
        data: [
        { name: "Janeiro"},
        { name: "Fevereiro"},
        { name: "Março"},
        { name: "Abril"},
        { name: "Maio"},
        { name: "Junho"},
        { name: "Julho"},
        { name: "Agosto"},
        { name: "Setembro"},
        { name: "Outubro"},
        { name: "Novembro"},
        { name: "Dezembro"},
        ],
    };
    
    renderItem = ({ item }) => {
        return (
            <ListItem button style={{ marginLeft: 0}} 
            onPress={ () => { props.changeMonth(item.name); return( Actions.day()) }}>
                    <Body>
                    <Text>{item.name}</Text>
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
        keyExtractor={item => item.name}
        style={{backgroundColor: "#fff"}}
        />
    );
    
}

const mapStateToProps = state => (
    {
        month: state.accessReducer.month
    }
)

export default connect(mapStateToProps, { changeMonth })(monthsList);
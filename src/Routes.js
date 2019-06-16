import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';

// Importando screens
import main from './screens/main';
import month from './screens/month';
import day from './screens/day';
import biblicalText from './screens/biblicalText';


export default props => (
    <Router navigationBarStyle={{ backgroundColor: '#003366'}} titleStyle={{ color: '#FFFFFF'}} tintColor='#FFFFFF'>
        <Stack key='main'>
            <Scene key='main' component={main} animationEnabled={false}  title="App Bíblico" initial/>
            <Scene key='month' component={month} animationEnabled={false}  title="Meses" />
            <Scene key='day' component={day} animationEnabled={false}  title="Dias" />
            <Scene key='biblicalText' component={biblicalText} animationEnabled={false}  title="Texto Bíblico"/>
            </Stack>
    </Router>
);
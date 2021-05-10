import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/FontAwesome';

import Home from './pages/Home';
import About from './pages/About';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
    return (
        <Drawer.Navigator
            drawerStyle={{
                backgroundColor: '#ebebeb',
                width: 220,
            }}
        >
            <Drawer.Screen
                name="Home"
                component={Home}
                options={{
                    title: 'Home',
                    drawerIcon: ({ focused }) => (
                        <Icon
                            name='home'
                            size={20}
                            color={focused ? '#000' : '#000'}
                        />
                    )
                }}
            />

            <Drawer.Screen
                name="Sobre"
                component={About}
                options={{
                    title: 'Sobre',
                    drawerIcon: ({ focused }) => (
                        <Icon
                            name='tag'
                            size={20}
                            color={focused ? '#000' : '#000'}
                        />
                    )
                }}
            />
        </Drawer.Navigator>
    )
}

export default DrawerNavigator;
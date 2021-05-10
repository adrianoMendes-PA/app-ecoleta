import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

export default function Menu() {
    const navigation = useNavigation();

    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation.openDrawer()}>
            <Icon name="menu" size={27} color='#000' />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        zIndex: 9,
        width: 40,
        height: 40,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
        left: 8,
        top: 25,
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        borderBottomRightRadius: 25,
        borderBottomLeftRadius: 25,
        elevation: 2,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        textShadowOffset: {
            width: 1,
            height: 3
        }
    }
});
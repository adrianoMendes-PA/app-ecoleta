import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import Map from '../../components/Map';
import Menu from '../../components/Menu';

export default function Home() {
    return (
        <SafeAreaView style={styles.container}>
            <Map />
            <Menu />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
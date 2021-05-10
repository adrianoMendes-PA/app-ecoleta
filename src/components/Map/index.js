import React, { useEffect, useState } from 'react';
import MapboxGL from '@react-native-mapbox-gl/maps';
import { View, PermissionsAndroid, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Geolocation from '@react-native-community/geolocation';

MapboxGL.setAccessToken('pk.eyJ1IjoiYWRyaWFubzBtZW5kZXMiLCJhIjoiY2ttdHoyM3BmMHdpMzJ1cXluZjJlaDJ3MyJ9.37CpR32zQyk-axRho0yA5Q');

export default function Mapa() {

    const [currentLatitude, setCurrentLatitude] = useState(0);
    const [currentLongitude, setCurrentLongitude] = useState(0);

    useEffect(() => {
        callLocation();
    }, []);

    const getLocation = () => {
        Geolocation.getCurrentPosition(
            (position) => {
                setCurrentLatitude(position.coords.latitude);
                setCurrentLongitude(position.coords.longitude);
            },
            (error) => alert(error.message),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        );
    }

    const callLocation = () => {
        if (Platform.OS === 'ios') {
            getLocation();
        } else {
            const requestLocationPermission = async () => {
                try {
                    const granted = await PermissionsAndroid.request(
                        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                        {
                            title: "Permissão de Acesso à Localização",
                            message: "Este aplicativo precisa acessar sua localização.",
                            buttonNeutral: "Pergunte-me depois",
                            buttonNegative: "Cancelar",
                            buttonPositive: "OK"
                        }
                    );
                    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                        getLocation();
                    } else {
                        alert('Permissão de Localização negada');
                    }
                } catch (error) {
                    console.warn(err);
                }
            };
            requestLocationPermission();
        }
    }

    const renderAnnotations = () => {
        return (
            <MapboxGL.PointAnnotation
                key="pointAnnotation"
                id="pointAnnotation"
                coordinate={[currentLongitude, currentLatitude]}
                selected={true}
                snippet='TESTE'
            >
                <View>
                    <Icon name='location-history' size={40} color="#FFF" />
                </View>
                <MapboxGL.Callout title='Você está aqui' />
            </MapboxGL.PointAnnotation>
        );
    }

    return (
        <View style={{ flex: 1, height: "100%", width: "100%" }}>
            <MapboxGL.MapView
                centerCoordinate={[currentLongitude, currentLatitude]}
                zoomLevel={15}
                styleURL={MapboxGL.StyleURL.Dark}
                style={{ flex: 1 }}
            >
                <MapboxGL.Camera
                    centerCoordinate={[currentLongitude, currentLatitude]}
                    zoomLevel={15}
                    animationMode={'flyTo'}
                    animationDuration={0}
                >
                </MapboxGL.Camera>
                {renderAnnotations()}
            </MapboxGL.MapView>
        </View>
    )
}
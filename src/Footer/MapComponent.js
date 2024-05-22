
import React from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

const MapComponent = () => {
    const position = [58.0105, 56.2502];

    return (
        <YMaps>
            <div style={{ height: '100%', width: '100%' }}>
                <Map defaultState={{ center: position, zoom: 13 }} width="100%" height="100%">
                    <Placemark geometry={position} />
                </Map>
            </div>
        </YMaps>
    );
};

export default MapComponent;

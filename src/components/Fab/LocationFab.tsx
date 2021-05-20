import * as Location from 'expo-location';
import React, { useCallback, useState } from 'react'
import Fab from './Fab';

interface LocationFabProps {
    onPress: (location: Location.LocationObject) => void;
}

const LocationFab: React.FC<LocationFabProps> = ({
    onPress
}) => {

    const [getting, setGetting] = useState(false)

    const location = useCallback(
        async () => {
            setGetting(true);
            let location: Location.LocationObject = {} as Location.LocationObject;
            try {

                let { status } = await Location.requestForegroundPermissionsAsync();
                if (status !== 'granted') {
                    console.warn('Permission to access location was denied');
                    return;
                }

                location = await Location.getCurrentPositionAsync({});
            } catch (error) {
                console.error("on request permission");
            }
            setGetting(false);
            onPress(location);
        },
        [],
    );

    return (
        <Fab
            iconName="crosshairs-gps"
            onPress={location}
            loading={getting}
        />
    )
}

export default LocationFab

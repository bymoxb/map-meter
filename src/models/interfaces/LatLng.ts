import { LatLng as LatLngBase } from 'react-native-maps';

interface LatLng extends LatLngBase {
    id: number,
    selected: boolean
}

export default LatLng;
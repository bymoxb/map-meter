import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Fab from './Fab'

interface LayersFabProps {
    onPress: () => void
}

const LayersFab: React.FC<LayersFabProps> = ({
    onPress
}) => {

    const [showModal, setShowModal] = useState(false)

    return (
        <Fab iconName="map-plus" onPress={onPress} />
    )
}

export default LayersFab;

const styles = StyleSheet.create({})

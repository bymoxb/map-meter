import React, { useState } from 'react';
import { Modal, StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';

import I18n from './../../i18n'
import { IconFamily, TipoMedicion } from '../../models';
import MeasureTypeButton from '../Buttons/MeasureTypeButton';

interface MeasureTypeModalProps {
    visible: boolean,
    closeModal: () => void,
    onPress: (tipo: TipoMedicion) => void
}

const MeasureTypeModal: React.FC<MeasureTypeModalProps> = ({ visible, closeModal, onPress }) => {

    const handleOnPress = (tipo: TipoMedicion) => {
        closeModal()
        onPress(tipo)
    }

    const items = [
        {
            text: I18n.t("labels.manual"),
            iconFamily: IconFamily.MaterialIcons,
            iconName: "touch-app",
            onPress: () => handleOnPress(TipoMedicion.manual)
        },
        {
            text: I18n.t("labels.precise"),
            iconFamily: IconFamily.FontAwesome,
            iconName: "crosshairs",
            onPress: () => handleOnPress(TipoMedicion.preciso)
        },
    ];

    return (
        <Modal
            visible={visible}
            transparent={true}
            animationType="fade"
            onRequestClose={closeModal}>
            <TouchableWithoutFeedback onPress={closeModal}>
                <View style={[styles.centeredView]}>
                    <TouchableWithoutFeedback onPress={() => { }} >
                        <View style={styles.modalView}>
                            {
                                items.map((item, index) => (
                                    <MeasureTypeButton
                                        key={index}
                                        text={item.text}
                                        iconName={item.iconName}
                                        iconFamily={item.iconFamily}
                                        onPress={item.onPress}
                                    />
                                ))
                            }
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    )
}


const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: `rgba(0,0,0,0.5)`
    },
    modalView: {
        margin: 20,
        padding: 15,
        borderRadius: 10,
        backgroundColor: 'white',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
});

export default MeasureTypeModal

import React from 'react'
import { View, Text } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { hexToRGB } from '../../libs';
import { Colors } from '../../styles';

interface EditBarButtonProps {
    text: string,
    iconName: any,
    onPress: () => void
}

const EditBarButton: React.FC<EditBarButtonProps> = ({
    text,
    onPress,
    iconName,
}) => {
    return (
        <TouchableHighlight
            onPress={onPress}
            underlayColor={`rgba(${hexToRGB(Colors.GRAY[900])},0.2)`}
            style={{
                borderRadius: 10,
                paddingVertical: 5,
                alignItems: "center",
                justifyContent: "center",
            }}>
            <View>
                <Icon name={iconName} size={25} color={"white"} style={{ alignSelf: "center" }} />
                <Text style={{ color: "white", fontWeight: "bold", marginTop: 5 }}>{text}</Text>
            </View>
        </TouchableHighlight>
    )
}

export default EditBarButton

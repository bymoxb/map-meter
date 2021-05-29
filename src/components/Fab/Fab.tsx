import React from "react";
import {
  ActivityIndicator,
  StyleSheet,
  ViewStyle,
  StyleProp,
} from "react-native";

import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Colors } from "../../styles";

interface FabProps {
  iconName: any;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  loading?: boolean;
  size?: number;
}

const Fab: React.FC<FabProps> = ({
  style,
  onPress,
  loading,
  size = 70,
  iconName = "cursor-default",
}: FabProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
        },
        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator color={"white"} size={size * 0.5} />
      ) : (
        <Icon name={iconName} color={"white"} size={size * 0.5} />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.DarkForest[400],
  },
});

export default Fab;

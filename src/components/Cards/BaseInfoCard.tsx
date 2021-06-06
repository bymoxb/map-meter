import React from "react";
import { Linking, StyleSheet, Text, View } from "react-native";
import * as Animatable from "react-native-animatable";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { useTheme } from "../../context/ThemeProvider";

type BaseInfoCardProps = {
  title: string;
  link: string;
  children: React.ReactNode;
};

const BaseInfoCard: React.FC<BaseInfoCardProps> = ({
  title,
  link,
  children,
}: BaseInfoCardProps) => {
  const { theme } = useTheme();

  const _styles = StyleSheet.create({
    text: {
      color: theme == "light" ? "black" : "white",
      textAlign: "center",
    },
  });

  const onPress = () => {
    Linking.openURL(link);
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.title, _styles.text]}>{title}</Text>

      <Animatable.View
        animation="pulse"
        duration={5000}
        iterationCount="infinite"
      >
        <TouchableWithoutFeedback style={styles.button} onPress={onPress}>
          {children}
        </TouchableWithoutFeedback>
      </Animatable.View>
    </View>
  );
};

export default BaseInfoCard;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingVertical: 10,
  },
  title: {
    marginBottom: 10,
    fontSize: 30,
  },
  button: {
    borderRadius: 5,
  },
});

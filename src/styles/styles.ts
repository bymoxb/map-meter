import { StyleSheet } from "react-native";
import { Colors } from ".";
import { hexToRGB } from "../libs";

export const Main = StyleSheet.create({
  main: {
    flex: 1,
  },
  floatContainerWrap: {
    position: "absolute",
  },
  floatContainer: {
    position: "absolute",
    width: "100%",
  },
  map: {
    flex: 1,
  },
});

export const Dropdown = StyleSheet.create({
  modalContainer: {
    flex: 1,
    paddingTop: 60 + 38,
    alignItems: "center",
  },
  dropDown: {
    borderWidth: 2,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    borderColor: Colors.GRAY[300],
    backgroundColor: `rgba(${hexToRGB(Colors.GRAY[300])},0.3)`,
  },
  modalBodyContainer: {
    margin: 20,
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  container: {
    flex: 1,
    height: 50,
    borderWidth: 2,
    borderRadius: 50 / 2,
    justifyContent: "center",
  },
  textLeft: {
    fontWeight: "bold",
    textAlign: "right",
  },
  textTitle: {
    fontWeight: "bold",
    textAlign: "center",
  },
  optionButton: {
    paddingVertical: 8,
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.GRAY[300],
  },
});

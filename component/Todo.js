import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function Todo(props) {
  return (
    <View style={styles.item}>
      <Text style={styles.text}>{props.text}</Text>
      <TouchableOpacity onPress={() => console.log("delete todo")}>
        <MaterialCommunityIcons name="trash-can" size={24} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#D2D2D2",
    marginVertical: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
  },
  text: {
    fontSize: 20,
  },
});

export default Todo;

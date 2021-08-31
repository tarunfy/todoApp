import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  FlatList,
  TextInput,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Todo from "./component/Todo";
export default function App() {
  const [todos, setTodos] = useState(["task 1", "task 2"]);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Today's Todos</Text>
        <View style={styles.list}>
          {todos.map((todo, index) => (
            <TouchableOpacity key={index} onPress={() => console.log("gg")}>
              <Todo text={todo}></Todo>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View style={styles.footer}>
        <TextInput style={styles.input} placeholder="Type your todo..." />
        <TouchableOpacity>
          <AntDesign name="pluscircle" color="black" size={50} />
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: 60,
    paddingHorizontal: 15,
    justifyContent: "space-between",
  },
  header: {
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  list: {
    marginTop: 18,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    maxWidth: "80%",
    borderColor: "#333",
    height: 50,
    width: "70%",
  },
});

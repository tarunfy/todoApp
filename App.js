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
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import Todo from "./component/Todo";
export default function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");
  const taskHandler = () => {
    setTodos([...todos, task]);
    setTask("");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container} onPress={Keyboard.dismiss}>
        <View style={styles.header}>
          <Text style={styles.title}>Today's Todos</Text>
          <View style={styles.list}>
            {todos.map((todo, index) => (
              <Todo
                todos={todos}
                setTodos={setTodos}
                index={index}
                text={todo}
                key={index}
              ></Todo>
            ))}
          </View>
        </View>
        <View style={styles.footer}>
          <TextInput
            value={task}
            onChangeText={(task) => setTask(task)}
            style={styles.input}
            placeholder="Type your todo..."
          />
          <TouchableOpacity onPress={taskHandler}>
            <AntDesign name="pluscircle" color="black" size={50} />
          </TouchableOpacity>
        </View>
        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
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
    padding: 10,
  },
});

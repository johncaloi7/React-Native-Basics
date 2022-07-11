import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Image,
} from "react-native";

const GoalInput = ({ onAddGoal, visible, onCancel }) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    {
      onAddGoal(enteredGoalText);
    }

    setEnteredGoalText("");
  }

  return (
    <Modal visible={visible} animationType="fade">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          style={styles.textInput}
          onChangeText={goalInputHandler}
          placeholder="Your goals"
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button onPress={addGoalHandler} title="Add goal" />
          </View>
          <View style={styles.button}>
            <Button onPress={onCancel} title="Cancel" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff5a6",
    paddingBottom: 110,
    // borderBottomWidth: 1,
    // borderBottomColor: "#cccccc",
  },
  image: {
    width: 100,
    height: 90,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "100%",
    marginRight: 8,
    padding: 8,
  },
  buttonContainer: {
    marginTop: 8,
    flexDirection: "row",
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});

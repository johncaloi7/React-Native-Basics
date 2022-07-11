import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";

const GoalItem = ({ text, onDeleteItem, id }) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#210644", backgroundColor: "#ffffff" }}
        style={({ pressed }) => pressed && styles.pressedItem}
        onPress={() => onDeleteItem(id)}
      >
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    marginVertical: 8,
    width: 250,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: "white",
    textAlign: "center",
    padding: 8,
  },
});

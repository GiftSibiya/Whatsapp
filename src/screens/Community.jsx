import { View, Text, StyleSheet } from "react-native";
import React from "react";

const community = () => {
  return (
    <View style={styles.container}>
      <Text>community</Text>
    </View>
  );
};

export default community;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
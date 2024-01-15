// Import Dependencies //
import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { MaterialCommunityIcons } from "react-native-vector-icons";
//--//

// Import Files //
import Chat from "./screens/chat";
//--//

const Navigation = () => {
  return (
    <View style={styles.container}>
      <Text>NSviNavi</Text>
    </View>
  );
};

export default Navigation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

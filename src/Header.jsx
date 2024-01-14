import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Feather } from "react-native-vector-icons";

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.HeaderContainer}>
        <Text style={styles.headerText}> WhatsApp</Text>
        <View style={styles.iconContainer}></View>
        <Feather style={styles.icons} name="camera" size={20} color="white" />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0e806a",
    paddingTop: 80,
  },
  HeaderContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 16,
  },
  iconContainer: {},
  icons: {},
});

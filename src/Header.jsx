import { View, Text, StyleSheet } from "react-native";
import React from "react";
import {
  Feather,
  Fontisto,
  MaterialCommunityIcons,
} from "react-native-vector-icons";

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.HeaderContainer}>
        <Text style={styles.headerText}> WhatsApp</Text>
        <View style={styles.iconContainer}>
          <Feather style={styles.icons} name="camera" size={20} color="white" />
          <Fontisto
            style={styles.icons}
            name="search"
            size={20}
            color="white"
          />
          <MaterialCommunityIcons
            style={styles.icons}
            name="dots-vertical"
            size={20}
            color="white"
          />
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0e806a",
    paddingTop: 80,
  },
  HeaderContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 16,
  },
  headerText: {
    fontSize: 20,
    color: "white",
    fontWeight: "500",
  },
  iconContainer: {
    display: "flex",
    flexDirection: "row",
  },
  icons: {
    marginLeft: 20,
  },
});

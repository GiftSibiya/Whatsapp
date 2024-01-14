// Dependency imports//

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
//--//

// File Imports //
import Header from "./src/Header";
import Navigation from "./src/Navigation";
import { NavigationContainer } from "@react-navigation/native";
//--//

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <StatusBar backgroundColor="#0e806a" barStyle="light-content" />
        <Header />
        <View style={{ flex: 1, backgroundColor: "white" }}>
          <Navigation />
        </View>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

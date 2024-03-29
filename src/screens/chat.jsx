/// Import Dependencies ///
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
//--//

import DATA from "../data/chatdata";
import { MaterialCommunityIcons } from "react-native-vector-icons";

const Chat = () => {
  const [chatData, setChatData] = useEffect(DATA);

  useEffect(() => {
    setChatData(DATA);
  });

  return (
    <View style={styles.container}>
      <FlatList
        data={chatData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.chatContainer}>
            <Image source={item.photos} style={styles.image}></Image>
          </View>
        )}
      />
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

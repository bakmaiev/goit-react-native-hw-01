import React from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import { Image, Svg, Text } from "react-native-svg";

const PostsScreen = () => {
  return (
    <View style={styles.postScreenContainer}>
      <Image source={require("../../assets/avatar.png")} />
      <View>
        <Text>Natali Romanova</Text>
        <Text>email@example.com</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  postScreenContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  avatarWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
});

export default PostsScreen;

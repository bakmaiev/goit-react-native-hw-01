import React from "react";
import { StyleSheet } from "react-native";
import { View, Image, Svg, Text } from "react-native";

const PostsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.avatarWrapper}>
          <Image
            resizeMode="cover"
            source={require("../../assets/avatar.png")}
            style={styles.avatar}
          />
        </View>
        <View style={styles.textWrapper}>
          <Text style={styles.name}>Natali Romanova</Text>
          <Text style={styles.email}>natali.romanova@gmail.com</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 32,
    paddingHorizontal: 16,
    backgroundColor: "#FFFFFF",
  },
  contentContainer: { flexDirection: "row", gap: 8 },
  avatarWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  avatar: { width: 60, height: 60, borderRadius: 16 },
  textWrapper: { flex: 1, justifyContent: "center" },
  name: {
    fontFamily: "Roboto-Bold",
    fontSize: 13,
    lineHeight: 15,
    color: "#212121",
  },
  email: {
    fontFamily: "Roboto-Regular",
    fontSize: 11,
    lineHeight: 13,
    color: "rgba(33, 33, 33, 0.8)",
  },
});

export default PostsScreen;

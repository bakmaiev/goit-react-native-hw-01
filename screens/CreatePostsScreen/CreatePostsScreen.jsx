import React from "react";
import { TouchableWithoutFeedback } from "react-native";
import { Keyboard } from "react-native";
import { StyleSheet } from "react-native";
import { View, Image, Svg, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const CreatePostsScreen = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.imgWrapper}>
          <Image
            resizeMode="cover"
            // source={require("../../assets/content-img.png")}
            style={styles.img}
          />
        </View>
        <Text style={styles.imgDescr}>Завантажте фото</Text>
        <View style={styles.contentForm}>
          <TextInput placeholder="Назва..."></TextInput>
          <TextInput placeholder="Місцевість..."></TextInput>
        </View>
      </View>
    </TouchableWithoutFeedback>
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
  imgWrapper: {
    width: "100%",
    height: 240,
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  img: { width: "100%", height: "100%", borderRadius: 8 },
  imgDescr: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#BDBDBD",
    marginBottom: 32,
  },
  contentForm: {},
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

export default CreatePostsScreen;

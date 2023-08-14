import React from "react";
import { TouchableWithoutFeedback } from "react-native";
import { KeyboardAvoidingView } from "react-native";
import { Keyboard } from "react-native";
import { StyleSheet } from "react-native";
import { View, Image, Svg, Text } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { Feather, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const CreatePostsScreen = () => {
  const navigation = useNavigation();

  const [name, setName] = useState("");
  const [locality, setLocality] = useState("");
  const [newPhoto, setNewPhoto] = useState(false);

  const handleAddPhotoBtn = () => {
    !newPhoto ? setNewPhoto(true) : setNewPhoto(false);
  };

  const handleSubmit = () => {
    navigation.goBack();
  };

  const areInputsFilled = locality !== "" && name !== "" && newPhoto;

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={styles.container}
        // keyboardVerticalOffset={510}
      >
        <View>
          <View style={styles.imgWrapper}>
            {newPhoto ? (
              <Image
                source={require("../../assets/content-img.png")}
                style={styles.img}
              />
            ) : null}
            <TouchableOpacity
              onPress={handleAddPhotoBtn}
              style={[
                styles.addImgBtn,
                newPhoto
                  ? {
                      backgroundColor: "rgba(255,255,255, 0.3)",
                    }
                  : null,
              ]}
            >
              <MaterialIcons
                name="camera-alt"
                size={24}
                color="#BDBDBD"
                style={[
                  newPhoto
                    ? {
                        color: "#FFFFFF",
                      }
                    : {
                        color: "#BDBDBD",
                      },
                ]}
              />
            </TouchableOpacity>
          </View>

          {newPhoto ? (
            <Text style={styles.imgDescr}>Редагувати фото</Text>
          ) : (
            <Text style={styles.imgDescr}>Завантажте фото</Text>
          )}
          <View style={styles.contentForm}>
            <TextInput
              style={styles.input}
              value={name}
              placeholder="Назва..."
              onChangeText={setName}
            ></TextInput>
            <View style={styles.locationInput}>
              <Feather
                style={styles.mapPin}
                name="map-pin"
                size={24}
                color="#BDBDBD"
              />
              <TextInput
                style={(styles.input, styles.mapInput)}
                value={locality}
                placeholder="Місцевість..."
                onChangeText={setLocality}
              ></TextInput>
            </View>
            <TouchableOpacity
              disabled={areInputsFilled ? false : true}
              style={[
                styles.formBtn,
                areInputsFilled && {
                  backgroundColor: "#FF6C00",
                },
              ]}
              onPress={handleSubmit}
            >
              <Text
                style={[
                  styles.textFormBtn,
                  areInputsFilled && {
                    color: "#FFFFFF",
                  },
                ]}
              >
                Опубліковати
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
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
  imgWrapper: {
    position: "relative",
    // paddingTop: 32,
    width: "100%",
    height: 240,
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  img: {
    position: "absolute",
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
  addImgBtn: {
    width: 60,
    height: 60,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },

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
  input: {
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
    marginBottom: 16,
  },
  locationInput: {
    marginBottom: 32,
  },
  mapInput: {
    width: "100%",
    height: 50,
    paddingLeft: 28,
    fontSize: 16,
    borderColor: "#E8E8E8",
    borderBottomWidth: 1,
    color: "#212121",
  },
  mapPin: {
    position: "absolute",
    bottom: 13,
    left: 0,
  },
  textFormBtn: {
    color: "#BDBDBD",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
  },
  formBtn: {
    width: "100%",
    height: 51,
    marginBottom: 16,
    backgroundColor: "#F6F6F6",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
  },
});

export default CreatePostsScreen;

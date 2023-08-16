import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/native";

const CreatePostsScreen = () => {
  const navigation = useNavigation();

  const [name, setName] = useState("");
  const [locality, setLocality] = useState("");
  const [newPhoto, setNewPhoto] = useState(null);
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const { status } = await Camera.requestCameraPermissionsAsync();
        await MediaLibrary.requestCameraRollPermissionsAsync();

        setHasPermission(status === "granted");
      } catch (error) {
        console.error("Error getting camera permissions:", error);
      }
    })();
  }, []);

  const handleAddPhotoBtn = async () => {
    try {
      if (cameraRef) {
        const photo = await cameraRef.takePictureAsync();
        setNewPhoto(photo.uri);
      }
    } catch (error) {
      console.error("Error getting camera permissions:", error);
    }
  };

  const handleEditPhoto = () => {
    setNewPhoto(false);
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
      >
        <View>
          <View style={styles.imgWrapper}>
            {newPhoto ? (
              <Image source={{ uri: newPhoto }} style={styles.img} />
            ) : (
              <Camera
                style={styles.cameraPreview}
                ref={(ref) => setCameraRef(ref)}
                type={Camera.Constants.Type.back}
                autoFocus={Camera.Constants.AutoFocus.on}
              />
            )}
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
                color={newPhoto ? "#FFFFFF" : "#BDBDBD"}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.imgDescr} onPress={handleEditPhoto}>
            {newPhoto ? "Редагувати фото" : "Завантажте фото"}
          </Text>
          <View style={styles.contentForm}>
            <TextInput
              style={styles.input}
              value={name}
              placeholder="Назва..."
              onChangeText={setName}
            />
            <View style={styles.locationInput}>
              <Feather
                style={styles.mapPin}
                name="map-pin"
                size={24}
                color="#BDBDBD"
              />
              <TextInput
                style={styles.mapInput}
                value={locality}
                placeholder="Місцевість..."
                onChangeText={setLocality}
              />
            </View>
            <TouchableOpacity
              disabled={!areInputsFilled}
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
  cameraPreview: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
  addImgBtn: {
    position: "absolute",
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
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 32,
  },
  mapInput: {
    flex: 1,
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

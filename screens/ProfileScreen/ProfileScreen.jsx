import { Feather } from "@expo/vector-icons";
import React from "react";
import {
  StyleSheet,
  Image,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Alert,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Svg, { Circle, Path } from "react-native-svg";
import LogoutBtn from "../../components/LogoutBtn";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const ProfileScreen = () => {
  const navigation = useNavigation();

  const [userAvatar, setUserAvatar] = useState(false);

  const handleUserAvatarBtn = () => {
    !userAvatar ? setUserAvatar(true) : setUserAvatar(false);
  };

  handleCommentsBtn = () => {
    navigation.navigate("Comments");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={styles.container}
        keyboardVerticalOffset={-174}
      >
        <Image
          source={require("../../assets/background.jpg")}
          style={styles.backgroundImage}
        />

        <View style={styles.profileLayout}>
          <View style={styles.avatarWrapper}>
            {userAvatar ? (
              <>
                <Image
                  style={styles.avatar}
                  source={require("../../assets/avatar.jpg")}
                />
                <TouchableOpacity
                  style={styles.addAvatarBtn}
                  onPress={handleUserAvatarBtn}
                >
                  <Svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <Circle
                      cx="12.5"
                      cy="12.5"
                      r="12"
                      fill="white"
                      stroke="#E8E8E8"
                    />
                    <Path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13 6H12V12H6V13H12V19H13V13H19V12H13V6Z"
                      fill="#BDBDBD"
                      transform="rotate(-45 12.5 12.5)"
                    />
                  </Svg>
                </TouchableOpacity>
              </>
            ) : (
              <TouchableOpacity
                style={styles.addAvatarBtn}
                onPress={handleUserAvatarBtn}
              >
                <Svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <Circle
                    cx="12.5"
                    cy="12.5"
                    r="12"
                    fill="white"
                    stroke="#FF6C00"
                  ></Circle>
                  <Path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13 6H12V12H6V13H12V19H13V13H19V12H13V6Z"
                    fill="#FF6C00"
                  ></Path>
                </Svg>
              </TouchableOpacity>
            )}
          </View>
          <LogoutBtn style={styles.logout} />

          <Text style={styles.formTitle}>Natali Romanova</Text>
          <View style={styles.imgWrapper}>
            <Image
              resizeMode="cover"
              // source={require("../../assets/content-img.png")}
              style={styles.img}
            />
          </View>
          <Text style={styles.imgDescr}>Ліс</Text>
          <View style={{ flexDirection: "row", gap: 24, marginBottom: 32 }}>
            <TouchableOpacity
              onPress={handleCommentsBtn}
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 6,
              }}
            >
              <Feather name="message-circle" size={24} color="black" />
              <Text
                style={{
                  fontFamily: "Roboto-Regular",
                  fontSize: 16,
                  color: "#212121",
                }}
              >
                8
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 6,
              }}
            >
              <Feather name="thumbs-up" size={24} color="black" />
              <Text
                style={{
                  fontFamily: "Roboto-Regular",
                  fontSize: 16,
                  color: "#212121",
                }}
              >
                153
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                marginLeft: "auto",
                flexDirection: "row",
                alignItems: "center",
                gap: 6,
              }}
            >
              <Feather
                style={styles.mapPin}
                name="map-pin"
                size={24}
                color="#BDBDBD"
              />
              <Text
                style={{
                  fontFamily: "Roboto-Regular",
                  fontSize: 16,
                  textDecorationLine: "underline",
                  color: "#212121",
                }}
              >
                Ukraine
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
    backgroundColor: "#fff",
  },
  backgroundImage: {
    position: "absolute",
    width: "100%",
    resizeMode: "cover",
    flex: 1,
  },
  profileLayout: {
    position: "relative",
    width: "100%",
    marginTop: "auto",
    paddingLeft: 16,
    paddingRight: 16,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    backgroundColor: "#FFFFFF",
  },
  avatarWrapper: {
    position: "relative",
    width: 120,
    height: 120,
    marginTop: -60,
    marginBottom: 32,
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  avatar: {
    borderRadius: 16,
  },
  addAvatarBtn: {
    position: "absolute",
    bottom: 14,
    left: 107,
  },
  formTitle: {
    marginBottom: 32,
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    letterSpacing: 0.01,

    color: "#212121",
  },
  imgWrapper: {
    width: "100%",
    height: 240,
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  imgDescr: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#212121",
    marginBottom: 8,
  },
  logout: {
    position: "absolute",
    top: 22,
    right: 16,
    marginRight: 0,
  },
});

export default ProfileScreen;

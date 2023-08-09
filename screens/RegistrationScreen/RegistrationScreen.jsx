import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Keyboard } from "react-native";
import { TouchableWithoutFeedback } from "react-native";
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
} from "react-native";
import Svg, { Circle, Path } from "react-native-svg";
import { Feather } from "@expo/vector-icons";

const RegistrationScreen = () => {
  const navigation = useNavigation();

  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [focusedInput, setFocusedinput] = useState(null);
  const [secureText, setSecureText] = useState(true);
  const [userAvatar, setUserAvatar] = useState(false);

  const handleFocus = (placeholder) => {
    setFocusedinput(placeholder);
  };

  const handleBlur = () => {
    setFocusedinput(null);
  };

  const toggleSecureText = () => {
    secureText ? setSecureText(false) : setSecureText(true);
  };

  const handleUserAvatarBtn = () => {
    !userAvatar ? setUserAvatar(true) : setUserAvatar(false);
  };

  const handleSignUp = () => {
    if (!login || !email || !password) {
      Alert.alert("Заповніть всі поля форми!");
      return;
    }
    navigation.navigate("Home");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={styles.registerContainer}
        keyboardVerticalOffset={-174}
      >
        <Image
          source={require("../../assets/background.jpg")}
          style={styles.backgroundImage}
        />
        <View style={styles.registrationForm}>
          <View style={styles.avatarWrapper}>
            {/* <TouchableOpacity
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
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6 13V19V13V12H6H12V12V6V12H12H18V12V13V19V13H18H12V13V19V13H6Z"
                  fill="#FF6C00"
                ></Path>
              </Svg>
            </TouchableOpacity> */}
            {userAvatar ? (
              <>
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
                <Image
                  style={styles.avatar}
                  source={require("../../assets/avatar.jpg")}
                />
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
          <Text style={styles.formTitle}>Реєстрація</Text>
          <View style={styles.inputList}>
            <TextInput
              placeholder="Логін"
              style={[
                styles.formInput,
                focusedInput === "Логін" && styles.inputFocused,
              ]}
              value={login}
              onChangeText={setLogin}
              onFocus={() => handleFocus("Логін")}
              onBlur={handleBlur}
            ></TextInput>
            <TextInput
              placeholder="Адреса електронної пошти"
              style={[
                styles.formInput,
                focusedInput === "Адреса електронної пошти" &&
                  styles.inputFocused,
              ]}
              value={email}
              onChangeText={setEmail}
              onFocus={() => handleFocus("Адреса електронної пошти")}
              onBlur={handleBlur}
            ></TextInput>
            <View>
              <TextInput
                placeholder="Пароль"
                style={[
                  styles.formInput,
                  focusedInput === "Пароль" && styles.inputFocused,
                ]}
                value={password}
                onChangeText={setPassword}
                onFocus={() => handleFocus("Пароль")}
                onBlur={handleBlur}
                secureTextEntry={secureText}
              ></TextInput>
              <TouchableOpacity style={styles.passShowBtn}>
                <Text style={styles.textPassShowBtn} onPress={toggleSecureText}>
                  {secureText ? "Показати" : "Приховати"}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity style={styles.formBtn} onPress={handleSignUp}>
            <Text style={styles.textFormBtn}>Зареєстуватися</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.logInBtn}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.textLogInBtn}>Вже є акаунт? Увійти</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  registerContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  backgroundImage: {
    position: "absolute",
    width: "100%",
    resizeMode: "cover",
    flex: 1,
  },
  registrationForm: {
    width: "100%",
    marginTop: "auto",
    paddingLeft: 16,
    paddingRight: 16,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
  },
  avatarWrapper: {
    position: "relative",
    width: 120,
    height: 120,
    marginTop: -60,
    marginBottom: 32,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  avatar: {
    borderRadius: 16,
  },
  addAvatarBtn: {
    position: "absolute",
    zIndex: 100,
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
  inputList: {
    width: "100%",
    gap: 16,
    marginBottom: 43,
  },
  formInput: {
    height: 50,
    padding: 16,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#E8E8E8",
    borderRadius: 8,
  },
  inputFocused: {
    borderColor: "#FF6C00",
    backgroundColor: "#FFFFFF",
  },
  formBtn: {
    width: "100%",
    height: 51,
    marginBottom: 16,
    backgroundColor: "#FF6C00",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
  },
  textFormBtn: {
    color: "#FFFFFF",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
  },
  logInBtn: {
    marginBottom: 78,
  },
  passShowBtn: {
    position: "absolute",
    right: 15,
    top: 15,
  },
  textLogInBtn: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },
  textPassShowBtn: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },
});

export default RegistrationScreen;

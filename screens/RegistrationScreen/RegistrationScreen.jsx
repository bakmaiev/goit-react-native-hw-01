import React, { useState } from "react";
import {
  StyleSheet,
  Image,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Svg, { Circle, Path } from "react-native-svg";

const RegistrationScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/background.jpg")}
        style={styles.backgroundImage}
      />
      <View style={styles.registrationForm}>
        <View style={styles.avatarWrapper}>
          <TouchableOpacity style={styles.addAvatarBtn}>
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
        </View>
        <Text style={styles.formTitle}>Реєстрація</Text>
        <View style={styles.inputList}>
          <TextInput placeholder="Логін" style={[styles.formInput]}></TextInput>
          <TextInput
            placeholder="Адреса електронної пошти"
            style={[styles.formInput]}
          ></TextInput>
          <View>
            <TextInput
              placeholder="Пароль"
              style={[styles.formInput]}
            ></TextInput>
            <TouchableOpacity style={styles.passShowBtn}>
              <Text style={styles.textPassShowBtn}>Показати</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={styles.formBtn}>
          <Text style={styles.textFormBtn}>Зареєстуватися</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.logInBtn}>
          <Text style={styles.textLogInBtn}>Вже є акаунт? Увійти</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  backgroundImage: {
    position: "absolute",
    width: "100%",
    resizeMode: "cover",
    flex: 1,
  },
  registrationForm: {
    // position: "relative",
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
    // position: "relative",
    width: 120,
    height: 120,
    marginTop: -60,
    marginBottom: 32,
    backgroundColor: "#F6F6F6",
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

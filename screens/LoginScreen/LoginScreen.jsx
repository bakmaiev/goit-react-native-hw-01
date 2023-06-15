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
        <Text style={styles.formTitle}>Увійти</Text>
        <View style={styles.inputList}>
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
          <Text style={styles.textFormBtn}>Увійти</Text>
        </TouchableOpacity>
        <View style={styles.signInBtnWrapper}>
          <Text style={styles.textSignInBtn}>Немає акаунту? </Text>
          <TouchableOpacity style={styles.signInBtn}>
            <Text style={[styles.textSignInBtn, styles.underline]}>
              Зареєструватися
            </Text>
          </TouchableOpacity>
        </View>
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
    width: "100%",
    marginTop: "auto",
    paddingLeft: 16,
    paddingRight: 16,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
  },
  formTitle: {
    marginTop: 32,
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
  passShowBtn: {
    position: "absolute",
    right: 15,
    top: 15,
  },
  signInBtnWrapper: {
    flexDirection: "row",
    marginBottom: 144,
  },
  textSignInBtn: {
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
  underline: {
    textDecorationLine: "underline",
  },
});

export default RegistrationScreen;

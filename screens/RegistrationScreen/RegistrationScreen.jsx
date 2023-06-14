import React from "react";
import {
  StyleSheet,
  Image,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

const RegistrationScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/background.jpg")}
        style={styles.backgroundImage}
      />
      <View style={styles.registrationForm}>
        <View style={styles.avatarWrapper}></View>
        <Text style={styles.formTitle}>Реєстрація</Text>
        <TextInput placeholder="Логін" style={styles.formInput}></TextInput>
        <TextInput
          placeholder="Адреса електронної пошти"
          style={styles.formInput}
        ></TextInput>
        <TextInput placeholder="Пароль" style={styles.formInput}></TextInput>
        <TouchableOpacity style={styles.formBtn}>
          <Text style={styles.textFormBtn}>Зареєстуватися</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signInBtn}>
          <Text style={{ color: "#1B4371" }}>Вже є акаунт? Увійти</Text>
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
    position: "relative",
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
  formTitle: {
    marginBottom: 32,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    letterSpacing: 0.01,

    color: "#212121",
  },
  formInput: {
    width: "100%",
    height: 50,
    marginBottom: 16,
    padding: 16,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#E8E8E8",
    borderRadius: 8,
  },
  formBtn: {
    width: "100%",
    height: 51,
    marginTop: 27,
    marginBottom: 16,
    backgroundColor: "#FF6C00",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
  },
  textFormBtn: {
    color: "#FFFFFF",
  },
  signInBtn: {
    marginBottom: 78,
  },
});

export default RegistrationScreen;

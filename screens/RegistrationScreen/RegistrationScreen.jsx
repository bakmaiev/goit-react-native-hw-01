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
        <View style={styles.avatarWrapper}>
          <TouchableOpacity style={styles.addAvatarBtn}>
            <Image source={require("../../assets/add.png")} />
          </TouchableOpacity>
        </View>
        <Text style={styles.formTitle}>Реєстрація</Text>
        <View style={styles.inputList}>
          <TextInput placeholder="Логін" style={styles.formInput}></TextInput>
          <TextInput
            placeholder="Адреса електронної пошти"
            style={styles.formInput}
          ></TextInput>
          <View>
            <TextInput
              placeholder="Пароль"
              style={styles.formInput}
            ></TextInput>
            <TouchableOpacity style={styles.passShowBtn}>
              <Text
                style={{
                  color: "#1B4371",
                }}
              >
                Показати
              </Text>
            </TouchableOpacity>
          </View>
        </View>
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
  addAvatarBtn: {
    position: "absolute",
    bottom: 14,
    left: 107,
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
  },
  signInBtn: {
    marginBottom: 78,
  },
  passShowBtn: {
    position: "absolute",
    right: 15,
    top: 15,
  },
});

export default RegistrationScreen;

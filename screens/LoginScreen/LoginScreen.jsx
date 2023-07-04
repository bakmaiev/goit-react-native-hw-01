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
  Alert,
} from "react-native";

const LoginScreen = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [focusedInput, setFocusedinput] = useState(null);
  const [secureText, setSecureText] = useState(true);

  const handleFocus = (placeholder) => {
    setFocusedinput(placeholder);
  };

  const handleBlur = () => {
    setFocusedinput(null);
  };

  const toggleSecureText = () => {
    secureText ? setSecureText(false) : setSecureText(true);
  };

  const handleSignIn = () => {
    if (!email || !password) {
      Alert.alert("Заповніть всі поля форми!");
      return;
    }
    navigation.navigate("Posts");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={styles.loginContainer}
        keyboardVerticalOffset={-242}
      >
        <Image
          source={require("../../assets/background.jpg")}
          style={styles.backgroundImage}
        />
        <View style={styles.loginForm}>
          <Text style={styles.formTitle}>Увійти</Text>
          <View style={styles.inputList}>
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
          <TouchableOpacity style={styles.formBtn} onPress={handleSignIn}>
            <Text style={styles.textFormBtn}>Увійти</Text>
          </TouchableOpacity>
          <View style={styles.signInBtnWrapper}>
            <Text style={styles.textSignInBtn}>Немає акаунту? </Text>
            <TouchableOpacity
              style={styles.signInBtn}
              onPress={() => navigation.navigate("Registration")}
            >
              <Text style={[styles.textSignInBtn, styles.underline]}>
                Зареєструватися
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  backgroundImage: {
    position: "absolute",
    width: "100%",
    resizeMode: "cover",
    flex: 1,
  },
  loginForm: {
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

export default LoginScreen;

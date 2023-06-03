import React from "react";
import { StyleSheet, Image, Text, View } from "react-native";

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
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    letterSpacing: "0.01em",

    color: "#212121",
  },
});

export default RegistrationScreen;

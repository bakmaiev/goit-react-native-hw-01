import React from "react";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";

const LogoutBtn = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.logoutBtn}
      onPress={() => navigation.navigate("Login")}
    >
      <Feather name="log-out" size={24} color="#BDBDBD" />
    </TouchableOpacity>
  );
};

export default LogoutBtn;

const styles = StyleSheet.create({
  logoutBtn: {
    marginRight: 10,
  },
});

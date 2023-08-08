import React from "react";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";

const BackBtn = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.logoutBtn}
      onPress={() => navigation.navigate("PostsScreen")}
    >
      <Feather name="arrow-left" size={24} color="#BDBDBD" />
    </TouchableOpacity>
  );
};

export default BackBtn;

const styles = StyleSheet.create({
  logoutBtn: {
    marginLeft: 10,
  },
});

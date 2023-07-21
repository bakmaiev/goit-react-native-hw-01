import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text, StyleSheet } from "react-native";
import { Image } from "react-native-svg";
import { Feather, Ionicons } from "@expo/vector-icons";
import LogoutBtn from "../../components/LogoutBtn";
import PostsScreen from "../PostsScreen/PostsScreen";
import CreatePostsScreen from "../CreatePostsScreen/CreatePostsScreen";

function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Profile!</Text>
    </View>
  );
}

const Home = () => {
  const Tabs = createBottomTabNavigator();
  return (
    <Tabs.Navigator screenOptions={styles.tabOptions}>
      <Tabs.Screen
        name="PostsScreen"
        component={PostsScreen}
        options={{
          headerLeft: false,
          headerTitle: "Публікації",
          headerRight: () => <LogoutBtn />,
          tabBarIcon: () => (
            <Ionicons name="ios-grid-outline" size={24} color="#BDBDBD" />
          ),
        }}
      />
      <Tabs.Screen
        name="CreatePostsScreen"
        component={CreatePostsScreen}
        options={{
          headerLeft: false,
          headerTitle: "Створити публікацію",
          headerRight: () => <LogoutBtn />,
          tabBarIcon: () => <Ionicons name="add" size={24} color="white" />,
          tabBarIconStyle: {
            width: 70,
            height: 40,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#FF6C00",
            borderRadius: 30,
          },
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={Profile}
        options={{
          headerLeft: false,
          headerTitle: "Profile",
          headerRight: () => <LogoutBtn />,
          tabBarIcon: () => <Feather name="user" size={24} color="#BDBDBD" />,
        }}
      />
    </Tabs.Navigator>
  );
};

const styles = StyleSheet.create({
  tabOptions: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    tabBarShowLabel: false,
    tabBarActiveTintColor: "#ffffff",
    tabBarInactiveTintColor: "#212121",
    tabBarStyle: {
      height: 83,
      paddingTop: 9,
      paddingHorizontal: 82,
    },
  },
});

export default Home;

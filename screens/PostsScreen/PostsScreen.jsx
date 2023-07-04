import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Image, Svg, Text } from "react-native-svg";

function Settings() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Profile!</Text>
    </View>
  );
}

const PostsScreen = () => {
  //   const Tabs = createBottomTabNavigator();
  //   return (
  //     <Tabs.Navigator
  //       screenOptions={({ route }) => ({
  //         tabBarIcon: ({ focused, color, size }) => {
  //           //   let iconName;
  //           if (route.name === "Profile") {
  //             iconName = focused
  //               ? "ios-information-circle"
  //               : "ios-information-circle-outline";
  //           } else if (route.name === "Settings") {
  //             iconName = focused ? "ios-list-box" : "ios-list";
  //           }
  //           return <Ionicons name={iconName} size={size} color={color} />;
  //         },
  //       })}
  //       tabBarOptions={{
  //         activeTintColor: "tomato",
  //         inactiveTintColor: "gray",
  //       }}
  //     >
  //       <Tabs.Screen name="Settings" component={Settings} />
  //       <Tabs.Screen name="Profile" component={Profile} />
  //     </Tabs.Navigator>
  //   );
  return (
    <View style={styles.postScreenContainer}>
      <View>
        <View>
          <Image />
        </View>
        <Text>Natali Romanova</Text>
        <Text>email@example.com</Text>
      </View>
      <View>
        <TouchableOpacity>
          <Svg></Svg>
        </TouchableOpacity>
        <TouchableOpacity>
          <Svg></Svg>
        </TouchableOpacity>
        <TouchableOpacity>
          <Svg></Svg>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  postScreenContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  avatarWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
});

export default PostsScreen;

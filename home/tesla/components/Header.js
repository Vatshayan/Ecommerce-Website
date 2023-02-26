import React from "react";
import { View, Image, Pressable, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.navigate("HomeScreen")}>
        <Image
          style={styles.logo}
          source={require("../assets/header/logo.png")}
        />
      </Pressable>
      <Pressable onPress={() => navigation.navigate("HomeScreen")}>
        <Image
          style={styles.menu}
          source={require("../assets/header/home.png")}
        />
      </Pressable>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 47,
    zIndex: 100,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20,
  },
  logo: {
    width: 120,
    height: 120,
    resizeMode: "contain",
    bottom: 45,
    right: 17,
  },
  menu: {
    width: 22,
    height: 22,
    resizeMode: "contain",
    right: 10,
    top: 1,
  },
});

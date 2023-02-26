import React from "react";
import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Button from "./Button";

const CarItem = ({ car: { name, image, tagline, taglineCTA } }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image} />
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {tagline} <Text style={styles.subtitleCTA}>{taglineCTA}</Text>
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button
          type="primary"
          content="More Information"
          onPress={() => navigation.navigate("CustomPage")}
        />
        <Button
          type="secondary"
          content="Existing Inventory"
          onPress={() => navigation.navigate("InventoryScreen")}
        />
      </View>
    </View>
  );
};

export default CarItem;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: Dimensions.get("screen").height,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "stretch",
    position: "absolute",
  },
  titles: {
    marginTop: "35%",
    width: "100%",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "500",
    color: "#393c41",
  },
  subtitle: {
    fontSize: 16,
    color: "#5c5e62",
  },
  subtitleCTA: {
    textDecorationLine: "underline",
  },
  buttonContainer: {
    position: "absolute",
    bottom: 100,
    width: "100%",
  },
});

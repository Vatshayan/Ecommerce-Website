import React from "react";
import { View, FlatList, Dimensions, StyleSheet } from "react-native";
import CarItem from "./CarItem";
import { cars } from "../data";

const CarsList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CarItem car={item} />}
        showsVerticalScrollIndicator={false}
        snapToAlignment="start"
        decelerationRate="fast"
        snapToInterval={Dimensions.get("screen").height}
      />
    </View>
  );
};

export default CarsList;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  buttonContainer: {
    position: "absolute",
    bottom: 50,
    width: "100%",
  },
});

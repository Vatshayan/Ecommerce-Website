import React, { useRef } from "react";
import {
  View,
  ScrollView,
  Text,
  Dimensions,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
} from "react-native";
import Header from "../components/Header";
import { Video } from "expo-av";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { detailsList, videoList } from "../data";

const CustomPage = () => {
  const video = useRef(null);
  const navigation = useNavigation();

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.scrollContainer}
    >
      <Header />
      <FlatList
        data={detailsList}
        keyExtractor={(item) => item.id}
        horizontal
        style={styles.container}
        showsHorizontalScrollIndicator={false}
        snapToAlignment="center"
        decelerationRate="fast"
        snapToInterval={Dimensions.get("screen").width}
        renderItem={({ item }) => (
          <View>
            <View style={styles.imageContainer}>
              <Text></Text>
            </View>
            <Image source={item?.image} style={styles.carImage} />

            <View style={styles.text}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.delivery}>{item.delivery}</Text>
            </View>

            <View style={styles.details}>
              <View>
                <Text style={styles.value}>{item.range}</Text>
                <Text style={styles.header}>{item.rangeHeader}</Text>
              </View>
              <View>
                <Text style={styles.value}>{item.topSpeed}</Text>
                <Text style={styles.header}>{item.topSpeedHeader}</Text>
              </View>
              <View>
                <Text style={styles.value}>{item.zeroToHundred}</Text>
                <Text style={styles.header}>{item.zeroToHundredHeader}</Text>
              </View>
            </View>
          </View>
        )}
      />

      <View style={styles.break}>
        <Text>1</Text>
      </View>

      <View style={styles.headingContainer}>
        <View style={{ top: 20 }}>
          <Text style={styles.heading}>Full Self-Driving Capability</Text>
          <Text style={styles.price}>$12,000</Text>
        </View>

        <Text style={[styles.descriptionTitle, { right: 108 }]}>
          Navigate on AutoPilot
        </Text>
        <View style={styles.textContainer}>
          <Text style={styles.description}>
            Automatic driving from highway on-ramp to off-ramp includes
            automatic lane changes, Traffic-Aware Cruise Control with complete
            stopping and re-engagement, Autosteer, and overtaking slow cars in
            your lane.
          </Text>
        </View>
        <Video
          shouldPlay={true}
          ref={video}
          source={videoList[0].videoClip}
          isLooping={true}
          isMuted={true}
          style={styles.video}
        />

        <Text style={[styles.descriptionTitle, { right: 152 }]}>Autopark</Text>
        <View style={styles.textContainer}>
          <Text style={styles.description}>
            Park with ease in both parallel and perpendicular parking spaces
            with a single button tap on the Center Display. Model S will alert
            you to available parking spots by continuously monitoring the space
            around you while driving under 24 km/h.
          </Text>
        </View>
        <Video
          shouldPlay={true}
          ref={video}
          source={videoList[2].videoClip}
          isLooping={true}
          isMuted={true}
          style={styles.video}
        />

        <Text style={[styles.descriptionTitle, { right: 152 }]}>Summon</Text>
        <View style={styles.textContainer}>
          <Text style={styles.description}>
            Activated by the Tesla App, your parked car will come find you
            anywhere in a parking lot, and even park or unpark itself in tight
            spaces. Summon navigates complex parking situations while abiding by
            lane markings and stop signs, avoiding pedestrians and obstacles
            like traffic cones, trash bins and rogue shopping carts.
          </Text>
        </View>
        <Video
          shouldPlay={true}
          ref={video}
          source={videoList[1].videoClip}
          isLooping
          isMuted={true}
          style={styles.video}
        />
      </View>

      <View style={styles.inventory}>
        <Pressable
          onPress={() => navigation.navigate("InventoryScreen")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Our Inventory</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default CustomPage;

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    width: "100%",
    backgroundColor: "white",
  },
  container: {
    paddingBottom: 30,
  },
  imageContainer: {
    flex: 1,
    position: "absolute",
    height: "80%",
    width: "90%",
    alignItems: "center",
    top: 0,
    backgroundColor: "#f3f3f3",
    left: 21,
    borderRadius: 25,
    marginTop: 120,
  },
  carImage: {
    height: 490,
    width: 410,
    resizeMode: "contain",
  },
  text: {
    bottom: 110,
  },
  name: {
    textAlign: "center",
    fontWeight: "700",
    fontSize: 29,
  },
  delivery: {
    textAlign: "center",
    color: "#5c5e62",
    opacity: 0.8,
  },
  details: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    top: -50,
    right: 7,
  },
  value: {
    fontWeight: "700",
    fontSize: 20,
    textAlign: "center",
  },
  header: {
    fontWeight: "300",
    fontSize: 12,
    textAlign: "center",
    color: "#5c5e62",
    paddingTop: 5,
  },
  break: {
    width: "80%",
    backgroundColor: "gray",
    height: 0.4,
    left: 40,
    marginTop: 20,
  },
  headingContainer: {
    paddingTop: 20,
    alignItems: "center",
    paddingBottom: 30,
  },
  heading: {
    fontSize: 25,
    fontWeight: "600",
  },
  price: {
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    paddingTop: 7,
  },
  descriptionTitle: {
    marginTop: 60,
    marginBottom: 6,
    fontSize: 16,
    fontWeight: "600",
  },
  textContainer: {
    width: "90%",
  },
  description: {
    color: "#5c5e62",
    fontWeight: "300",
    fontSize: 12,
    opacity: 0.8,
    lineHeight: 17,
  },
  video: {
    height: 300,
    width: "90%",
    marginTop: 40,
    marginBottom: 50,
    borderRadius: 20,
  },
  inventory: {
    alignItems: "center",
    paddingBottom: 50,
  },
  button: {
    height: 40,
    width: "50%",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4769D9",
  },
  buttonText: {
    fontSize: 12,
    fontWeight: "600",
    textTransform: "uppercase",
    color: "white",
  },
});

import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  FlatList,
  Modal,
  StyleSheet,
} from "react-native";
import Header from "../components/Header";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { inventory, choice } from "../data";

const InventoryScreen = () => {
  const [selected, setSelected] = useState({});
  const [selectedChoice, setSelectedChoice] = useState({});
  const [modalVisible, setModalVisible] = useState("");
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.heading}>Our Current Inventory</Text>
      <View style={styles.content}>
        <FlatList
          data={inventory}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ top: 150 }}
          keyExtractor={(item) => item.id}
          renderItem={({ item: { id, name, image, price }, item }) => (
            <View style={{ marginRight: 10 }}>
              <Pressable
                onPress={() => setSelected(item)}
                style={[id === selected.id ? styles.highlight : styles.card]}
              >
                <Image style={styles.image} source={image} />
                <View>
                  <Text style={styles.carName}>{name}</Text>
                  <Text style={styles.carPrice}>{price}</Text>
                </View>
              </Pressable>
            </View>
          )}
        />
      </View>

      <View style={{ top: 160 }}>
        <Text style={styles.subHeading}>Full Self-Driving Capability</Text>
        <FlatList
          data={choice}
          horizontal
          style={{ top: 40, left: 25 }}
          keyExtractor={(item) => item.id}
          renderItem={({ item: { id, title }, item }) => (
            <View style={{ marginTop: 10 }}>
              <Pressable
                onPress={() => setSelectedChoice(item)}
                style={[
                  id === selectedChoice.id
                    ? styles.buttonHighlight
                    : styles.button,
                ]}
              >
                <Text style={styles.buttonText}>{title}</Text>
              </Pressable>
            </View>
          )}
        />
      </View>

      <View style={styles.order}>
        <Pressable
          onPress={selected?.id ? () => setModalVisible(true) : null}
          style={styles.orderButton}
        >
          <Text style={styles.orderText}>Place Order</Text>
        </Pressable>
      </View>

      <Modal
        animationType="fade"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}
      >
        <Header />
        <View style={styles.modal}>
          <Text style={styles.modalTitle}>Order Placed</Text>
          <View style={styles.modalImageContainer}>
            <View style={{ marginBottom: 30 }}>
              <Image source={selected?.image} style={styles.modalImage} />
            </View>
            <Text style={styles.modalText}>
              Your {selected?.name} will arrive in March.
            </Text>
            <Pressable
              onPress={() => navigation.navigate("HomeScreen")}
              style={styles.modalButton}
            >
              <Text style={styles.modalButtonText}>Ok</Text>
            </Pressable>
          </View>
        </View>
        <View style={{ bottom: 570 }}>
          <Icon
            name="checkmark-circle"
            type="ionicon"
            color="green"
            size={30}
          />
        </View>
      </Modal>
    </View>
  );
};

export default InventoryScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: "100%",
  },
  heading: {
    top: 120,
    marginLeft: 20,
    fontSize: 20,
    fontWeight: "500",
  },
  content: {
    height: 200,
  },
  highlight: {
    backgroundColor: "#d7d7d7",
    borderRadius: 20,
    width: "95%",
    left: 20,
    paddingRight: 15,
    height: 165,
  },
  card: {
    height: 165,
    width: "95%",
    backgroundColor: "#f1f1f1",
    left: 20,
    paddingRight: 15,
    borderRadius: 20,
  },
  image: {
    height: 120,
    width: 200,
    resizeMode: "contain",
  },
  carName: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "500",
  },
  carPrice: {
    textAlign: "center",
    fontSize: 11,
    fontWeight: "100",
    opacity: 0.6,
  },
  subHeading: {
    fontWeight: "500",
    fontSize: 20,
    marginLeft: 20,
  },
  button: {
    width: 100,
    height: 35,
    backgroundColor: "#aeaeae",
    marginHorizontal: 35,
    borderRadius: 20,
  },
  buttonHighlight: {
    width: 100,
    height: 35,
    backgroundColor: "#3e6ae1",
    marginHorizontal: 35,
    borderRadius: 20,
  },
  buttonText: {
    textAlign: "center",
    top: 7,
    color: "white",
  },
  order: {
    top: 300,
    flex: 1,
    alignItems: "center",
  },
  orderButton: {
    width: "70%",
    height: 40,
    backgroundColor: "#212121",
    borderRadius: 20,
  },
  orderText: {
    textAlign: "center",
    color: "white",
    top: 9,
    textTransform: "uppercase",
  },
  modal: {
    backgroundColor: "white",
    height: "100%",
  },
  modalTitle: {
    color: "black",
    top: 200,
    textAlign: "center",
    fontSize: 30,
    fontWeight: "500",
  },
  modalImageContainer: {
    top: 230,
    alignItems: "center",
  },
  modalImage: {
    height: 300,
    width: 300,
    resizeMode: "contain",
  },
  modalText: {
    bottom: 20,
    fontWeight: "500",
    fontSize: 20,
  },
  modalButton: {
    width: "80%",
    height: 40,
    backgroundColor: "#4769D9",
    borderRadius: 100,
    top: 50,
  },
  modalButtonText: {
    textAlign: "center",
    color: "white",
    top: 9,
    textTransform: "uppercase",
    fontSize: 15,
  },
});

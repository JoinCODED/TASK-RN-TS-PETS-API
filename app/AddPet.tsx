import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { createNewPet } from "@/api/fetchAllPets";

const AddPet = () => {
  const [formatData, setFormatData] = useState({
    name: "",
    type: "",
    image: "",
    adopted: "false",
  });

  const { mutate, data } = useMutation({
    mutationKey: ["createNewPet"],
    mutationFn: () => createNewPet(formatData),
    onSuccess: () => {
      alert("clicked!");
    },
    onError: () => {
      alert("Tre Again");
    },
  });

  const handlePress = () => {
    mutate();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Your Pet! </Text>
      <TextInput placeholder="Name" style={styles.input} />
      <TextInput placeholder="Description" style={styles.input} />
      <TextInput placeholder="Type" style={styles.input} />
      <TextInput placeholder="image" style={styles.input} />
      <TextInput placeholder="Adopted" style={styles.input} />

      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Add Pet</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddPet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9e3be",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    margin: 10,
  },
  input: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    margin: 10,
  },
  button: {
    backgroundColor: "black",
    padding: 10,
    borderRadius: 10,
    margin: 10,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});

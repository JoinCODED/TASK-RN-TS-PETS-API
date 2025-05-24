import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import pets from "@/data/pets";
import { addPet } from "@/api/pets";
const [petName, setPetName] = useState("");
const [description, setDescription] = useState("");
const [petImage, setPetImage] = useState("");
const [petType, setPetType] = useState("");
const [petAdopted, setPetAdopted] = useState("");

const { mutate, data } = useMutation({
  mutationKey: ["addPet"],
  mutationFn: () =>
    addPet({
      name: petName,
      description: description,
      image: petImage,
      type: petType,
      adopted: petAdopted.toLowerCase() === "true",
    }),
});

const handlePet = () => {
  mutate();
};

const AddPet = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Your Pet! </Text>
      <TextInput
        onChangeText={setPetName}
        placeholder="Pet Name"
        style={styles.input}
      />
      <TextInput
        onChangeText={setDescription}
        placeholder="Description"
        style={styles.input}
      />
      <TextInput
        onChangeText={setPetImage}
        placeholder="Image"
        style={styles.input}
      />
      <TextInput
        onChangeText={setPetType}
        placeholder="Type"
        style={styles.input}
      />
      <TextInput
        onChangeText={setPetAdopted}
        placeholder="Adopted"
        style={styles.input}
      />

      <TouchableOpacity onPress={handlePet} style={styles.button}>
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

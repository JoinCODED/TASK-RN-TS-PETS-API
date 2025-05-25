import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import pets from "@/data/pets";
import { addPetsPost } from "@/api/api";

const AddPet = () => {
  interface NewPets {
    name: string;
    image: string;
    type: string;
    adopted: boolean;
  }
  // const [newPet, setNewPet] = useState<NewPets>(newPet);

  const [petName, setPetName] = useState("");
  const [petDesc, setPetDesc] = useState("");
  const [petType, setType] = useState("");
  const [petImage, setPetImage] = useState("");
  const [petAdopted, setPetAdopted] = useState(false);

  // this function should handle adding a new pet
  const addPetHandler = async () => {
    await addPetsPost({ petName, petImage, petType, petAdopted });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Your Pet! </Text>
      <TextInput
        placeholder="Name"
        style={styles.input}
        onChangeText={(text) => {
          setPetName(text);
        }}
      />
      <TextInput
        placeholder="Description"
        style={styles.input}
        onChangeText={(text) => {
          setPetDesc(text);
        }}
      />
      <TextInput
        placeholder="Type"
        style={styles.input}
        onChangeText={(text) => {
          setType(text);
        }}
      />
      <TextInput
        placeholder="Image"
        style={styles.input}
        onChangeText={(text) => {
          setPetImage(text);
        }}
      />
      <TextInput
        placeholder="Adopted"
        style={styles.input}
        onChangeText={(text) => {
          if (text === "1") {
            setPetAdopted(true);
          }
        }}
      />

      <TouchableOpacity style={styles.button} onPress={addPetHandler}>
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

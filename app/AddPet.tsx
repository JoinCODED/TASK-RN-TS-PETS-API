import {
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { addNewPet } from "@/API/petget";
import { router } from "expo-router";

const AddPet = () => {
  const [name, setname] = useState("");
  const [description, setdescription] = useState("");
  const [type, settype] = useState("");
  const [image, setimage] = useState("");
  const [adopted, setadopted] = useState(false);

  const { mutate, isPending } = useMutation({
    mutationFn: () => addNewPet(name, description, type, image, adopted),
    mutationKey: ["addPet"],
    onSuccess: () => {
      alert("Pet added successfully");
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Your Pet! </Text>
      <TextInput
        placeholder="Name"
        onChangeText={(text) => setname(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Description"
        onChangeText={(text) => setdescription(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Type"
        onChangeText={(text) => settype(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Image"
        onChangeText={(text) => setimage(text)}
        style={styles.input}
      />
      <View
        style={{
          alignItems: "center",
          justifyContent: "space-around",
          flexDirection: "row",
        }}
      >
        <Text style={styles.title}>Adopted</Text>
        <Switch
          value={adopted}
          onValueChange={(value) => setadopted(value)}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={adopted ? "#f5dd4b" : "#f4f3f4"}
        />
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => mutate()}
        disabled={isPending}
      >
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
    alignContent: "center",
    justifyContent: "center",
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

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import axios from "axios";
import instance from ".";

const fetchAllPets = async () => {
  const response = await instance.get("/pets");
  return response.data;
};

const fetchOnePets = async (id: number) => {
  const response = await instance.get(`/pets/${id}`);
  return response.data;
};

const createNewPet = async (pet: any) => {
  const response = await instance.post("/pets", pet);
  return response.data;
};
export { fetchAllPets, fetchOnePets, createNewPet };

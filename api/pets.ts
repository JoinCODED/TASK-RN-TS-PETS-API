import { StyleSheet, Text, View } from "react-native";
import React from "react";
import axios from "axios";
import pets from "@/data/pets";

const api = axios.create({
  baseURL: "https://pets-react-query-backend.eapi.joincoded.com",
});

export const getPets = async () => {
  const response = await api.get("/pets");
  return response.data;
};

export const getOnePet = async (id: number) => {
  const response = await api.get(`/pets/${id}`);
  return response.data;
};

export const addPet = async (pet: {
  name: string;
  description: string;
  image: string;
  type: string;
  adopted: boolean;
}) => {
  const response = await api.post("/pets", pet);
  return response.data;
};

export const deletePet = async (id: number) => {
  const response = await api.delete(`/pets/${id}`);
  return response.data;
};

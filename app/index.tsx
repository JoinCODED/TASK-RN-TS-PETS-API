import PetList from "@/components/PetList";
import { View, StyleSheet } from "react-native";
import axios from "axios";

export default function Index() {
  return (
    <View style={styles.container}>
      <PetList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9e3be",
  },
});

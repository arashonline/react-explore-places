import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";

import PlacesNavigator from "./navigation/PlacesNavigator";


export default function App() {
  return (
    <PlacesNavigator />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

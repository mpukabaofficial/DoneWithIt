import "react-native-gesture-handler";
import { View, Text, Image, TextInput, Switch } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
// my libraries
import AppText from "./app/components/AppText";
import AppButton from "./app/components/AppButton";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ViewImage from "./app/screens/ViewImage";
import MessageScreen from "./app/screens/MessageScreen";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingScreen from "./app/screens/ListingScreen";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import ListingEditingScreen from "./app/screens/ListingEditingScreen";

const categories = [
  {
    label: "Furniture",
    value: 1,
    backgroundColor: "red",
    icon: "apps",
  },
  {
    label: "Clothing",
    value: 2,
    backgroundColor: "green",
    icon: "email",
  },
  {
    label: "Cameras",
    value: 3,
    backgroundColor: "blue",
    icon: "lock",
  },
];

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ListingEditingScreen />
    </GestureHandlerRootView>
  );
}

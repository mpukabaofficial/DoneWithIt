import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";

import AppText from "./AppText";
import defaultStyles from "../config/styles";

function PickerItem({ label, onPress, style }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={[styles.text, style]}>{label}</AppText>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  text: {
    padding: 20,
    backgroundColor: defaultStyles.colors.light,
    marginBottom: 10,
  },
});

export default PickerItem;

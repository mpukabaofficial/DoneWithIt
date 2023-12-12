import constants from "expo-constants";
import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";

function Screen({ children, style }) {
  return (
    <SafeAreaView style={[styles.container, style]}>
      <View style={[styles.view, style]}>{children}</View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: constants.statusBarHeight,
    flex: 1,
  },
  view: {
    flex: 1,
  },
});
export default Screen;

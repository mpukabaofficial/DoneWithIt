import React from "react";
import { View, StyleSheet, Image } from "react-native";

import colors from "../config/colors";
import AppText from "./AppText";

function Card({ image, title, subTitle }) {
  return (
    <View style={styles.card}>
      <Image resizeMode="cover" style={styles.image} source={image} />
      <View style={styles.detailsContainer}>
        <AppText numberOfLines={1} style={styles.title}>
          {title}
        </AppText>
        <AppText numberOfLines={2} style={styles.subTitle}>
          {subTitle}
        </AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    width: "100%",
    overflow: "hidden",
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
  subTitle: {
    color: colors.secondary,
  },
  title: {
    marginBottom: 7,
  },
});
export default Card;

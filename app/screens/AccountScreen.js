import React from "react";
import Screen from "../components/Screen";
import { FlatList, StyleSheet, View } from "react-native";

import ListItem from "../components/ListItem";
import colors from "../config/colors";
import Icon from "../components/Icon";
import ListItemSeparator from "../components/ListItemSeparator";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
  },
];

function AccountScreen(props) {
  return (
    <Screen style={styles.screen}>
      <View style={[styles.container, styles.containerColor]}>
        <ListItem
          title="Mphumelelo Khaba"
          subTitle="Mphumelelo.Khaba@versoincorp.com"
          image={require("../assets/lelo.jpg")}
        />
      </View>

      <View style={[styles.container, styles.containerColor]}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>
      <View style={styles.containerColor}>
        <ListItem
          title="Logout"
          IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
        />
      </View>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  containerColor: {
    backgroundColor: colors.white,
  },
  screen: {
    backgroundColor: colors.light,
  },
});

export default AccountScreen;

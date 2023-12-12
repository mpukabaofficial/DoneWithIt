import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

const initialMessages = [
  {
    id: 1,
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum libero nec ipsum tincidunt vehicula. Nulla eleifend sem sed turpis faucibus scelerisque ut non massa. Suspendisse sapien ex, auctor quis sodales in, efficitur et eros. Maecenas sit amet consequat arcu. Nunc imperdiet efficitur felis et fringilla. Integer posuere tempor blandit. Phasellus venenatis tempus dignissim. Aliquam eu enim pellentesque, pretium nisl in, pharetra lectus. Nunc in enim bibendum, posuere tortor facilisis, interdum ligula. Nunc consectetur tempor egestas. Nullam et lectus in dui venenatis ultrices ultricies nec quam. Sed tincidunt eros libero, a consequat lorem ullamcorper et. Quisque ut elementum purus.",
    description:
      " In molestie urna non ante ullamcorper blandit. Sed gravida libero purus, non tincidunt eros malesuada sed. Praesent a eros dignissim, pulvinar turpis id, suscipit quam. Ut vel eleifend erat, pulvinar feugiat lacus. Sed fringilla auctor risus. Integer eget euismod quam. Nulla mollis diam sed vehicula commodo. Sed maximus justo ut nibh imperdiet commodo.Nam sollicitudin convallis neque, id elementum mauris mollis quis. Sed et dolor urna. Sed quis arcu rutrum, ultricies magna nec, ultricies nisi. Mauris sagittis nunc sit amet arcu consectetur, vitae iaculis elit mollis. Integer viverra, lectus in feugiat feugiat, ante orci convallis augue, a hendrerit enim lorem quis nisi. Aliquam erat volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur auctor convallis libero, tempus facilisis mi semper nec. ",
    image: require("../assets/lelo.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/lelo.jpg"),
  },
  {
    id: 3,
    title: "T3",
    description: "D3",
    image: require("../assets/lelo.jpg"),
  },
  {
    id: 4,
    title: "T4",
    description: "D4",
    image: require("../assets/lelo.jpg"),
  },
];

function MessageScreen(props) {
  const [refreshing, setRefreshing] = useState(false);
  const [messages, setMessages] = useState(initialMessages);

  const handleDelete = (message) => {
    // Delete the message from messages
    setMessages(messages.filter((m) => m.id !== message.id));
  };
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Screen>
        <FlatList
          data={messages}
          keyExtractor={(message) => message.id.toString()}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              subTitle={item.description}
              image={item.image}
              onPress={() => console.log("Message selected", item)}
              renderRightActions={() => (
                <ListItemDeleteAction onPress={() => handleDelete(item)} />
              )}
            />
          )}
          ItemSeparatorComponent={() => <ListItemSeparator />}
          refreshing={refreshing}
          onRefresh={() => {
            setMessages([
              ...messages,
              {
                id: 5,
                title: "T5",
                description: "D5",
                image: require("../assets/lelo.jpg"),
              },
            ]);
          }}
        />
      </Screen>
    </GestureHandlerRootView>
  );
}
const styles = StyleSheet.create({});
export default MessageScreen;

import React from "react";

import { Image, StyleSheet, Text } from "react-native";

import "./woofDB";

const Avatar = (props) => (
  <Image style={styles.avatar} source={{ uri: props.url }} />
);

const Heading = (props) => <Text style={styles.heading}>{props.children}</Text>;

const Title = (props) => (
    <Text style={styles.title}>{props.children}</Text>
);

const styles = StyleSheet.create({
    avatar: {},
    heading: {},
    title: {},
});

const cardStyles = StyleSheet.create({
    card: {},
    title: {},
});


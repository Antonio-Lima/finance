import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { MotiView, MotiText } from "moti";
import { colors } from "../../constants/styles";

interface HeaderProps {
  name: string;
}

export default function Header(props: HeaderProps) {
  const { name } = props;
  return (
    <SafeAreaView style={styles.container}>
      <MotiView
        style={styles.content}
        from={{
          translateY: -50,
          opacity: 0,
        }}
        animate={{ translateY: 0, opacity: 1 }}
        transition={{
          type: "timing",
          duration: 800,
          delay: 200,
        }}
      >
        <MotiText
          style={styles.username}
          from={{ translateX: -150 }}
          animate={{ translateX: 0 }}
          transition={{ type: "timing", duration: 800, delay: 800 }}
        >
          {name}
        </MotiText>
        <TouchableOpacity activeOpacity={0.8} style={styles.buttonUser}>
          <Feather name="user" size={27} color="#fff" />
        </TouchableOpacity>
      </MotiView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.mainBrand,
  },
  content: {
    padding: 20,
    paddingBottom: 44,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  username: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFF",
  },
  buttonUser: {
    width: 44,
    height: 44,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 44 / 2,
  },
});

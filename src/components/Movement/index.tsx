import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface MovementProps {
  data: Transaction;
}

export default function Movement({ data }: MovementProps) {
  const [showValue, setShowValue] = useState(false);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => setShowValue(!showValue)}
    >
      <Text style={styles.date}>
        {data.date.toLocaleString("pt-BR", {
          year: "numeric",
          month: "numeric",
          day: "numeric",
        })}
      </Text>
      <View style={styles.content}>
        <Text style={styles.label}>{data.label}</Text>
        {showValue ? (
          <Text
            style={[styles.value, data.type ? styles.credit : styles.debit]}
          >
            R$ {data.value.toFixed(2)}
          </Text>
        ) : (
          <View style={styles.skeleton}></View>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24,
    borderBottomWidth: 0.5,
    borderBottomColor: "#DADADA",
  },
  date: {
    color: "#9c9c9c",
    fontWeight: "bold",
  },
  content: {
    marginTop: 2,
    marginBottom: 8,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  label: {
    fontWeight: "bold",
    fontSize: 16,
  },
  value: {
    fontSize: 16,

    fontWeight: "bold",
  },
  credit: {
    color: "#2ecc71",
  },
  debit: {
    color: "#e74c3c",
  },
  skeleton: {
    marginTop: 6,
    width: 80,
    height: 10,
    backgroundColor: "#DADADA",
    borderRadius: 8,
  },
});

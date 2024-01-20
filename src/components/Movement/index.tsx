import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MotiView, AnimatePresence, MotiText } from "moti";

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
          <AnimatePresence exitBeforeEnter>
            <MotiText
              style={[styles.value, data.type ? styles.credit : styles.debit]}
              from={{
                translateX: 100,
              }}
              animate={{
                translateX: 0,
              }}
              transition={{
                type: "timing",
                duration: 400,
              }}
            >
              R$ {data.value.toFixed(2)}
            </MotiText>
          </AnimatePresence>
        ) : (
          <AnimatePresence exitBeforeEnter>
            <MotiView
              style={styles.skeleton}
              from={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                type: "timing",
                duration: 200,
              }}
            />
          </AnimatePresence>
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

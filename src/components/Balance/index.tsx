import { Text, View, StyleSheet } from "react-native";

interface BalanceProps {
  balance: number;
  expenses: number;
}

export default function Balance(props: BalanceProps) {
  const { balance, expenses } = props;
  const currency = new Intl.NumberFormat("pt-BR");
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.itemTitle}>Saldo</Text>
        <View style={styles.content}>
          <Text style={styles.currencySymbol}>R$</Text>
          <Text style={styles.balance}>{balance.toFixed(2)}</Text>
        </View>
      </View>
      <View style={styles.item}>
        <Text style={styles.itemTitle}>Gastos</Text>
        <View style={styles.content}>
          <Text style={styles.currencySymbol}>R$</Text>
          <Text style={styles.expenses}>{expenses.toFixed(2)}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 18,
    marginTop: -24,
  },
  item: {
    padding: 22,
    backgroundColor: "#fff",
    borderRadius: 5,
  },
  itemTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#9c9c9c",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
  },
  currencySymbol: {},
  balance: {
    fontSize: 22,
    color: "#2ecc71",
  },
  expenses: {
    fontSize: 22,
    color: "#e74c3c",
  },
});

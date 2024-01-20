import { StyleSheet, Text, View, FlatList } from "react-native";

import Header from "../../components/Header";
import Balance from "../../components/Balance";
import Movement from "../../components/Movement";

import { list } from "../../constants";
import Actions from "../../components/Actions";

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Antônio Lima" />
      <Balance balance={15000} expenses={4000} />
      <Actions />
      <Text style={styles.title}>Últimas movimentações</Text>
      <FlatList
        style={styles.transactionsList}
        data={list}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Movement data={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginHorizontal: 14,
    marginTop: 14,
  },
  transactionsList: {
    marginHorizontal: 14,
  },
});

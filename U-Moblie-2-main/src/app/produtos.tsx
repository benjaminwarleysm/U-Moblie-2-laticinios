import { FlatList, StyleSheet, Text, View } from "react-native";

const produtos = [
  { id: "1", nome: "Leite Integral", preco: 4.99, unidade: "Litro" },
  { id: "2", nome: "Leite Desnatado", preco: 5.29, unidade: "Litro" },
  { id: "3", nome: "Queijo Muçarela", preco: 42.9, unidade: "Kg" },
  { id: "4", nome: "Queijo Prato", preco: 46.5, unidade: "Kg" },
  { id: "5", nome: "Manteiga", preco: 12.9, unidade: "Pote 200g" },
  { id: "6", nome: "Requeijão Cremoso", preco: 8.49, unidade: "Copo 200g" },
  { id: "7", nome: "Iogurte Natural", preco: 3.79, unidade: "Pote 170g" },
  { id: "8", nome: "Creme de Leite", preco: 3.49, unidade: "Caixa 200g" },
  { id: "9", nome: "Leite Condensado", preco: 6.99, unidade: "Lata 395g" },
  { id: "10", nome: "Bebida Láctea", preco: 4.59, unidade: "Garrafa 900g" },
];

export default function Produtos() {
  return (
    <FlatList
      data={produtos}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.container}
      ListHeaderComponent={
        <Text style={styles.titulo}>Laticínios Bom Sabor</Text>
      }
      renderItem={({ item }) => (
        <View style={styles.card}>
          <View style={styles.info}>
            <Text style={styles.nome}>{item.nome}</Text>
            <Text style={styles.unidade}>Unidade: {item.unidade}</Text>
          </View>
          <Text style={styles.preco}>R$ {item.preco.toFixed(2).replace(".", ",")}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#EAF4FF",
  },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#1565C0",
    textAlign: "center",
    marginBottom: 16,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#BBDEFB",
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
  },
  info: {
    flex: 1,
  },
  nome: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#222222",
  },
  unidade: {
    fontSize: 14,
    color: "#666666",
    marginTop: 4,
  },
  preco: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2E7D32",
  },
});

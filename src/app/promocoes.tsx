import { FlatList, Image, StyleSheet, Text, View } from "react-native";

const promocoes = [
  {
    id: "1",
    nome: "Leite Integral",
    tipo: "Leve 3, pague 2",
    preco: 9.98,
    foto: require("../../assets/images/produtos/leite.png"),
  },
  {
    id: "2",
    nome: "Queijo Muçarela",
    tipo: "Acima de 5 kg, pague R$ 38,90 o kg",
    preco: 38.9,
    foto: require("../../assets/images/produtos/queijo.png"),
  },
  {
    id: "3",
    nome: "Manteiga",
    tipo: "Preço especial com o cartão da loja",
    preco: 10.9,
    foto: require("../../assets/images/produtos/manteiga.png"),
  },
  {
    id: "4",
    nome: "Requeijão Cremoso",
    tipo: "Leve 3, pague 2",
    preco: 16.98,
    foto: require("../../assets/images/produtos/requeijao.png"),
  },
  {
    id: "5",
    nome: "Iogurte Natural",
    tipo: "Acima de 10 unidades, pague R$ 2,99 cada",
    preco: 2.99,
    foto: require("../../assets/images/produtos/iogurte.png"),
  },
  {
    id: "6",
    nome: "Leite Condensado",
    tipo: "Preço especial com o cartão da loja",
    preco: 5.99,
    foto: require("../../assets/images/produtos/leitecondensado.png"),
  },
];

export default function Promocoes() {
  return (
    <FlatList
      data={promocoes}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.container}
      ListHeaderComponent={
        <Text style={styles.titulo}>Laticínios Bom Sabor</Text>
      }
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Image source={item.foto} style={styles.foto} />
          <View style={styles.info}>
            <Text style={styles.nome}>{item.nome}</Text>
            <Text style={styles.tipo}>{item.tipo}</Text>
            <Text style={styles.preco}>R$ {item.preco.toFixed(2).replace(".", ",")}</Text>
          </View>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#FFF3E0",
  },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#E65100",
    textAlign: "center",
    marginBottom: 16,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#FFCC80",
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
  },
  foto: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 12,
  },
  info: {
    flex: 1,
  },
  nome: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#222222",
  },
  tipo: {
    fontSize: 14,
    color: "#E65100",
    marginVertical: 4,
  },
  preco: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#2E7D32",
  },
});

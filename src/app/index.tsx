import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Text style={styles.logoTexto}>🥛</Text>
      </View>

      <Text style={styles.titulo}>Laticínios Bom Sabor</Text>
      <Text style={styles.subtitulo}>Produtos e promoções para você</Text>

      <Pressable
        style={styles.botaoProdutos}
        onPress={() => router.push("/produtos")}
      >
        <Text style={styles.textoBotao}>Ver Produtos</Text>
      </Pressable>

      <Pressable
        style={styles.botaoPromocoes}
        onPress={() => router.push("/promocoes")}
      >
        <Text style={styles.textoBotao}>Ver Promoções</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#EAF4FF",
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#FFFFFF",
    borderWidth: 4,
    borderColor: "#1565C0",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  logoTexto: {
    fontSize: 60,
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1565C0",
    textAlign: "center",
  },
  subtitulo: {
    fontSize: 16,
    color: "#555555",
    marginBottom: 40,
    textAlign: "center",
  },
  botaoProdutos: {
    width: "100%",
    paddingVertical: 16,
    borderRadius: 8,
    backgroundColor: "#1565C0",
    alignItems: "center",
    marginBottom: 16,
  },
  botaoPromocoes: {
    width: "100%",
    paddingVertical: 16,
    borderRadius: 8,
    backgroundColor: "#E65100",
    alignItems: "center",
  },
  textoBotao: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
});

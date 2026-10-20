import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#1565C0" },
        headerTintColor: "#FFFFFF",
      }}
    >
      <Stack.Screen name="index" options={{ title: "Menu" }} />
      <Stack.Screen name="produtos" options={{ title: "Produtos" }} />
      <Stack.Screen name="promocoes" options={{ title: "Promoções" }} />
    </Stack>
  );
}

import { StatusBar, View } from "react-native";
import { Welcome } from "@/components/welcome";
import { Steps } from "@/components/steps";
import { Button } from "@/components/button";
import { router } from "expo-router";

export default function App() {
  return (
    <View style={{ flex: 1, padding: 40, gap: 40 }}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <Welcome />
      <Steps />

      <Button onPress={() => router.navigate("/home")}>
        <Button.Title>Começar</Button.Title>
      </Button>
    </View>
  );
}

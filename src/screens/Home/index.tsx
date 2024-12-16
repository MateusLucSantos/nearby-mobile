import { Text, View } from "react-native";
import { s } from "./styles";
import { Welcome } from "@/components/welcome";
import { Steps } from "@/components/steps";

export function Home() {
  return (
    <View style={s.container}>
      <Welcome />
      <Steps />
    </View>
  );
}

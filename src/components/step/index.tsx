import { colors } from "@/styles/theme";
import { Text, View } from "react-native";
import { s } from "./styles";

export function Step() {
  return (
    <View style={s.container}>
      <Text>Título</Text>
      <Text>Descrição</Text>
    </View>
  );
}

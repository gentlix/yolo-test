import { ViewStyle } from "react-native";

export const tw = ([str]: TemplateStringsArray): ViewStyle | null => {
  if (process.env.EXPO_OS === "web") {
    return { $$css: true, tw: str } as any;
  }
  return null;
};

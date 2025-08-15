import React from "react";
import { Text } from "react-native";

export function AssistantMessage({ children }: { children?: React.ReactNode }) {
  return (
    <Text
      style={{
        color: "white",
        paddingHorizontal: 16,
        paddingBottom: 8,
        fontSize: 16,
      }}
    >
      <Text style={{ color: "gray" }}>{`> `}</Text>
      {children}
    </Text>
  );
}

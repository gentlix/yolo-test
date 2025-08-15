"use client";

import * as AC from "@bacons/apple-colors";
import { ScrollView, ScrollViewProps } from "react-native";

export function BodyScrollView(props: ScrollViewProps) {
  const paddingBottom = 72;
  return (
    <ScrollView
      automaticallyAdjustsScrollIndicatorInsets
      contentInsetAdjustmentBehavior="automatic"
      scrollIndicatorInsets={{ bottom: paddingBottom }}
      {...props}
      style={[{ backgroundColor: AC.systemGroupedBackground }, props.style]}
    />
  );
}

BodyScrollView.displayName = "BodyScrollView";

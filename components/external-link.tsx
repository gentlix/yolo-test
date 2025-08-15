"use client";

import { ViewProps } from "react-native";
import Animated, { Easing, FadeInUp } from "react-native-reanimated";

export function SubtleScaleAndFadeIn({
  delay,
  ...props
}: ViewProps & { delay?: number }) {
  return (
    <Animated.View
      {...props}
      entering={FadeInUp.duration(500).easing(Easing.out(Easing.ease))}
      style={props.style}
    />
  );
}

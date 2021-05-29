import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemeProvider } from "./src/context/ThemeProvider";

import Navigator from "./src/router/Navigator";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ThemeProvider>
        <Navigator />
      </ThemeProvider>
    </SafeAreaView>
  );
}

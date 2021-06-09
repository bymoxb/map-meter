import React, { useCallback, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemeProvider } from "./src/context/ThemeProvider";
import { requestLocation } from "./src/libs";
import Navigator from "./src/router/Navigator";

export default function App() {
  const _requestLocation = useCallback(async () => {
    await requestLocation();
  }, []);

  useEffect(() => {
    _requestLocation();
  }, [_requestLocation]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ThemeProvider>
        <Navigator />
      </ThemeProvider>
    </SafeAreaView>
  );
}

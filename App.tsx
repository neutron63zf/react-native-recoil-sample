import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { RecoilRoot, useRecoilState, atom, selector } from "recoil";

const countState = atom({
  key: "sample/count", // 適当なユニークキー
  default: 1, // デフォルト値
});

const liarCountState = selector({
  key: "sample/liarCount",
  get: ({ get }) => get(countState) * 2,
  set: ({ get, set }, newValue) => set(countState, newValue),
});

const Counter = () => {
  const [count, setCount] = useRecoilState(liarCountState);
  return (
    <>
      <Button onPress={() => setCount((c) => c * 2)} title="Click Me!"></Button>
      <Text>Clicked: {count}</Text>
    </>
  );
};

export default function App() {
  return (
    <RecoilRoot>
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!!</Text>
        <Counter />
      </View>
    </RecoilRoot>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

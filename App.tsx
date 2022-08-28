import React, { useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
  Image,
} from "react-native";

export default function App() {
  const animation = useRef(new Animated.Value(1)).current;

  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 0.8,
      delay: 0,
      duration: 100,
      useNativeDriver: true,
    }).start(({ finished }) => {
      if (finished) {
        Animated.timing(animation, {
          toValue: 1,
          delay: 0,
          duration: 100,
          useNativeDriver: true,
        }).start();
      }
    });
  };

  return (
    <View style={styles.container}>
      <Text>Heart animation!</Text>
      <TouchableOpacity style={styles.heartButton} onPress={startAnimation}>
        <Animated.Image
          style={
            (styles.heart,
            {
              transform: [{ scale: animation }],
            })
          }
          source={require("./assets/heart.png")}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  heartButton: {
    // width: 50,
    // height: 50,
    // backgroundColor: "pink",
  },
  heart: {
    width: 50,
    height: 50,
    top: 0,
  },
});

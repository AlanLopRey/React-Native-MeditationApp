import {
  Text,
  View,
  ImageBackground,
  SafeAreaView,
  StatusBar as RNStatusBar,
  StyleSheet,
} from "react-native";

import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { LinearGradient } from "expo-linear-gradient";

import BeachImage from "@/assets/meditation-images/beach.webp";
import CustomButton from "@/components/CustomButton";

export class App extends Component {
  render() {
    return (
      <View className="flex-1">
        <ImageBackground
          source={BeachImage}
          resizeMode="cover"
          className="flex-1"
        >
          <LinearGradient
            className="flex-1"
            colors={["rgba(0,0,0,0.4)", "rgba(0,0,0,0.8)"]}
          >
            <View className="flex-1 mx-5 mb-12 justify-between">
              <View>
                <Text
                  style={styles.safe_view}
                  className="text-center text-white font-bold text-4xl"
                >
                  Meditation App
                </Text>
                <Text className="text-center text-white text-2xl mt-3">
                  Simplifying Meditation for everyone
                </Text>
              </View>

              <View>
                <CustomButton
                  onPress={() => console.log("tap")}
                  title="Get Started"
                />
              </View>
            </View>
            <StatusBar translucent={true} style="light" />
          </LinearGradient>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  safe_view: {
    marginTop: RNStatusBar.currentHeight,
  },
});

export default App;

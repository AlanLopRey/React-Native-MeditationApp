import {
  Text,
  View,
  ImageBackground,
  SafeAreaView,
  StatusBar as RNStatusBar,
  StyleSheet,
} from "react-native";

import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";

import BeachImage from "@/assets/meditation-images/beach.webp";
import CustomButton from "@/components/CustomButton";
import { useRouter } from "expo-router";
import AppGradient from "@/components/AppGradient";
export function App() {
  const router = useRouter();

  return (
    <View className="flex-1">
      <ImageBackground
        source={BeachImage}
        resizeMode="cover"
        className="flex-1"
      >
        <AppGradient colors={["rgba(0,0,0,0.4)", "rgba(0,0,0,0.8)"]}>
          <View className="flex-1 px-1 justify-between">
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
                onPress={() => router.push("/nature-meditate")}
                title="Get Started"
              />
            </View>
          </View>
          <StatusBar translucent={true} style="light" />
        </AppGradient>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  safe_view: {
    marginTop: RNStatusBar.currentHeight,
  },
});

export default App;

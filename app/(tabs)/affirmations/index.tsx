import { View, Text, ScrollView } from "react-native";
import React from "react";
import AppGradient from "@/components/AppGradient";
import AFFIRMATION_GALLERY from "@/constants/affirmation-gallery";
import GuidedAffirmationsGallary from "@/components/GuidedAffirmationsGallary";

const Affirmations = () => {
  return (
    <View className="flex-1">
      <AppGradient colors={["#2e1f59", "#54426b", "#a790af"]}>
        <ScrollView>
          <Text className="text-zinc-50 text-3xl font-bold">
            Change your beliefs with affirmation
          </Text>

          <View>
            {AFFIRMATION_GALLERY.map((g) => (
              <GuidedAffirmationsGallary
                key={g.title}
                title={g.title}
                previews={g.data}
              />
            ))}
          </View>
        </ScrollView>
      </AppGradient>
    </View>
  );
};

export default Affirmations;

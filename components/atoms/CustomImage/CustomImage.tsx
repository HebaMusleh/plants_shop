import React, { useState } from "react";
import { View, Image, ActivityIndicator } from "react-native";
import { CustomImageProps } from "@/types";
import styles from "./CustomImage.styles";

const CustomImage: React.FC<CustomImageProps> = ({
  uri,
  cart,
  fallbackUri,
}) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  return (
    <View style={[styles.wrapper, cart && styles.cartWrapper]}>
      {loading && <ActivityIndicator style={styles.loader} color="#0B845C" />}
      <Image
        source={{ uri: error ? fallbackUri : uri }}
        style={[styles.image]}
        onLoadEnd={() => setLoading(false)}
        onError={() => setError(true)}
        resizeMode="cover"
      />
    </View>
  );
};

export default CustomImage;

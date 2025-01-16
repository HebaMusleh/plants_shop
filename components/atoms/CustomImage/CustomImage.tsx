import React, { useState } from "react";
import { View, Image, ActivityIndicator } from "react-native"; // always remove unused imports

import { styles } from "./style";

type CustomImageProps = {
  uri: string;
  cart?: boolean;
  fallbackUri?: string;
};

const CustomImage: React.FC<CustomImageProps> = ({
  uri,
  cart,
  fallbackUri = "https://via.placeholder.com/200",
}) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  return (
    <View style={[styles.wrapper, cart && styles.cartWrapper]}>
      {loading && <ActivityIndicator style={styles.loader} />}
      {/** you can create an amazing HOC called withLoader look (higher order components) HOC up */}
      <Image
        source={{ uri: error ? fallbackUri : uri }}
        style={[styles.image]}
        onLoadEnd={() => setLoading(false)}
        onError={() => setError(true)}
        resizeMode="contain"
      />
    </View>
  );
};

export default CustomImage;

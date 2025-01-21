import React from "react";
import { View, Text } from "react-native";
import { IReviews } from "@/types";
import styles from "./Reviews.styles";

const Reviews = ({ reviews }: { reviews: IReviews[] }) => {
  return (
    <View style={styles.container}>
      {reviews?.map((review) => (
        <View key={review.id} style={styles.reviewCard}>
          <Text style={styles.username}>{review.username}</Text>
          <Text style={styles.comment}>{review.comment}</Text>
        </View>
      ))}
    </View>
  );
};



export default Reviews;

import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router';
import { Container } from '@/components/atoms';

type Props = {}

const DetailsScreen = (props: Props) => {
    const { id } = useLocalSearchParams();
  return (
    <Container>
      <Text>DetailsScreen{id}</Text>
    </Container>
  )
}

export default DetailsScreen
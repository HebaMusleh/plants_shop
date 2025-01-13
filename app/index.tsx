import { View, Text } from 'react-native'
import React from 'react'
import CustomButton from '@/components/atoms/CustomButton/CustomButton'

type Props = {}

const HomeScreen = (props: Props) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:"#fff" }}>
     <CustomButton/>
    </View>
  )
}

export default HomeScreen
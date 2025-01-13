import { View, Text } from 'react-native'
import React from 'react'
import { CustomText,CustomButton, CustomCounterButton,CustomImage } from '@/components/atoms'

type Props = {}

const HomeScreen = (props: Props) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:"#fff" }}>
      <CustomImage
       uri=''/>
    </View>
  )
}

export default HomeScreen
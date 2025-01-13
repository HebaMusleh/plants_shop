import { View, Text } from 'react-native'
import React from 'react'
import { CustomText,CustomButton } from '@/components/atoms'

type Props = {}

const HomeScreen = (props: Props) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:"#fff" }}>
     <CustomButton active title='Hello Button'/>
     <CustomText secondary text='Hello Text'/>
    </View>
  )
}

export default HomeScreen
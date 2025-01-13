import {Text, TouchableOpacity } from 'react-native'
import React from 'react'

import { styles } from './styles'


const CustomButton = ({active,title,onPress,rest}: {active?:boolean,title:string,onPress:()=>void,rest?:any}) => {
  return (
    <TouchableOpacity style={[styles.button,active&&styles.active]} {...rest} onPress={onPress}>
      <Text style={[styles.text,active&&styles.textActive]}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton
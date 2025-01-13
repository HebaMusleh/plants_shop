import {Text, TouchableOpacity } from 'react-native'
import React from 'react'

import { styles } from './styles'


const CustomButton = ({rest}: {rest?:any}) => {
  return (
    <TouchableOpacity style={styles.button} {...rest}>
      <Text style={styles.text}>CustomButton</Text>
    </TouchableOpacity>
  )
}

export default CustomButton
import React from 'react'
import { StyleSheet, Text } from 'react-native'

import { Container } from '@/components/atoms'
import { CustomTabs } from '@/components/molecucles'
import { homeTabs } from '@/constants/tabs'



const HomeScreen = () => {
  return (
    <Container>
      <Text style={styles.title}>Plants</Text>
      <CustomTabs tabs={homeTabs}/>
    </Container>
    
  )
}
const styles = StyleSheet.create({
  title:{
    fontSize:24,
    fontWeight:'600',
    textAlign:'left',
    letterSpacing:0.005,
    lineHeight:36,
    paddingBottom:20
  }
})
export default HomeScreen
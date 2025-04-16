import { View, Text, Image } from 'react-native'
import React from 'react'
import { styles } from '@/styles/info.styles'
import TabComponnent from '@/components/TabComponnent'

export default function Info() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={require('@/assets/images/question.png')}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.text}>
          Hello ! welcome to <Text style={styles.brand}>Plumify</Text>{"\n"}
          Plumify is a CNN who allows{"\n"}
          recognition of plums and{"\n"}
          their aspects
        </Text>
      </View>
      <TabComponnent />
    </View>
  )
}

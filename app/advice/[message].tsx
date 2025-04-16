import { View, Image, Text, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router'
import Markdown from 'react-native-markdown-display'
import { styles } from '@/styles/advice.styles'
import { APIData } from '../answer/[uri]'
import { COLORS } from '@/constants/theme'
import { Ionicons } from '@expo/vector-icons'

export default function Advice() {
  const { message } = useLocalSearchParams()
  const router = useRouter()

  const [data, setData] = useState<APIData>()
  const [translated, setTranslated] = useState<boolean>(false)
  const [showMessage, setShowMessage] = useState<string>("")

  useEffect(() => {
    if (message) {
      const res: APIData = JSON.parse(message as string)
      setData(res)
      setShowMessage(res.conseils_fr || "")
    }
  }, [message])

  function toggleLang() {
    if (translated) {
      setShowMessage(data?.conseils_fr || "")
    } else {
      setShowMessage(data?.conseils_traduits?.translated || "")
    }
    setTranslated(!translated)
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color={"#000"} />
        </TouchableOpacity>
        <View style={{flex: 1, justifyContent: "center",display: "flex", flexDirection: "row", alignItems: "center", gap: 10}}>
          <Image source={require("@/assets/images/plume/answer_header.png")} />
          <Text style={styles.headerText}>Plumify</Text>
        </View>
      </View>

      <ScrollView style={styles.content}>
        <Markdown
          style={{
            body: {
              color: 'black',
              fontSize: 16,
              backgroundColor: COLORS.white,
              padding: 10,
              borderRadius: 20,
              elevation: 1
            },
            heading1: { fontSize: 28, color: 'royalblue' },
            code_block: { backgroundColor: '#f4f4f4', padding: 10 },
          }}
        >
          {showMessage}
        </Markdown>
      </ScrollView>

      <TouchableOpacity onPress={toggleLang} style={styles.button}>
        <Text style={styles.buttonText}>
          {translated ? "Voir en français" : "Voir en Bulu"}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

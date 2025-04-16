import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import TabComponnent from "@/components/TabComponnent";
import {styles} from "@/styles/answer.styles"
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from '@/constants/theme';
import { Link, useRouter, useLocalSearchParams } from 'expo-router';
import axios, { AxiosResponse } from "axios"

export interface APIData {
  affectee: boolean,
  classe_predite: string,
  conseils_fr: string | null,
  conseils_traduits: {
    original: string,
    src: string,
    translated: string,
    trg: string
  } | null
}

export default function Answer() {
  const {uri} = useLocalSearchParams()
  const router = useRouter()
  const [loading, setLoading] = useState<boolean>(true)
  const [data, setData] = useState<APIData>()

  useEffect(() => {
    console.log(uri)
    analyzeImage(uri as string)
  }, [])

  async function analyzeImage(uri:string) {
    const formData = new FormData()
    formData.append('image', {
      uri: uri,
      name: "plume,jpg",
      type: 'image/jpg',
    } as any)

    try{
      const response = await axios.post<any, AxiosResponse<APIData, any>>(
        'https://purga.smartcloudservices.cloud/api/analyze-prune',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Accept': 'application/json',
          }
        }
      )
      console.log('Upload successfully')
      // response.data.conseils_fr = "Améliorer la qualité des prunes atteintes de sharka (plum pox virus) au Cameroun est difficile, car il n'existe pas de traitement curatif. Cependant, des mesures peuvent atténuer les pertes :\n\n**Pour l'agriculteur camerounais:**\n\n*   **Détection précoce et élimination:** Inspectez régulièrement les arbres et détruisez immédiatement ceux présentant des symptômes (feuilles marbrées, fruits déformés).\n*   **Matériel végétal sain:** Utilisez des plants certifiés exempts de virus. Achetez-les auprès de pépiniéristes réputés.\n*   **Lutte contre les pucerons:** Les pucerons propagent le virus. Utilisez des insecticides adaptés (en respectant les doses et les délais de sécurité) ou des méthodes biologiques (introduction de coccinelles).\n*   **Rotation des cultures:** Évitez de replanter des pruniers au même endroit après l'abattage d'arbres infectés.\n*   **Amélioration des pratiques culturales:** Fertilisez correctement les arbres pour renforcer leur résistance et irriguez-les en période de sécheresse.\n*   **Diversification:** Plantez d'autres cultures moins sensibles à la sharka pour sécuriser vos revenus.\n*   **Collaboration:** Contactez les services agricoles locaux pour obtenir des conseils spécifiques et des formations.\n"
      // response.data.conseils_traduits = {
      //   "original": "améliorer la qualité des prunes atteintes de sharka (plum pox virus) au cameroun est difficile, car il n'existe pas de traitement curatif. cependant, des mesures peuvent atténuer les pertes :\n\n**pour l'agriculteur camerounais:**\n\n*   **détection précoce et élimination:** inspectez régulièrement les arbres et détruisez immédiatement ceux présentant des symptômes (feuilles marbrées, fruits déformés).\n*   **matériel végétal sain:** utilisez des plants certifiés exempts de virus. achetez-les auprès de pépiniéristes réputés.\n*   **lutte contre les pucerons:** les pucerons propagent le virus. utilisez des insecticides adaptés (en respectant les doses et les délais de sécurité) ou des méthodes biologiques (introduction de coccinelles).\n*   **rotation des cultures:** évitez de replanter des pruniers au même endroit après l'abattage d'arbres infectés.\n*   **amélioration des pratiques culturales:** fertilisez correctement les arbres pour renforcer leur résistance et irriguez-les en période de sécheresse.\n*   **diversification:** plantez d'autres cultures moins sensibles à la sharka pour sécuriser vos revenus.\n*   **collaboration:** contactez les services agricoles locaux pour obtenir des conseils spécifiques et des formations.",
      //   "src": "fr",
      //   "translated": "mebetan mfa'ane biañ biañ kamelon e ne ayaé amu teke'e éyalan\nôkofet\n**pour mbo mefup kamelon\nôkofet\n*éyoñ ésok a étyel:** mi ka'ale yene bilé, ve miñe ane mi ne'e bifia (maré mefep, mbieñelan bibuma)\n* **saé bilokit:**, belané minkômbaé bikon, mi kusan beyemé\n*bôm metôkot:** metôtôk ma be'ele vairus. belan ôbe'ebek (sômbô'ô mimbôlane a mimbôman) nge biôm (môlan me kube)\n* **ntyiñane mefup:** évitez de repoé mezoñ e vôm wua ô maneya ba'é bilé bi ntyaman\n* **mebu'uban mimfek ya mefup:* Fa'a nyolan bilé na é wô'ô ñyeman, ve miamebe bie éyoñ ésep\n* **tyamé:* bé'é mefup mevok mebien éwuwua\n* **saéban:*tañe bengas ya afup ya nlam a zasi'ane melep a mfaseban\n",
      //   "trg": "bu"
      // }
      setData(current => response.data)
      console.log(data)
    } catch(error) {
      console.log('Erreur upload: ', error)
    } finally {
      setLoading(false)
    }
  } 

  return loading ? 
  (
    <View style={styles.container}>
      <Text style={styles.text}>Loading...</Text>
    </View>
  ) : (
    <View style={styles.container}>
        <View style={styles.header}>
          <Image source={require("@/assets/images/plume/answer_header.png")} />
          <Text style={styles.headerText}>Plumify</Text>
        </View>
        <View style={styles.content}>
          <View style={styles.card}> 
            <Link href={"/"} style={styles.closeButton}>
              <Ionicons name='close' size={35} color={COLORS.white} />
            </Link>
            <View style={styles.cardBody}>
                <Image source={{uri: uri as string}} style={styles.bodyImage} />
                <Text style={styles.bodyText}>
                  There is an <Text style={styles.targetText}>{data?.classe_predite}</Text> plum
                </Text>
            </View>
            {data?.affectee && (
              <TouchableOpacity  
                onPress={() => router.navigate({
                  pathname: "/advice/[message]",
                  params: {message: JSON.stringify(data)}
                })}
                style={styles.camera}
              >
                <Text style={styles.buttonText}>View advice</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
        <TabComponnent />
    </View>
  )
}
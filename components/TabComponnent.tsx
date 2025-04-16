import { View, Text } from 'react-native'
import React from 'react'
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { COLORS } from "@/constants/theme";
import { styles } from "@/styles/tabs.styles";

export default function TabComponnent() {
  return (
    <View style={styles.tabList}>
        <Link href={"/info"} style={styles.tabTrigger} >
          <Text style={{
            textAlign: "center",
            color: COLORS.white,
            fontSize: 36,
            fontFamily: "Limelight"
          }}>?</Text>
        </Link>
        <Link href={"/account"} style={styles.tabTrigger}>
          <Ionicons name="person" size={35} color={COLORS.white} />
        </Link>
      </View>
  )
}
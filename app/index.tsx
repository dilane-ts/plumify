
import TabComponnent from "@/components/TabComponnent";
import {styles} from "../styles/index.styles"
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Link, Redirect, useRouter } from "expo-router";
import * as ImagePicker from "expo-image-picker"

export default function Index() {
  const router = useRouter()

  async function pickImage() {
    console.log('load image....')
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
    })

    console.log(result)
    if(!result.canceled) {
      const uri = result.assets[0].uri
      router.navigate({
        pathname: "/answer/[uri]",
        params: {uri: uri}
      })
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.imageContainer}>
          <Image 
            source={require("../assets/images/plume/Icon.png")}
            style={{ width: 190, height: 160}}
          />
          <Image 
            source={require("../assets/images/plume/plume.png")}
            style={{ width: 115, height: 145, position: "absolute"}}
          />
        </View>

        <Link href={"/camera"} style={styles.button}>
          <Text style={styles.buttonText}>Take a picture</Text>
        </Link>

        <TouchableOpacity onPress={pickImage} style={styles.buttonDash}>
          <Text style={styles.buttonTextDash}>Load a picture</Text>
        </TouchableOpacity>
      </View>
      <TabComponnent />
    </View>
     
  );
}

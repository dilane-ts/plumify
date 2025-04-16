import { View, Text, TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'
import {CameraType, CameraView, useCameraPermissions, FlashMode} from "expo-camera"
import { styles } from '@/styles/camera.styles'
import { Ionicons } from '@expo/vector-icons'
import { COLORS } from '@/constants/theme'
import { useRouter } from 'expo-router'
import * as FileSystem from 'expo-file-system'

export default function CameraScreen() {
  const [facing, setFacing] = useState<CameraType>('back')
  const router = useRouter()
  const [flash, setFlash] = useState<FlashMode>("off");
  const [permission, requestPermission] = useCameraPermissions()
  const [camera, setCamera] = useState<CameraView>()

  if(!permission) {
    return <View />
  }

  if(!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to show the camera</Text>
        <TouchableOpacity onPress={requestPermission} style={styles.button}>
          <Text style={styles.buttonText}>Grand permission</Text>
        </TouchableOpacity>
      </View>
    )
  }

  async function takePicture() {
    let photo = await camera!.takePictureAsync();
    const uri = FileSystem.documentDirectory + `plume_${Date.now()}.jpg`
    await FileSystem.copyAsync({
      from: photo?.uri as string,
      to: uri
    })
    router.push({
      "pathname": "/answer/[uri]",
      "params": {uri: uri}
    })
  }

  function toggleFlash() {
    setFlash(current => (current == "off" ? "on" : "off"))
  }

  return (
    <View style={styles.container}>
      <CameraView 
        ref={ref => setCamera(current => ref as CameraView) }
        style={styles.camera}
        facing={facing}
        flash={flash}
        
      >
        <View style={styles.actions}>
          <TouchableOpacity onPress={toggleFlash} >
            <Ionicons name={flash == "off" ? "flash" : "flash-off"} color={COLORS.white} size={48} />
          </TouchableOpacity>
          <TouchableOpacity onPress={takePicture} >
            <Ionicons name='camera' color={COLORS.white} size={48} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.back()} >
            <Ionicons name='return-down-back' color={COLORS.white} size={48} />
          </TouchableOpacity>
        </View>
      </CameraView>
    </View>
  )
}
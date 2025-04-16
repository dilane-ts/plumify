import { StyleSheet, Dimensions } from 'react-native'
import { COLORS } from '@/constants/theme'

const { width } = Dimensions.get('window')

export const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 80, // laisse de la place pour la barre du bas
  },
  card: {
    width: width * 0.8,
    backgroundColor: '#fff',
    borderRadius: 30,
    borderWidth: 3,
    borderColor: COLORS.primary,
    alignItems: 'center',
    paddingVertical: 30,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  image: {
    width: 150,
    height: 80,
    marginBottom: 20,
    tintColor: '#dcdcdc',
  },
  text: {
    textAlign: 'center',
    fontSize: 25,
    fontFamily: "Lilita-one",
    color: '#444',
    fontWeight: '600',
  },
  brand: {
    color: COLORS.primary,
    fontFamily: "Lilita-one",
    fontSize: 25,
  },
})

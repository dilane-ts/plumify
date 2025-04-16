import { StyleSheet } from "react-native";
import { COLORS } from "@/constants/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    elevation: 3,
    backgroundColor: COLORS.white,
    paddingBottom: 10,
  },
  headerText: {
    fontSize: 40,
    color: COLORS.primary,
    fontFamily: "Lilita-one"
  },
  content: {
    flex: 1,
    padding: 16,
  },
  button: {
    backgroundColor: COLORS.primary,
    padding: 14,
    margin: 16,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    elevation: 2,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "bold",
  },
});

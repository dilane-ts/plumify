import { COLORS } from "@/constants/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    "tabList": {
        display: "flex",
        position: "absolute",
        bottom: 0,
        backgroundColor: COLORS.primary,
        paddingVertical: 15,
        borderTopLeftRadius: 60,
        borderTopRightRadius: 60,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        gap: 20,
        width: "100%"
    },

    tabTrigger: {
        backgroundColor: "#A939F4",
        padding: 15,
        borderRadius: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: 64,
        width: 64,
    }
}) 
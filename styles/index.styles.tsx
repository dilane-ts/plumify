import { COLORS } from "@/constants/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        position: "relative",
        flex: 1,
        backgroundColor: COLORS.surfaceLight,
        display: "flex",
        justifyContent: "center",
    },

    content: {
        padding: 25,
        display: "flex",
        flexDirection: "column",
        gap: 15,
    },

    imageContainer: {
        borderWidth: 6,
        borderStyle: "dotted",
        borderColor: COLORS.grey,
        height: 300,
        borderRadius: 30,
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },

    button: {
        backgroundColor: COLORS.primary,
        paddingVertical: 20,
        borderRadius: 50,
    },

    buttonText: {
        color: COLORS.white,
        fontSize: 25,
        fontFamily: "Lilita-one",
        textAlign: "center",
    },

    buttonDash: {
        paddingVertical: 15,
        borderRadius: 20,
        borderStyle: "dashed",
        borderWidth: 3,
        borderColor: COLORS.grey,
        marginHorizontal: 30,
    },

    buttonTextDash: {
        color: COLORS.grey,
        fontSize: 25,
        fontFamily: "Lilita-one",
        textAlign: "center",
    },
})
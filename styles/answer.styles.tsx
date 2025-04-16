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

    header: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        gap: 5,
        marginTop: 10,
    },

    headerText: {
        fontSize: 40,
        color: COLORS.primary,
        fontFamily: "Lilita-one"
    },

    content: {
       flex: 1,
       display: "flex",
       justifyContent: "center",
       alignItems: "center",
    },

    card: {
        position: "relative",
        backgroundColor: COLORS.white,
        borderRadius: 50,
        width: 360,
    },

    closeButton: {
        backgroundColor: COLORS.secondary,
        position: "absolute",
        padding: 10,
        borderRadius: 50,
        top: "-5%",
        right: "-1%",
    },

    cardBody: {
        display: "flex",
        // alignItems: "center",
        gap: 20,
        padding: 30,
        marginBottom: 30,
    },    

    bodyImage: {
        height: 256,
        width: "100%",
        borderRadius: 50,
    },

    bodyText: {
        color: "#666666",
        fontFamily: "Lilita-one",
        fontSize: 35,
    },

    text: {
        color: COLORS.primary,
        fontFamily: "Lilita-one",
        fontSize: 45,
        textAlign: "center"
    },

    targetText: {
        color: COLORS.secondary,
    },

    camera: {
        backgroundColor: COLORS.primary,
        position: "absolute",
        bottom: "-5%",
        right: "5%",
        paddingHorizontal: 35,
        paddingVertical: 15,
        borderRadius: 50,
    },

    buttonText: {
        fontSize: 15,
        fontFamily: "Lilita-one",
        color: COLORS.white
    }
})
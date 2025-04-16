import { COLORS } from "@/constants/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        justifyContent: "center",
    },

    message: {
        fontSize: 20,
        fontFamily: "Lilita-one",
        textAlign: "center",
        marginBottom: 25,
        marginHorizontal: 30,
    },

    button: {
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 20,
        backgroundColor: COLORS.primary,
    },

    buttonText: {
        color: COLORS.white,
        fontSize: 20,
        fontFamily: "Lilita-one",
        textAlign: "center",
    },
    camera: {
        flex: 1,
        position: 'relative',
    },

    actions: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        position: "absolute",
        paddingHorizontal: 20,
        bottom: 10,
        width: "100%",
    }
})
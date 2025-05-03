import { colors } from "@/utils/colour";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        marginBottom: 20
    },
    inputContainer: {
        borderWidth: 1,
        borderColor: colors.grey,
        borderRadius: 14,
        flexDirection: 'row',
        alignItems: 'center'
    },
    input: {
        paddingHorizontal: 16,
        paddingVertical: 20,
        flex: 1
    },
    label: {
        marginBottom: 8,
        color: colors.blue,
        fontWeight: '500',
    },
    eye: {
        width: 24,
        height: 24,
        marginHorizontal: 16
    },
    placeholder: {
        paddingHorizontal: 16,
        paddingVertical: 20,
        flex: 1,
        color: colors.lightGrey,
    },
    arrow: {
        marginHorizontal: 16,
        transform: [{ rotate: '90deg' }]
    },
    modalWrapper: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
    }
});

export default styles;
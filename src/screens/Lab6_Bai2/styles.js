import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        width: '80%',
        marginBottom: 20,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
    },

    text: {
        color: '#0000FF',
        marginBottom: 20,
        fontWeight: 'bold',
        fontSize: 15,
    },
    buttonContainer: {
        marginTop: 20,
        flexDirection: 'colunm',
        width: 300,
        justifyContent: 'space-around',
    },
});
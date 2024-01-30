import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'center',
    },
    details:{
        marginLeft: 80,
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    text: {
        textAlign: 'left',
        paddingBottom: 20,
    },
    firstLine:{
        color:'#FF4500',
        fontSize: 50,
    },
    secondLine:{
        color:'#FF4500',
        fontSize: 50,
    },
    button: {
        width: 100, 
        height: 50,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems:'center',
        justifyContentL: 'center',
        
    },
    buttonText: {
        color: 'black',
        fontSize: 16,
        paddingTop: 13,
        textAlign:'center'
    },
    textStyle: {
        fontSize: 15,
        color: '#98FB98',
        paddingBottom: 50,
    },
});
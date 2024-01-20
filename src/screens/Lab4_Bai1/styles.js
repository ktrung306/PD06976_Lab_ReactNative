import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 20,
    },
    item: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 16,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },
    photo: {
      width: 90,
      height: 90,
      borderRadius: 25,
      marginRight: 16,
    },
    details: {
      flex: 1,
    },
    name: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    email: {
      color: '#555',
    },
    position: {
      color: '#777',
    },
    callButton: {
      padding: 10,
      backgroundColor: '#4CAF50',
      borderRadius: 5,
    },
    callButtonText: {
      color: 'white',
      fontWeight: 'bold',
    },
  });
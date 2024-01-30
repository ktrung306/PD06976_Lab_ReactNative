import * as React from 'react'
import { Button, StyleSheet, Text, TextInput, View} from "react-native";
import { NavigationContainer} from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { styles } from './styles';

function HomeScreen({navigation}) {
    const [name, setName] = React.useState('');

    return(
            <View style={styles.container}>
                <Text style={styles.text}>Chào bạn, đây là màn hình chính</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Nhập tên"
                    onChangeText={setName}
                    value={name}
                />
                <Button
                    onPress={() => navigation.navigate('Details', { name: name })}
                    title='ĐI TỚI MÀN HÌNH CHI TIẾT'
                />
            </View>
        );
    }
function NotificationsScreen({navigation, route}) {
    const { name } = route.params;

    return(
        <View style={styles.container}>
            <Text style={styles.text}>Chào bạn, {name}</Text>
            <View style={styles.buttonContainer}>
                <Button onPress={() => navigation.goBack()} title='Go back' />
                <Button onPress={() => navigation.reset({ index: 0, routes: [{ name: 'Home' }] })} title="Reset" />
                <Button onPress={() => navigation.pop()} title="Pop" />
                <Button onPress={() => navigation.popToTop()} title="Pop to top" />
            </View>
        </View>
    );
}

const Stack = createDrawerNavigator();
const Lab6_Bai1 = () => {
    return(
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name='Home' component={HomeScreen}/>
            <Stack.Screen name='Details' component={NotificationsScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
    );
}
export default Lab6_Bai1;


import * as React from 'react'
import { Button, Text, TextInput, View} from "react-native";
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

const Drawer = createDrawerNavigator();
const Lab6_Bai2 = () => {
    return(
    <NavigationContainer>
        <Drawer.Navigator initialRouteName='Home'>
            <Drawer.Screen name='Home' component={HomeScreen}/>
            <Drawer.Screen name='Details' component={NotificationsScreen}/>
            <Drawer.Screen name='Article' component={HomeScreen}/>
            <Drawer.Screen name='Chat' component={HomeScreen}/>
            <Drawer.Screen name='Setting' component={HomeScreen}/>
        </Drawer.Navigator>
    </NavigationContainer>
    );
}
export default Lab6_Bai2


import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Favourite from "./Favourite";
import Popular from "./Popular";
import Direct from "./Direct";

const Tab = createMaterialTopTabNavigator();

const Lab7_Bai2 = () =>{
    return(
        <NavigationContainer>
            <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: '#FFFFFF',
                tabBarInactiveTintColor: '#FFFFFF',
                tabBarStyle: {
                  backgroundColor: '#FFA500'
                }
              }}>
                <Tab.Screen name="YÊU THÍCH" component={Favourite} />
                <Tab.Screen name="PHỔ BIẾN" component={Popular} />
                <Tab.Screen name="TRỰC TIẾP" component={Direct} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};
export default Lab7_Bai2;
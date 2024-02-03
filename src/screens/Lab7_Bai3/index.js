import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React from "react";
import { Image, View } from "react-native";
import Home from "./Home";
import Content from "./Content";
import Phone from "./Phone";

const Tab = createBottomTabNavigator();
const Top = createMaterialTopTabNavigator();

const TopTabScreen = () => (
    <Tab.Navigator
        screenOptions={{ 
            tabBarLabelPosition: 'beside-icon' 
            }}>
                <Tab.Screen name="Home" component={Home}
                    options={{
                        tabBarIcon:({focused})=> {
                            return(
                                <View>
                                    <Image
                                        source={require('../../assets/img7/home.png')}
                                        style={{width: 25, height: 25}}
                                    />
                                </View>
                            )
                        }
                    }}
                />
                <Tab.Screen name="Content" component={Content}
                    options={{
                        tabBarIcon:({focused})=> {
                            return( 
                                <View>
                                    <Image
                                        source={require('../../assets/img7/content.png')}
                                     
                                        style={{width: 25, height: 25}}
                                    />
                                </View>
                            )
                        }
                    }}
                />
                <Tab.Screen name="Phone" component={Phone}
                    options={{
                        tabBarIcon:({focused})=> {
                            return(
                                <View>
                                    <Image
                                        source={require('../../assets/img7/phone.jpg')}
                                   
                                        style={{width: 25, height: 25}}
                                    />
                                </View>
                            )
                        }
                    }}
                />
            </Tab.Navigator>
);

const BottomTabScreen = () => (
    <Top.Navigator
    screenOptions={{
        tabBarActiveTintColor: '#FFFFFF',
        tabBarInactiveTintColor: '#FFFFFF',
        tabBarStyle: {
          backgroundColor: '#FFA500'
        }
              }}>
                <Top.Screen name="CHO BẠN" component={TopTabScreen} />
                <Top.Screen name="TRỰC TIẾP" component={TopTabScreen} />
                <Top.Screen name="TRÒ CHƠI" component={TopTabScreen} />
    </Top.Navigator>
);

const Lab7_Bai3 = () => {
    return(
        <NavigationContainer>
            <BottomTabScreen/>
        </NavigationContainer>
    );
};

export default Lab7_Bai3;

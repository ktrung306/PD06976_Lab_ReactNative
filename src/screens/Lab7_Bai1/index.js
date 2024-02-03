import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from "react";
import Home from "./Home";
import Content from "./Content";
import { Image, View } from "react-native";
import Phone from "./Phone";
import Setting from "./Setting";
const Tab = createBottomTabNavigator();
const Lab7_Bai1 = () => {
    return(
        <NavigationContainer>
            <Tab.Navigator>
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
                        tabBarIcon:({forcused})=> {
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
                        tabBarIcon:({forcused})=> {
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
                <Tab.Screen name="Setting" component={Setting}
                    options={{
                        tabBarIcon:({forcused})=> {
                            return(
                                <View>
                                    <Image
                                        source={require('../../assets/img7/setting.png')}
                                    
                                        style={{width: 25, height: 25}}
                                    />
                                </View>
                            )
                        }
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};
export default Lab7_Bai1;
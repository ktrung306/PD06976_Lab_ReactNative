import React, {useState} from 'react';
import {Text, Image, View, Pressable, KeyboardAvoidingView, ScrollView} from 'react-native';
import {styles} from './styles';
import Input from '../../components/Input';
import Seperator from '../../components/Seperator';

const Lab4_Bai3 = () => {

  return (
    <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
    <ScrollView style={styles.container}>
    <View>
      <Text style={styles.title}>Hi Welcome Back!</Text>
      <Text style={styles.context}>Hello again you have been missed!</Text>
      <Image
        style={styles.img}
        source={require('../../assets/img4/nen.png')}
      />
      <Input label="Email" placeholder="example@gmail.com" />
      <Input isPassword label="Password" placeholder="******" />
      <Seperator text="Or login with"></Seperator>
      <Text style={styles.footerText}>
        Don't have an account?
        <Text style={styles.footerLink}>
          Register
        </Text>
      </Text>
    </View>
    </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Lab4_Bai3;
import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, TextStyle, View} from 'react-native';
import { styles } from './styles';
const Bai1_2 = () => {
  // Bai 1
  const colorText = (color) => ({ color });
  const sizeText = (size) => ({ fontSize: size });
  const styleText = (style) => style;
  
  // Bai 2
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  
  return (
    // Bai 2
    <View>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Nhập họ tên"
        style={styles.tipStyle}
      />
      <TextInput
        value={phone}
        onChangeText={setPhone}
        placeholder="Nhập số điện thoại"
        keyboardType="phone-pad"
        style={styles.tipStyle}
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Nhập mật khẩu"
        secureTextEntry={true}
        style={styles.tipStyle}
      />

      {/*bai1*/}
    <View style={styles.container}>
      {/*Line 1*/}
      <Text style={styles.baseText}>
        Em vào đời bằng(' ')
      <Text style ={[styles.boldText, colorText('red')]}>vang đỏ</Text> anh vào
      đời bằng{' '}
      <Text style ={[styles.boldText, colorText('yellow')]}>nước trà</Text>
      </Text>

      {/*Line 2*/}
      <Text style={styles.baseText}>
        Bằng cơn mưa thơm{' '}
        <Text style={[styles.boldText, sizeText(20), styles.italicText]}>
          mùi đất{' '}
        </Text>{' '}
        và{' '}
        <Text style={[sizeText(10), styles.italicText]}>
          bằng hoa dại mọc trước nhà
        </Text>
      </Text>

      {/*Line 3*/}
      <Text 
        style={[
          styles.baseText,
          styles.italicText,
          styles.boldText,
          colorText('gray'),
        ]}>
          Em vào đời bằng kế hoạch anh vào đời bằng mộng mơ
        </Text>

      {/*Line 4*/}
      <Text style={[styles.baseText]}>
        Lý trí em là{' '}
        <Text
          style={styleText({
            textDecorationLine: 'underline',
            letterSpacing: 20,
            fontWeight: 'bold',
          })}>
          {' '}
          công cụ{' '}
          </Text>
          còn trái tim anh là
          <Text
            style={styleText({
              textDecorationLine: 'underline',
              letterSpacing: 20,
              fontWeight: 'bold',
            })}>
            {' '}
            động cơ{' '}
            </Text>
      </Text>

      {/*Line 5*/}
      <Text style={[styles.baseText, styleText({textAlign: 'right'})]}>
        Em vào đời nhiều đồng nghiệp anh vào đời nhiều thân tình
      </Text>

      {/*Line 6*/}
      <Text
        style={[
          styles.baseText,
          styleText({
            textAlign: 'center',
            fontWeight: 'bold',
            color: 'orange',
          }),
        ]}>
          Anh chỉ muốn chân mình đạp đất không muốn đạp ai dưới chân mình 
        </Text>

        {/*Line 7*/}
        <Text
          style={[
            styles.baseText,
            styleText({
              fontWeight: 'bold',
              color: 'black',
            }),
          ]}>
          Em vào đời bằng <Text style={colorText('white')}> mây trắng </Text> em
          vào đời bằng <Text style={colorText('yellow')}> nắng xanh</Text>
          </Text>

        {/*Line 7*/} 
        <Text
          style={[
            styles.baseText,
            styleText({
              fontWeight: 'bold',
              color: 'black',
            }),
          ]}>
          Em vào đời bằng <Text style={colorText('yellow')}> đại lộ </Text> và con
          đường đó giờ <Text style={colorText('white')}> vắng anh</Text>
          </Text>
        </View>
        </View>
      );
    };


export default Bai1_2;

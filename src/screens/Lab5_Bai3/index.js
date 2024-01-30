import React from 'react';
import { Image, ImageBackground, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

function Lab5_Bai3() {
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
      <ImageBackground
        source={require('../../assets/img5/gialai1.jpg')}
        style={styles.Header}>
        <View>
          <Text style={styles.detail}><Text style={styles.boldText}>BIỂN HỒ GIA LAI</Text></Text>
        </View>
      </ImageBackground>

      <View style={styles.body}>
        <View>
          <Text style={styles.text}>
            <Text style={styles.text1}>Gia lai {'\n'}{'\n'}</Text>
            <Text style={styles.text2}>Biển Hồ Pleiku (Biển Hồ T'nưng) trong tiếng Ê Đê
              có nghĩa là biển ở trên núi. Điểm du lịch này nằm phía Tây Bắc của tỉnh Gia Lai,
              cách trung tâm thành phố Pleiku khoảng 7km nếu đi theo đường Quốc lộ 14. Theo
              người dân địa phương kể lại, vùng này từng là nơi sinh sống của một bộ lạc giàu
              có và sung túc. Bỗng một ngày trời hạn hán, người dân... </Text>
          </Text>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>$100/Ngày</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Đặt Ngay</Text>
        </TouchableOpacity>
      </View>

      {/* Thêm icon trái tim */}
      <Image source={require('../../assets/img5/heart_icon1.png')} style={styles.heartIcon} />
    </View>
  );
}

export default Lab5_Bai3;

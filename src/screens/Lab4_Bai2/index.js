import React, { useState } from 'react';
import {
  ScrollView,
  Text,
  StatusBar,
  RefreshControl,
  View,
} from 'react-native';

const Bai2 = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [statusBarColor, setStatusBarColor] = useState('#3498db'); // Màu mặc định của StatusBar

  const onRefresh = () => {
    // Xử lý logic khi người dùng kéo xuống để tải lại
    setRefreshing(true);

    // Thay đổi màu StatusBar sau khi tải lại hoàn tất
    setTimeout(() => {
      setStatusBarColor('#e74c3c'); // Màu mới cho StatusBar
      setRefreshing(false);
    }, 2000); // Giả lập một thời gian tải lại

    // Thêm các bước xử lý tải lại dữ liệu ở đây nếu cần
  };

  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" backgroundColor={statusBarColor} />

      <ScrollView
        style={{ flex: 1 }}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor="#3498db" // Màu của chỉ báo khi đang tải lại
          />
        }>
        {/* Nội dung của ứng dụng */}
        <Text style={{ padding: 20 }}>Nội dung ứng dụng ở đây</Text>
      </ScrollView>
    </View>
  );
};

export default Bai2;

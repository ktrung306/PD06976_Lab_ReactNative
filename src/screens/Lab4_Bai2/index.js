import React, { useState } from 'react';
import { ScrollView, Text, StatusBar, RefreshControl, StyleSheet } from 'react-native';
import { styles } from './styles';

const Bai2 = () => {
  const colors = ['#0000ff', '#00ff00']; // List of colors
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
      // Change StatusBar color after refresh
      setCurrentColorIndex((currentColorIndex + 1) % colors.length);
    }, 2000);
  };

  return (
    <ScrollView
      style={styles.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <StatusBar 
        backgroundColor={colors[currentColorIndex]}
        translucent 
      />

      <Text style={styles.text}>Kéo xuống để đổi màu Statusbar</Text>
    </ScrollView>
  );
};

export default Bai2;

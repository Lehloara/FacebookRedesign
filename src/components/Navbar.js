import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Navbar({ title, titleColor = '#1877f2', showSearch = true, showMessenger = true }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={[styles.title, { color: titleColor }]}>{title}</Text>
        <View style={styles.icons}>
          {showSearch && <TouchableOpacity><Icon name="search" size={24} color="#65676b" /></TouchableOpacity>}
          {showMessenger && <TouchableOpacity><Icon name="chatbubble-ellipses-outline" size={24} color="#65676b" /></TouchableOpacity>}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { backgroundColor: '#fff' },
  container: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 15, paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: '#e4e6eb' },
  title: { fontSize: 28, fontWeight: 'bold' },
  icons: { flexDirection: 'row', gap: 20 },
});
import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Avatar({ source, size = 40, name, showOnline = false, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} disabled={!onPress}>
      <View style={styles.container}>
        <Image source={source} style={[styles.avatar, { width: size, height: size, borderRadius: size / 2 }]} />
        {showOnline && <View style={styles.onlineDot} />}
        {name && <Text style={styles.name}>{name}</Text>}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: 'center', position: 'relative' },
  avatar: { backgroundColor: '#f0f2f5' },
  onlineDot: { position: 'absolute', bottom: 2, right: 2, width: 12, height: 12, borderRadius: 6, backgroundColor: '#45bd62', borderWidth: 2, borderColor: '#fff' },
  name: { fontSize: 12, color: '#050505', marginTop: 4 },
});
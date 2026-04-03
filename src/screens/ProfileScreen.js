import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';  // ← CHANGED THIS
import Avatar from '../components/Avatar';

const coverPhoto = require('../../assets/images/cover.jpg');
const userAvatar = require('../../assets/images/mothae.jpg');

export default function ProfileScreen() {
  const user = { 
    name: 'Mothae Lehloara', 
    username: '@Lehloara jr', 
    bio: 'Soccer player', 
    followers: '1.2K', 
    following: '345', 
    posts: '89', 
    avatar: userAvatar,
    coverPhoto: coverPhoto
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <TouchableOpacity>
            <Ionicons name="arrow-back" size={24} color="#fff" />  {/* ← CHANGED */}
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="settings-outline" size={24} color="#fff" />  {/* ← CHANGED */}
          </TouchableOpacity>
        </View>
        <Image source={user.coverPhoto} style={styles.coverPhoto} />
        <View style={styles.profileInfo}>
          <Avatar source={user.avatar} size={100} showOnline={true} />
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.username}>{user.username}</Text>
          <Text style={styles.bio}>{user.bio}</Text>
          <View style={styles.stats}>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>{user.posts}</Text>
              <Text style={styles.statLabel}>Posts</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>{user.followers}</Text>
              <Text style={styles.statLabel}>Followers</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>{user.following}</Text>
              <Text style={styles.statLabel}>Following</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editButtonText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f0f2f5' },
  header: { position: 'absolute', top: 0, left: 0, right: 0, flexDirection: 'row', justifyContent: 'space-between', padding: 15, zIndex: 1 },
  coverPhoto: { width: '100%', height: 200 },
  profileInfo: { alignItems: 'center', backgroundColor: '#fff', marginTop: -40, borderTopLeftRadius: 20, borderTopRightRadius: 20, paddingTop: 20, paddingBottom: 20 },
  name: { fontSize: 24, fontWeight: 'bold', marginTop: 10 },
  username: { fontSize: 14, color: '#65676b', marginTop: 4 },
  bio: { fontSize: 14, textAlign: 'center', paddingHorizontal: 20, marginTop: 8 },
  stats: { flexDirection: 'row', justifyContent: 'space-around', width: '100%', marginTop: 20, paddingVertical: 15, borderTopWidth: 1, borderBottomWidth: 1, borderColor: '#e4e6eb' },
  statItem: { alignItems: 'center' },
  statNumber: { fontSize: 18, fontWeight: 'bold' },
  statLabel: { fontSize: 14, color: '#65676b', marginTop: 4 },
  editButton: { backgroundColor: '#1877f2', paddingHorizontal: 30, paddingVertical: 10, borderRadius: 8, marginTop: 15 },
  editButtonText: { color: '#fff', fontWeight: 'bold' },
});
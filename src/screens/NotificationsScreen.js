import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons'; 

export default function NotificationsScreen() {
  const notifications = [
    { id: '1', type: 'like', user: 'Mahooe Lehloara', avatar: require('../../assets/images/mahooe.jpg'), content: 'liked your post', time: '5 minutes ago', read: false },
    { id: '2', type: 'comment', user: 'Vincent Lehloara', avatar: require('../../assets/images/vincent.jpg'), content: 'commented: "Great job!"', time: '1 hour ago', read: false },
    { id: '3', type: 'friend', user: 'Dushane Vin', avatar: require('../../assets/images/dushane.jpg'), content: 'accepted your friend request', time: '2 hours ago', read: true },
  ];

  const getIcon = (type) => {
    if (type === 'like') return <Ionicons name="thumbs-up" size={24} color="#1877f2" />;
    if (type === 'comment') return <Ionicons name="chatbubble" size={24} color="#45bd62" />;
    if (type === 'friend') return <Ionicons name="person-add" size={24} color="#e42645" />;
    return <Ionicons name="notifications" size={24} color="#65676b" />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Notifications</Text>
      </View>
      <FlatList 
        data={notifications} 
        keyExtractor={item => item.id} 
        renderItem={({ item }) => (
          <TouchableOpacity style={[styles.item, !item.read && styles.unread]}>
            <View style={styles.iconContainer}>{getIcon(item.type)}</View>
            <Image source={item.avatar} style={styles.avatar} />
            <View style={styles.content}>
              <Text>
                <Text style={styles.username}>{item.user}</Text> {item.content}
              </Text>
              <Text style={styles.time}>{item.time}</Text>
            </View>
          </TouchableOpacity>
        )} 
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f0f2f5' },
  header: { padding: 15, backgroundColor: '#fff', borderBottomWidth: 1, borderBottomColor: '#e4e6eb' },
  title: { fontSize: 24, fontWeight: 'bold' },
  item: { flexDirection: 'row', alignItems: 'center', padding: 15, backgroundColor: '#fff', borderBottomWidth: 1, borderBottomColor: '#e4e6eb' },
  unread: { backgroundColor: '#e7f3ff' },
  iconContainer: { marginRight: 12 },
  avatar: { width: 40, height: 40, borderRadius: 20, marginRight: 12 },
  content: { flex: 1 },
  username: { fontWeight: 'bold' },
  time: { fontSize: 12, color: '#65676b', marginTop: 4 },
});
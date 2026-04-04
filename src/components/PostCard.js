import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';  
import Avatar from './Avatar';

export default function PostCard({ post, onLike }) {
  const [isLiked, setIsLiked] = useState(post.isLiked);
  const [likesCount, setLikesCount] = useState(post.likes);

  const handleLikePress = () => {
    onLike(post.id);
    setIsLiked(!isLiked);
    setLikesCount(isLiked ? likesCount - 1 : likesCount + 1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Avatar source={post.userAvatar} size={40} showOnline={post.isOnline} />
        <View style={styles.userInfo}>
          <Text style={styles.username}>{post.username}</Text>
          <Text style={styles.timestamp}>{post.timestamp}</Text>
        </View>
        <TouchableOpacity>
          <Ionicons name="ellipsis-horizontal" size={20} color="#65676b" />
        </TouchableOpacity>
      </View>
      
      <Text style={styles.content}>{post.content}</Text>
      {post.image && <Image source={post.image} style={styles.postImage} />}
      
      <View style={styles.actions}>
        <TouchableOpacity style={styles.actionButton} onPress={handleLikePress}>
          <Ionicons 
            name={isLiked ? 'thumbs-up' : 'thumbs-up-outline'} 
            size={22} 
            color={isLiked ? '#1877f2' : '#65676b'} 
          />
          <Text style={[styles.actionText, isLiked && styles.likedText]}>
            {likesCount} Likes
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="chatbubble-outline" size={22} color="#65676b" />
          <Text style={styles.actionText}>{post.comments} Comments</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="share-outline" size={22} color="#65676b" />
          <Text style={styles.actionText}>{post.shares} Shares</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: '#fff', marginBottom: 10, padding: 15, borderRadius: 12, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, elevation: 3 },
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 12 },
  userInfo: { flex: 1, marginLeft: 12 },
  username: { fontWeight: 'bold', fontSize: 16, color: '#050505' },
  timestamp: { fontSize: 12, color: '#65676b', marginTop: 2 },
  content: { fontSize: 15, color: '#050505', marginBottom: 12 },
  postImage: { width: '100%', height: 300, borderRadius: 12, marginBottom: 12 },
  actions: { flexDirection: 'row', justifyContent: 'space-around', borderTopWidth: 1, borderTopColor: '#e4e6eb', paddingTop: 12 },
  actionButton: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  actionText: { fontSize: 14, color: '#65676b' },
  likedText: { color: '#1877f2' },
});

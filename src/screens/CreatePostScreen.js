import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';  // ← CHANGE HERE

export default function CreatePostScreen({ navigation }) {
  const [postContent, setPostContent] = useState('');

  const handlePost = () => {
    if (postContent.trim()) {
      Alert.alert('Success', 'Post shared!');
      setPostContent('');
      navigation.navigate('Home');
    } else {
      Alert.alert('Error', 'Write something to post');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.cancel}>Cancel</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Create Post</Text>
        <TouchableOpacity onPress={handlePost}>
          <Text style={[styles.post, !postContent.trim() && styles.disabled]}>Post</Text>
        </TouchableOpacity>
      </View>
      
      <TextInput 
        style={styles.input} 
        placeholder="What's on your mind?" 
        multiline 
        value={postContent} 
        onChangeText={setPostContent} 
      />
      
      <View style={styles.mediaActions}>
        <Text style={styles.addText}>Add to your post</Text>
        <View style={styles.icons}>
          <TouchableOpacity><Ionicons name="image-outline" size={30} color="#45bd62" /></TouchableOpacity>
          <TouchableOpacity><Ionicons name="videocam-outline" size={30} color="#e42645" /></TouchableOpacity>
          <TouchableOpacity><Ionicons name="happy-outline" size={30} color="#f5b33d" /></TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 15, borderBottomWidth: 1, borderBottomColor: '#e4e6eb' },
  cancel: { fontSize: 16, color: '#1877f2' },
  title: { fontSize: 18, fontWeight: 'bold' },
  post: { fontSize: 16, fontWeight: 'bold', color: '#1877f2' },
  disabled: { opacity: 0.5 },
  input: { fontSize: 18, padding: 15, minHeight: 100, textAlignVertical: 'top' },
  mediaActions: { position: 'absolute', bottom: 0, left: 0, right: 0, borderTopWidth: 1, borderTopColor: '#e4e6eb', padding: 15 },
  addText: { fontSize: 16, color: '#65676b', marginBottom: 12 },
  icons: { flexDirection: 'row', gap: 20 },
});
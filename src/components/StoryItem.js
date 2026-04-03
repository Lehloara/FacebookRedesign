import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function StoryItem({ story, isAddStory = false }) {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={[styles.storyRing, isAddStory && styles.addStoryRing]}>
        {isAddStory ? (
          <View style={styles.addButton}><Text style={styles.addIcon}>+</Text></View>
        ) : (
          <Image source={story.image} style={styles.storyImage} />
        )}
      </View>
      <Text style={styles.storyName}>{story.name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: 'center', marginRight: 12 },
  storyRing: { width: 70, height: 70, borderRadius: 35, borderWidth: 2, borderColor: '#1877f2', justifyContent: 'center', alignItems: 'center', marginBottom: 4 },
  addStoryRing: { borderColor: '#ddd' },
  storyImage: { width: 66, height: 66, borderRadius: 33 },
  addButton: { width: 66, height: 66, borderRadius: 33, backgroundColor: '#f0f2f5', justifyContent: 'center', alignItems: 'center' },
  addIcon: { fontSize: 30, color: '#1877f2' },
  storyName: { fontSize: 11, color: '#050505' },
});
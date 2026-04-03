import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Navbar from '../components/Navbar';
import PostCard from '../components/PostCard';
import StoryItem from '../components/StoryItem';

const mothaeAvatar = require('../../assets/images/mothae.jpg');
const mahooeAvatar = require('../../assets/images/mahooe.jpg');
const vincentAvatar = require('../../assets/images/vincent.jpg');
const dushaneAvatar = require('../../assets/images/dushane.jpg');
const postImage1 = require('../../assets/images/post1.jpg');
const postImage2 = require('../../assets/images/post2.jpg');
const postImage3 = require('../../assets/images/post3.jpg');

export default function HomeScreen() {

  const stories = [
    { id: '1', name: 'Your Story', image: require('../../assets/images/mothae.jpg'), isAdd: true },
    { id: '2', name: 'Mahooe Lehloara', image: mahooeAvatar },
    { id: '3', name: 'Vincent Lehloara', image: vincentAvatar },
    { id: '4', name: 'Dushane Vin', image: dushaneAvatar },
  ];

  
  const [posts, setPosts] = useState([
    { 
      id: '1', 
      username: 'Mothae Lehloara', 
      userAvatar: mothaeAvatar,
      timestamp: '2 hours ago', 
      content: 'Having a great day! just after the game', 
      image: postImage1,
      likes: 124, 
      comments: 18, 
      shares: 5, 
      isLiked: false, 
      isOnline: true 
    },
    { 
      id: '2', 
      username: 'Mahooe Lehloara', 
      userAvatar: mahooeAvatar,
      timestamp: '5 hours ago', 
      content: 'Proud of you reds! Keep up the good work! 👏', 
      image: postImage2,
      likes: 342, 
      comments: 45, 
      shares: 12, 
      isLiked: false, 
      isOnline: false 
    },
    { 
      id: '3', 
      username: 'Vincent Lehloara', 
      userAvatar: vincentAvatar,
      timestamp: 'Yesterday', 
      content: 'Check out this amazing view of the dam! 😍', 
      image: postImage3,
      likes: 89, 
      comments: 23, 
      shares: 8, 
      isLiked: false, 
      isOnline: true 
    },
    { 
      id: '4', 
      username: 'Dushane Vin', 
      userAvatar: dushaneAvatar,
      timestamp: '2 days ago', 
      content: 'just wanna go for jog before kea Bambatha today', 
      image: null,  
      likes: 56, 
      comments: 12, 
      shares: 3, 
      isLiked: false, 
      isOnline: false 
    },
  ]);

  const handleLike = (postId) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { ...post, isLiked: !post.isLiked, likes: post.isLiked ? post.likes - 1 : post.likes + 1 } 
        : post
    ));
  };

  const StoriesSection = () => (
    <View style={styles.storiesContainer}>
      <FlatList 
        horizontal 
        showsHorizontalScrollIndicator={false} 
        data={stories} 
        keyExtractor={item => item.id} 
        renderItem={({ item }) => <StoryItem story={item} isAddStory={item.isAdd || false} />} 
      />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList 
        data={posts} 
        keyExtractor={item => item.id} 
        renderItem={({ item }) => <PostCard post={item} onLike={handleLike} />} 
        ListHeaderComponent={<><Navbar title="facebook" /><StoriesSection /></>} 
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f0f2f5' },
  storiesContainer: { backgroundColor: '#fff', paddingVertical: 15, paddingLeft: 15, marginBottom: 10 },
});
import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

export default function SearchScreen() {
  const [searchText, setSearchText] = useState('');
  
  const recentSearches = [
    { id: '1', name: 'Mahooe Lehloara', avatar: require('../../assets/images/mahooe.jpg') },
    { id: '2', name: 'Vincent Lehloara', avatar: require('../../assets/images/vincent.jpg') },
    { id: '3', name: 'Dushane Vin', avatar: require('../../assets/images/dushane.jpg') },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchBar}>
        <Icon name="search" size={20} color="#65676b" />
        <TextInput 
          style={styles.input} 
          placeholder="Search Facebook" 
          value={searchText} 
          onChangeText={setSearchText} 
        />
      </View>
      <FlatList 
        data={recentSearches} 
        keyExtractor={item => item.id} 
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.recentItem}>
            <Image source={item.avatar} style={styles.avatar} />
            <Text style={styles.name}>{item.name}</Text>
          </TouchableOpacity>
        )} 
        ListHeaderComponent={<Text style={styles.sectionTitle}>Recent Searches</Text>} 
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f0f2f5' },
  searchBar: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#f0f2f5', margin: 15, paddingHorizontal: 15, borderRadius: 20, height: 40 },
  input: { flex: 1, marginLeft: 10, fontSize: 16 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', paddingHorizontal: 15, paddingTop: 10 },
  recentItem: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 15, paddingVertical: 12, backgroundColor: '#fff' },
  avatar: { width: 40, height: 40, borderRadius: 20, marginRight: 12 },
  name: { fontSize: 16 },
});
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('./assets/image/profile.png')} style={styles.profilePicture} />
        <Text style={styles.text}>Hello, Devs</Text>
        <Text style={styles.subTitle}>14 tasks today</Text>
      </View>
      
      <View style={styles.searchBar}>
        <View style={styles.searchContainer}>
          <Image source={require('./assets/image/searchIcon.png')} style={styles.searchIcon} />
          <TextInput style={styles.searchInput} placeholder="Search" placeholderTextColor="#999" />
        </View>
        <View style={styles.pictureButton}>
          <Image source={require('./assets/image/pictureNav.png')} style={styles.pictureNav} />
        </View>
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.searchText}></Text>
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F0E8',
  },
  header: {
    top: 52,
  },
  subTitle: {
    left: 20,
    fontSize: 12,
  },
  text: {
    fontSize: 32,
    color: 'black',
    position: 'absolute',
    left: 20,
  },
  searchBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 134,
    height: 48,
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#FBF9F7',
    borderRadius: 14,
    paddingHorizontal: 16,
    alignItems: 'center',
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 20,
    color: '#333',
    paddingVertical: 10,
  },
  searchIcon: {
    width: 20,
    height: 16,
    marginRight: 10,
  },
  profilePicture: {
    width: 46,
    height: 45,
    left: '80%',
    borderRadius: 20,
    backgroundColor: '#fff',
  },
  /*
  textContainer: {
    position: 'absolute',
    left: 20,
    top: 184,
  },
  */
  searchText: {
    fontSize: 14,
    color: '#999',
  },
  pictureButton: {
    justifyContent: 'center',
    alignItems: 'center',
   
  },
  pictureNav: {
    width: 50,
    height: 48,
    borderRadius: 24,
  },
});

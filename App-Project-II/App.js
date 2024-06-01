 import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, ScrollView  } from 'react-native';

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
      <Text style={styles.Textcat}>Categories</Text>

      
      <View style={styles.scrollList}>
        <ScrollView horizontal style={styles.categoryScrollBox} showsHorizontalScrollIndicator={false}>
          <View style={styles.cat}>
            <Text style={styles.subtxt}>Exercise</Text>
            <Text style={styles.tsmall}>12 Tasks</Text>
            <Image
              style={styles.imageBox} 
              source={require("./assets/image/exercise.png")}
            />
          </View>

          <View style={styles.cat}>
            <Text style={styles.subtxt}>Study</Text>
            <Text style={styles.tsmall}>12 Tasks</Text>
            <Image
              style={styles.imageBox} 
              source={require("./assets/image/study.png")}
            />
          </View>

          <View style={styles.cat}>
            <Text style={styles.subtxt}>Shopping</Text>
            <Text style={styles.tsmall}>3 hours</Text>
            <Image
              style={styles.imageBox} 
              source={require("./assets/image/exercise.png")}
            /> 
          </View>
        </ScrollView>
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
  Textcat: {
    fontSize: 20,
    top: 45,
    left: 20,
    fontWeight: "bold"
  },
  scrollList: {
    left: 10,
    top: 60,
    flexDirection: "row",
    gap: 20,
  },
  cat: {
    backgroundColor: "#FBF9F7",
    width: 186,
    height: 200,
    borderRadius: 20,
    paddingLeft: 10,
    marginHorizontal: 10,
  },
  tsmall: {
    fontSize: 12,
    fontWeight: "450",
    marginTop: 5,
  },
  subtxt: {
    fontSize: 16,
    fontWeight: "bold", 
    marginTop: 10,
  },
  imageBox:{
    width: 145,
    height: 150,
    borderRadius: 15,
    top: 10
  },
});

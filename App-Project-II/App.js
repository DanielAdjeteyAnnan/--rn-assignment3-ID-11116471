import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView>
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
              <Image style={styles.imageBox} source={require("./assets/image/exercise.png")} />
            </View>

            <View style={styles.cat}>
              <Text style={styles.subtxt}>Study</Text>
              <Text style={styles.tsmall}>12 Tasks</Text>
              <Image style={styles.imageBox} source={require("./assets/image/study.png")} />
            </View>

            <View style={styles.cat}>
              <Text style={styles.subtxt}>Shopping</Text>
              <Text style={styles.tsmall}>3 hours</Text>
              <Image style={styles.imageBox} source={require("./assets/image/exercise.png")} />
            </View>
          </ScrollView>
        </View>

        <Text style={styles.onTask}>Ongoing Task</Text>
        
        <View style={styles.scrollUpList}>
          <View style={styles.ongoing}><Text style={styles.task}>Algorithms and Data Structures</Text></View>
          <View style={styles.ongoing}><Text style={styles.task}>Operating Systems</Text></View>
          <View style={styles.ongoing}><Text style={styles.task}>Computer Networks</Text></View>
          <View style={styles.ongoing}><Text style={styles.task}>Database Systems</Text></View>
          <View style={styles.ongoing}><Text style={styles.task}>Software Engineering</Text></View>
          <View style={styles.ongoing}><Text style={styles.task}>Artificial Intelligence</Text></View>
          <View style={styles.ongoing}><Text style={styles.task}>Machine Learning</Text></View>
          <View style={styles.ongoing}><Text style={styles.task}>Cybersecurity</Text></View>
          <View style={styles.ongoing}><Text style={styles.task}>Web Development</Text></View>
          <View style={styles.ongoing}><Text style={styles.task}>Mobile App Development</Text></View>
          <View style={styles.ongoing}><Text style={styles.task}>Cloud Computing</Text></View>
          <View style={styles.ongoing}><Text style={styles.task}>Big Data Analytics</Text></View>
          <View style={styles.ongoing}><Text style={styles.task}>Human-Computer Interaction</Text></View>
          <View style={styles.ongoing}><Text style={styles.task}>Quantum Computing</Text></View>
          <View style={styles.ongoing}><Text style={styles.task}>Robotics</Text></View>
          
        </View>
        

        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F0E8',
    paddingBottom: 100,
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
    marginTop: 110,
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
  },
  subtxt: {
    fontSize: 16,
    fontWeight: "bold", 
    marginTop: 10,
  },
  imageBox: {
    width: 145,
    height: 150,
    borderRadius: 15,
    top: 10,
  },
  onTask: {
    fontSize: 20,
    top: 100,
    left: 20,
    fontWeight: "bold",
  },
  scrollUpList: {
    width: 415,
    top: 110,
    padding: 15,
    gap: 10,
  },
  ongoing: {
    width: 375,
    height: 140,
    backgroundColor: "#fff",
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#E8D1BA",
    padding: 10,
    justifyContent: "center",
  },
  task: {
    fontSize: 22,
    fontWeight: "bold",
  }
});

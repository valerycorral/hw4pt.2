import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Button, Modal,Pressable,TextInput,FlatList,Alert } from 'react-native';
import {Card, FAB} from 'react-native-paper'
import axios from "axios";
import {useState, useEffect}  from 'react';


function Song(props){
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true)

  const clickedItem =  (data) =>{
    props.navigation.navigate("Details",{data:data})
  }

  const renderData = (item) => {
    return(
    <Card style = {styles.cardStyle} onPress = {()=> clickedItem(item)}>
      <Text>{item.song}</Text>
      <Text>{item.artist}</Text>
    </Card>
  )
  }

  const [modalVisible, setModalVisible] = useState(false);


  const loadData = () => {
    fetch('http://127.0.0.1:8000/api/Artists/', {
      method:"GET"
    })

    .then(resp => resp.json())
    .then(data =>{
      setData(data)
      setLoading(false)
    })
    .catch(error => Alert.alert('Error',error))
  }

  useEffect(()=> {
    loadData()
  },[])


  return(
    <View style={styles.container}>

      <FlatList
        data = {data}
        renderItem = {({item})=> {
          return renderData(item)
        }}
        onRefresh = {() => loadData()}
        refreshing = {loading}
        keyExtractor ={item => `${item.id}`}
      />

      <FAB style = {styles.fab}
        small = {false}
        icon = "plus"

        onPress = {() => props.navigation.navigate("Create")}
      />

    </View>

  )
 }

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
cardStyle:{
  padding:10,
  margin:10
},
fab:{
  position:'absolute',
  margin:16,
  right:0,
  bottom:0
},

});


export default Song

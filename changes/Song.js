import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Button, Modal,Pressable,TextInput,FlatList,Alert } from 'react-native';
import {Card, FAB} from 'react-native-paper'
import axios from "axios";
import {useState, useEffect}  from 'react';


function Song(props){
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('');


  const clickedItem =  (data) =>{
    props.navigation.navigate("Details",{data:data})
  }


  // const renderData = (item) => {
  //   return(
  //   <Card style = {styles.cardStyle} onPress = {()=> clickedItem(item)}>
  //     <Text>{item.song}</Text>
  //     <Text>{item.artist}</Text>
  //   </Card>
  // )
  // }

  const [modalVisible, setModalVisible] = useState(false);

const fetchPosts = ()=>{
  const apiURL = 'http://127.0.0.1:8000/api/Artists/'
  fetch(apiURL)
  .then((response) => response.json())
  .then((responseJson)=>{
    setFilterData(responseJson);
    setData(responseJson);
    setLoading(false);
  }).catch((error) => {
    console.log(error);
  })
}
  // const loadData = () => {
  //   fetch('http://127.0.0.1:8000/api/Artists/', {
  //     method:"GET"
  //   })
  //
  //   .then(resp => resp.json())
  //   .then(data =>{
  //     setData(data)
  //     setFilterData(data)
  //     setLoading(false)
  //   })
  //   .catch(error => Alert.alert('Error',error))
  // }

  useEffect(()=> {
    fetchPosts()
  },[])
const serachNameInput = (input)=>{
  let data = data
  let searchData = data.filter((item)=>{
    return item.artist.toLowerCase().includes(input.toLowerCase())
  });
  setData(searchData)
}

const ItemView= ({item}) => {
  return (
    <Card style = {styles.cardStyle} onPress = {()=> clickedItem(item)}>
    <Text>
      {item.song}{', '}{item.artist.toUpperCase()}
    </Text>
    </Card>
  )
}
const serachFilter =(text) =>{
  if (text){
    const newData = data.filter((item) => {
      const itemData = item.artist ?
                      item.artist.toUpperCase()
                      : ''.toUpperCase()

      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    setFilterData(newData);
    setSearch(text);
  }else{
    setFilterData(data);
    setSearch(text);
  }
}
const ItemSeperatorView = ()=>{
  return(
    <View style = {{height:0.5, width:'100%'}}></View>
  )
}


  return(

    <View style={styles.container}>
    <TextInput style={styles.search}
      value={search}
      placeholder = 'Search by artist'
      onChangeText = {(text)=>{
          serachFilter(text)
      }}
    />
      <FlatList
        data = {filterData}
        keyExtractor ={(item, index) => index.toString()}
        ItemSeperatorComponent = {ItemSeperatorView}
        renderItem = {ItemView}
        onRefresh = {() => fetchPosts()}
        refreshing = {loading}

      />

      <FAB style = {styles.fab}
        small = {false}
        icon = "plus"

        onPress = {() => props.navigation.navigate("Create")}
      />

    </View>

  );
};

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
search:{
  padding:10,
  margin:10
},
});


export default Song

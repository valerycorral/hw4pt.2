import React from 'react'
import { StyleSheet, Text, View, ScrollView,Alert } from 'react-native';
import {Button} from 'react-native-paper'

function SongDeets(props){

  const data = props.route.params.data;


  const deletedData = (data) => {
    fetch(`http://127.0.0.1:8000/api/Artists/${data.id}/`,{
      method:'DELETE',
      headers:{
        'Content-Type':'application/json'
      }
    })

    .then(data =>{
      props.navigation.navigate("Song")

    })
    .catch(error => Alert.alert("Error",error))
  }
  return(
    <ScrollView>
    <View style = {styles.deets}>
      <Text style = {{fontSize:25}}>
        {data.song}

      </Text>
      <Text style = {{fontSize:20}}>
        {data.artist}

      </Text>
      <View style = {styles.btnStyle}>
          <Button
            icon = "update"
            mode = "contained"
            onPress= {()=> props.navigation.navigate("Edit", {data:data})}

          > Edit </Button>
          <Button
            icon = "delete"
            mode = "contained"
            onPress= {()=> deletedData(data)}

          > Delete </Button>

          <Button
            icon = "star"
            mode = "contained"
            onPress= {()=> props.navigation.navigate("Rate", {data:data})}

          > Rate </Button>
      </View>
    </View>
</ScrollView>
  )
}

const styles = StyleSheet.create({
deets:{
  padding:10,
  margin:10
},
btnStyle:{
  marginTop:30,
  flexDirection:'row',
  justifyContent: 'space-around'
}
});
export default SongDeets

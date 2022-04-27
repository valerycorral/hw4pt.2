import React,{useState} from 'react'
import { StyleSheet, Text, View, Alert} from 'react-native';
import{TextInput,Button} from 'react-native-paper'

function Edit(props){

  const data = props.route.params.data;

  const [song,setSong] = useState(data.song);
  const [artist, setArtist] = useState(data.artist);

  const updateData =()=>{
    fetch(`http://127.0.0.1:8000/api/Artists/${data.id}/`,{
      method:'PUT',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({song:song, artist:artist})
    })
    .then(resp => resp.json())
    .then(data =>{
      props.navigation.navigate("Song",{data:data})
    })
    .catch(error => Alert.alert("Error",error))
  }
  return(
    <View>
      <TextInput style = {styles.inputStyle}
        label = "Song"
        value = {song}
        mode ='outlined'
        onChangeText = {text => setSong(text)}
      />

      <TextInput style = {styles.inputStyle}
        label = "Artist"
        value = {artist}
        mode ='outlined'
        onChangeText = {text => setArtist(text)}
      />

      <Button style = {{margin:80}}
        icon = 'update'
        mode = 'contained'
        onPress= {()=> updateData()}
      >
      Update Song
      </Button>
    </View>
  )

}
const styles = StyleSheet.create({
inputStyle:{
  padding:10,
  marginTop:30,
  margin:10
},

});
export default Edit

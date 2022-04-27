import React, {useState} from 'react'
import { StyleSheet,Keyboard, Text, View, KeyboardAvoidingView,TouchableOpacity,Alert } from 'react-native';
import{TextInput,Button} from 'react-native-paper'

function Create(props){

  const [song,setSong] = useState('');
  const [artist, setArtist] = useState('');

const addData = () =>{
  fetch(`http://127.0.0.1:8000/api/Artists/`,{
    method:'POST',
    headers:{
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({song:song,artist:artist})
  })
  .then(resp => resp.json())
  .then(data =>{
    props.navigation.navigate("Song")
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
          icon = 'pencil'
          mode = 'contained'
          onPress= {()=> addData()}
        >
        Add Song
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

export default Create

<<<<<<< HEAD
//install react native paper (npm install react-native-paper), navigation (npm install @react-navigation/native and expo install react-native-screens react-native-safe-area-context) ;
=======
//install react native paper (npm install react-native-paper), navigation (npm install @react-navigation/native and expo install react-native-screens react-native-safe-area-context)
>>>>>>> 487424d92353084b1e513714c68c3134b82f197a
//install stack navigator(npm install @react-navigation/stack)
//install npm install react-native-gesture-handler

import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Keyboard, Text, View, KeyboardAvoidingView,TextInput,TouchableOpacity } from 'react-native';
import React, {useState} from 'react';
import Song from './components/Song';
import Rate from './components/Rate';
import Create from './components/Create';
import Edit from './components/Edit';
import Contants from 'expo-constants';
import SongDeets from './components/SongDeets';


import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


const Stack = createStackNavigator()

const myStyles = {
  song: 'Song List',
  headerTintColor:'white',
  headerStyle:{
    backgroundColor:'black'
  }
}
 function App() {
  // const[task, setTask] = useState();
  // const [taskItems,setTaskItems] = useState([]);
  // const handleAddTask = () => {
  //  Keyboard.dismiss();
  //  setTaskItems([...taskItems, task])
  //  setTask(null);
  // }
  // const completeTask=(index)=>{
  //   let itemsCopy = [...taskItems];
  //   itemsCopy.splice(index,1);
  //   setTaskItems(itemsCopy);
  // }

  return (
    <View style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen name = 'Add a Song and Artist to Rate!' component = {Song}
          options = {myStyles}
        />
        <Stack.Screen name = 'Create' component = {Create}
          options = {myStyles}
        />
        <Stack.Screen name = "Details" component = {SongDeets}
          options = {{...myStyles, title:'Details'}}
        />
        <Stack.Screen name = "Edit" component = {Edit}
          options = {{...myStyles, title:'Edit'}}
        />
      </Stack.Navigator>
    </View>

  // <Create />
    // <View style={styles.container}>
    //   <View style={styles.taskWrapper}>
    //     <Text style={styles.sectionTitle}>Todays Tasks</Text>
    //     <View style={styles.items}>
    //       {
    //         taskItems.map((item, index) => {
    //           return (
    //             <TouchableOpacity key={index} onPress={()=> completeTask(index)}>
    //               <Task text = {item}/>
    //             </TouchableOpacity>
    //           )
    //
    //         })
    //       }
    //     </View>
    //   </View>
    //
    //
    //
    //   <KeyboardAvoidingView
    //     behavior = {Platform.OS === "ios" ? "padding": "height"}
    //     style={styles.writeTaskWrapper}>
    //
    //    <TextInput style={styles.input} placeholder={'write a task'} value ={task} onChangeText={text=>setTask(text)}/>
    //
    //    <TouchableOpacity onPress={() => handleAddTask()}>
    //       <View style={styles.addWrapper}>
    //       <Text style={styles.addText}>+</Text>
    //       </View>
    //    </TouchableOpacity>
    //   </KeyboardAvoidingView>
    // </View>
  );
}
export default() => {
  return (
    <NavigationContainer>
       <App/>
    </NavigationContainer>

  )

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1E3D3',
    marginTop:Contants.statusBarHeight,
    //alignItems: "center",
    //justifyContent: "center",

  },
// textStyle :{
//   fontSize:25,
//   color:'red'
// }
//   taskWrapper:{
//    paddingTop:80,
//    paddingHorizontal:20,
//
//   },
//   sectionTitle:{
//     fontSize:24,
//     fontWeight:"bold",
//   },
//   items:{
//     marginTop:30,
//   },
//
//   writeTaskWrapper:{
//     position:'absolute',
//     bottom:60,
//     width:'100%',
//     flexDirection:'row',
//     justifyContent:'space-around',
//     alignItems:'center',
//
//   },
//   input:{
//   paddingVertical:15,
//   paddingHorizontal:15,
//   backgroundColor:'#fff',
//   borderRadius:60,
//   borderColor:'#D88C9A',
//   borderWidth:1,
//   width:250,
//
// },
//   addWrapper:{
//     width:60,
//     height:60,
//     backgroundColor:'#fff',
//     borderRadius:60,
//     justifyContent:'center',
//     alignItems: 'center',
//     borderColor:'#D88C9A',
//     borderWidth:1,
//
//
//   },
//   addText:{},

});

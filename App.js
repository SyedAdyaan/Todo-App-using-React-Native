import { StatusBar } from 'expo-status-bar';
import React , {useState} from 'react';
import { StyleSheet, Text, View,ImageBackground,FlatList,Image ,TextInput, TouchableOpacity,SafeAreaView} from 'react-native';
import Navigation from './src/config/navigation';
import AddTodo from './src/screens/AddTodo';
import TodoItem from './src/screens/todoitem';



// const DATA = [
//   {
//     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//     title: 'First Item',
//   },
//   {
//     id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//     title: 'Second Item',
//   },
//   {
//     id: '58694a0f-3da1-471f-bd96-145571e29d72',
//     title: 'Third Item',
//   },
// ];

export default function App() {

  const [todos,settodos]=useState([
    {todo :'BreakFast' ,key: Math.random()},
    {todo : "Go jogging",key: Math.random()}
  ])

// const [name,setName]=useState("Syed Adyaan")
// const [email,setEmail]=useState("adyaanakhtar@gmail.com")

// const [name,setname]=useState("adyaan")
// const [arr,setarr]=useState(['car'])
// const handleclick = () =>{
//   setarr([...arr,' bike',' truck'])
 
// }

// const handleclickname = () =>{
//   setname("Adyaan")
 
// }

const submithandler=(todo) =>{

  settodos((prevTodos)=>{
    return[
      {todo :todo , key: Math.random().toString() },
      ...prevTodos
    ]
  })
}


  return (
    

    <View style={styles.container}>
      <View style={styles.main1}>

    <Text style={styles.t1}>Todo Application !</Text>
      </View>
      
      <View style={styles.main2}>
      
      <View>
        <AddTodo submithandler={submithandler}/>
        <View style={styles.todolist}>
        <FlatList 
        data={todos}

          renderItem={({item})=>(
            <TodoItem item={item} />
          )}
        />
        </View>
          
      </View>

      {/* <ImageBackground source={{uri:'https://reactjs.org/logo-og.png'}}> */}
      <View style={styles.boxes}>        
        
        
        </View>

      

        {/* </ImageBackground> */}
      </View>
      

      <View style={styles.main3}>
    <Text style={styles.t2}>© Copyright 2015 Software. </Text>
    
      </View>

    </View>

  )

}
    // <View style={styles.container}>

      
    //   <View style={styles.main1}>
    //   <Text style={styles.text}>Header </Text>
    //   </View>
    //   <View style={styles.main2}>
        // {/* <View style={styles.boxes}> */}
        // {/* <View style={styles.item}>
        // <Text style={styles.t1}>Items</Text>
        // </View>
      //   <View style={styles.item}>
      //   <Text style={styles.t1}>Items</Text>
      // </View>
      // <View style={styles.item}>
      // <Text style={styles.t1}>Items</Text>
      // </View> */}
      // {/* <View style={styles.item}>
      // <Text style={styles.t1}>Items</Text>
      //   </View>
      //   <View style={styles.item}>
      //   <Text style={styles.t1}>Items</Text>
      //   </View>
      //   <View style={styles.item}>
      //   <Text style={styles.t1}>Items</Text>
      //   </View> */}
        // {/* </View> */}

    //     <FlatList
    //     data={DATA}
    //     renderItem={(data)=>{
    //       return(
            
    //         <View style={styles.card}>
    //           <Text style={{fontSize:32}}>{data.item.title}</Text>
    //         </View>

    //       )
    //     }}
    //     keyExtractor={item => item.id}
    //   />
        

    //   </View>
    //   <View style={styles.main3}>
    // <Text style={styles.text}>Footer</Text>
    //   </View>
      // {/* <Text style={{fontSize :40 , color:'blue'}}>React Hooks</Text> */}
      // {/* <TextInput keyboardType={'default'} onChangeText={(text)=> console.log(text)}
      //  style={{
      //   height:40,
      //   width :'80%',
      //   borderColor:'grey',
      //   borderWidth:2,


      // }} placeholder='Enter the value ' /> */}
      // {/* <Image style={{width : 300, height: 400, resizeMode: 'contain'}} source={{uri: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/carbon-fiber-shelby-mustang-1600685276.jpg?crop=0.9988636363636364xw:1xh;center,top&resize=480:*"}} /> */}
      
    //  {/* <Text>{arr}</Text>
      
      // <Text>{name}</Text> */}
      // {/* <Text>{email}</Text> */}

      // {/* <Button title="Press me" onPress={handleclick} />
      // <Button title="Update name" onPress={handleclickname} /> */}
      // <StatusBar style="auto" />
    // </View>
  // );


    


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  main1:{
    backgroundColor:'salmon',
    width:"100%",
    flex : 1,
    marginTop:20,
   
  },
  main2:{
    backgroundColor:'#fff',
    width:"100%",
    flex : 6,
    
  },
  main3:{
    backgroundColor:'salmon',
    width:"100%",
    flex : 1,
    justifyContent:'center'


  },
  text:{
    fontSize: 50,
    color:'white' ,
    textAlign:'center'
  },

  t1:{
    color: 'black',
    fontSize: 30,
    textAlign:'center',
    position:'relative',
    top:18,

  },
  t2:{
    color: 'black',
    fontSize: 15,
    textAlign:'center',
  },

  item:{
    // marginTop:10,
    width: 100,
    height:100,
    backgroundColor:'white',
    marginBottom:10,
   
  },

  todolist:{
    marginTop: 130,
    alignItems:'center'


  },
  
  
  card:{
    backgroundColor:'#fff',
    width:'80%',
    height :200,
    justifyContent:'center',
    alignItems:'center',
    marginTop:10,
    shadowColor: "#000",
  shadowOffset: {
	width: 0,
	height: 11,
},
  shadowOpacity: 0.55,
  shadowRadius: 14.78,

  elevation: 23,
  




  }
});

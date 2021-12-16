import React , {useState} from 'react';
import { StyleSheet,TextInput, Text, View, TouchableOpacity} from 'react-native';

export default function AddTodo({submithandler}) {

    const [text,settext]=useState('');

    const ChangeHandler = (val) =>{
        settext(val)
    }

    return(
        <View style={styles.boxes}>
      <TextInput onChangeText={ChangeHandler} keyboardType='default' style={styles.textinput} placeholder='Enter todo here'></TextInput>
      <TouchableOpacity onPress={()=>submithandler(text)} activeOpacity={0.7} style={styles.add}>
        <Text style={{fontSize:20,color:'white',textAlign:'center'}}>Add</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} style={styles.delete}>
        <Text style={{fontSize:20,color:'white',textAlign:'center'}}>Delete All</Text>
        </TouchableOpacity>
        
        </View>
    )
}

const styles=StyleSheet.create({
    textinput:{
        width:'80%',
        height:40,
        borderColor:'grey',
        borderWidth:2,
        marginTop:10,
        marginLeft:30
    
      },
      add:{

        height:40,
        width:90,
        backgroundColor: '#2196F3',
        justifyContent:'center',
        marginTop:20,
        marginLeft:70,
        borderRadius:20,
        
        },

  delete:{
    height:40,
    width:110,
    backgroundColor: '#2196F3',
    justifyContent:'center',
    borderRadius:20,
    marginTop:20,
    marginRight:70
    
    

  },
  boxes :{
    flex:1,
    flexDirection:'row',
    justifyContent: 'space-around',
    flexWrap:'wrap',
    
    
  }

})
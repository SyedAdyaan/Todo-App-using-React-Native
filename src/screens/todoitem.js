import React  from 'react';
import { StyleSheet,Text, TouchableOpacity} from 'react-native';

 function TodoItem({item}){
    

    return(
        <TouchableOpacity activeOpacity={0.7} style={styles.todo}>
            <Text>{item.todo}</Text>
        </TouchableOpacity>
    )
}


const styles=StyleSheet.create({
todo:{
    borderColor:'black',
    marginTop:10,
    backgroundColor:'lightgrey',
    borderRadius:10,
    borderWidth:1,
    borderStyle:'dashed',
    padding :10,
    width: 200
}
})

export default TodoItem;
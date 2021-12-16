import React , {useState} from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';



function About({navigation,route}){
    const {name} =route.params; 
    return(
        <View style={styles.container}>
            <Text style={{fontSize:32}}>About</Text>
            <Text style={{fontSize:32}}>{name}</Text>
            <Button onPress={()=>navigation.navigate('Home')} title='Go to Home'/>
            <Button onPress={()=>navigation.navigate('Contact')} title='Go to Contact'/>
        </View>
    )

}


const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center'
    }
})


export default About;
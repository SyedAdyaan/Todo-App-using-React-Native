import React , {useState} from 'react';
import { StyleSheet, Text, View,Button} from 'react-native';

function Contact({navigation}){
    
    return(
        <View style={styles.container}>
            <Text style={{fontSize:32}}>Contact</Text>
            <Button onPress={()=>navigation.navigate('About',{name:"Adyaan"})} title='Go to About'/>
            <Button onPress={()=>navigation.navigate('Home')} title='Go to Home'/>
        </View>
    )

}


const styles= StyleSheet.create({
    container:{
        backgroundColor:'white',
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})


export default Contact;
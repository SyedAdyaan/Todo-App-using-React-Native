import React , {useState} from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import { TouchableOpacity } from 'react-native';

function Home ({navigation,route}) {

    return(
        <View style={styles.container}>
            <Text style={{fontSize:32}}>Home</Text>
            <TouchableOpacity activeOpacity={0.7} style={styles.button} onPress={()=>navigation.navigate('About',{name: "Adyaan"})}>
            <Text style={{textAlign:'center',color:'white'}}>Go to About</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.6} style={styles.button} onPress={()=>navigation.navigate('Contact')}>
            <Text style={{textAlign:'center',color:'white'}}>Go to Contact</Text>
            </TouchableOpacity>
        </View>
    )
}



const styles=StyleSheet.create({
    container :{
        flex:1,
        backgroundColor:'white',
       alignItems : 'center',
       justifyContent:'center',
        

    },
    button :{
        backgroundColor:'#2196F3',
        height:38,
        width:200,
        justifyContent:'center',
        marginBottom:10

    }
});

export default Home;
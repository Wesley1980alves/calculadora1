import React from "react";
import { Text,View,StyleSheet,TouchableHighlight,DynamicColorIOSTuple, ImageBackground } from "react-native";


export default (props:any)=>{

    return(
        
        <View style={estilos.visor}>
            <View style={estilos.visor2}>
                <Text style={estilos.visorOperacao} numberOfLines={1}>{props.valor}</Text>
       
             </View>
                 
        
                <Text style={estilos.visorResultado} numberOfLines={1}>{props.res}</Text>

         </View>
        
        
    )


}
const estilos=StyleSheet.create({

    visor:{
        flex:1,
        padding:20,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#000",
        width:"100%",

    },

    visorResultado:{
        fontSize:60,
        color:"#fff",
    },
    visorOperacao:{
        fontSize:30,
        color:"#000"


    },
    visor2:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#fff",
        width:"100%",
        fontSize:20,
        color:"#000",

    }

});
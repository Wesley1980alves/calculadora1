
import React from 'react';
import {useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Button, ImageBackground } from 'react-native';




export default function App() {
  const [darkMode, setDarkMode] = useState(false)
  const Botoes = ['AC', 'DEL', '%', '/', 7, 8, 9, '*', 4, 5, 6, '-', 3, 2, 1, '+', 0, '.', '+/-', '=']  

  const [numero, setnumero] = useState("")
  const [segundoNumero, setSegundoNumero] = useState("")


  function calculadora(){
    const sNumero = numero.split(' ')
    const fnumero = parseFloat(sNumero[0])
    const segundoNumero = parseFloat(sNumero[2])
    const operador = sNumero[1]

    switch(operador){
      case '+':
        setnumero((fnumero+ segundoNumero).toString())
        return
      case '-': 
        setnumero((fnumero - segundoNumero).toString())
        return
      case '*':
        setnumero((fnumero * segundoNumero).toString())
        return
      case '/': 
        setnumero((fnumero / segundoNumero).toString())
        return
      
    }
 

  }

  function handleInput(buttonPressed:any){
    console.log(buttonPressed)
    if(buttonPressed == '+' || buttonPressed == "-" || buttonPressed == "*" || buttonPressed =="/" ){
      setnumero(numero + " " + buttonPressed + " ")
      return
    }
    switch(buttonPressed){
      case 'DEL':
        setnumero(numero.substring(0, (numero.length -1)))
        return
      case 'AC':
        setSegundoNumero("")
        setnumero("")
        return
      case '=':
        setSegundoNumero(numero + " = ")
        calculadora()
        return
      case '+/-':
        return
        
      case '%':
        setnumero("")
        calculadora()
        return

    }
  


    setnumero(numero + buttonPressed)
  }

  const estilo = StyleSheet.create({
    resultado: {
      backgroundColor: darkMode ? "#282f3b" : "#f5f5f5",
      width: '100%',
      minHeight: 280,
      alignItems: 'flex-end',
      justifyContent: 'flex-end'
    },
    resultadoTexto: {
      color: darkMode ? "#f5f5f5" : "#282F38",
      margin: 10,
      fontSize: 60
    },

    resTexto:{
      color: darkMode ? "#B5B7BB" : "#7c7c7c",
      fontSize: 20,
      marginRight: 10,
      alignSelf: 'flex-end',
    },
    temabotao: {
      alignSelf: 'flex-start',
      bottom: 120,
      margin: 10,
      backgroundColor: darkMode ? "#7b8084" :"#e5e5e5",
      alignItems: 'center',
      justifyContent: 'center',
      width: 50,
      height: 50,
      borderRadius: 25,
      
    },
    botao: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    botao1: {
      borderColor: darkMode ? '#00bfff' : "#00ced1",
      borderWidth: 3,
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: 100, 
      minHeight: 100,
      flex: 2,
    },
    textoBotao: {
      color: darkMode ? "#b5b7bb" : "#7c7c7c",
      fontSize: 20,
    }, 

    fundo:{
      flex:1
    }
  });

  return (
      
   
       <View>
        
        
        <View style={estilo.resultado}>
         <TouchableOpacity style={estilo.temabotao}>
        
        </TouchableOpacity>
        <Text style={estilo.resTexto}>{segundoNumero}</Text>
        <Text style={estilo.resultadoTexto}>{numero}</Text>
      </View>
     
     
      <View style={estilo.botao}>
        {Botoes.map((button) => 
          button === '=' ?
        <TouchableOpacity onPress={() => handleInput(button)} key={button} style={[estilo.botao1, {backgroundColor: '#9DBC7B'}]}>
          <Text style={[estilo.textoBotao, {color: "black", fontSize: 50}]}>{button}</Text>
        </TouchableOpacity>
          :
          <TouchableOpacity onPress={() => handleInput(button)} key={button} style={[estilo.botao1, 
          {backgroundColor: typeof(button) === 'number' ? darkMode === true ? '#303946' : '#000': darkMode === true ? '#414853' : '#ededed'}]}>
            <Text style={estilo.textoBotao}>{button}</Text>
          </TouchableOpacity>
        )}
        </View>
      
    
          
      </View>
     
 
  );
}



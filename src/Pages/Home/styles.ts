import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({

    imageLogo:{
        resizeMode:'contain'
    },
    
    container:{
        paddingBottom:120,
        width:'100%',
        backgroundColor: "#B5BAD0",  //cor de fundo


  }, content:{
        justifyContent:"space-between",


  },
    displayTop:{
        paddingLeft:16,
        paddingRight:16,
        backgroundColor: "#7389AE",  //display de cima grande
        height: "80%",
        justifyContent:"space-between",
        flexDirection:'column',
        paddingTop:32,

    },

    temperatureAndHumidity:{
        flexDirection:'column',
        backgroundColor:'#e6e6fa', //display da temperatura e umidade
        borderRadius:10,
        borderStyle:'dashed',
        borderWidth:2,
        elevation:5,
        padding:32,

        
    },


    temperature:{
        flexDirection:'row',
        height:140,
        borderBottomColor:'#416788', // linha divisória
        borderBottomWidth:2,
        
    },

    temperatureIcon:{
       justifyContent:'flex-end',
        paddingLeft:24,
        paddingBottom:10

    },

    alignTemperatureBig:{
        flexDirection:'row'
        
    },
    
    temperatureBigNumber:{
        paddingLeft:12
    },

    temperatureSmallNumberAndCelsius:{
        flexDirection:'column-reverse'
        },
    
    temperatureCelsius:{
        justifyContent:'center'

    },

  

    humidity:{
        flexDirection:'row',
        height:140,
    },

    humidityIcon:{
        justifyContent:'flex-start',
        paddingLeft:12,
    },

    alignHumidityBig:{
        flexDirection:'row'

    },

    humidityBigNumber:{
        paddingLeft:12

    },

    humiditySmallNumberAndPercentage:{
        flexDirection:'column-reverse'
    }, 
    
    humidityPercentage:{
    },

   
    calendarAndClock:{
        flexDirection:'row',
        justifyContent:'space-between',

    },

    calendar:{
        flexDirection:'row',
    },

    clock:{
         flexDirection:'row',
        },
    alignButtonDown:{
        alignItems:'center',
        justifyContent:'center',
    },

    displayBotton:{
    flexDirection:'row',
    backgroundColor:'#7389AE',   //cor do botão
    alignItems:'center',
    padding:16,
    borderRadius:50,
    width:'70%',
    paddingLeft:48,
    elevation:50,
    
    },

    atualizar:{
        flex:1,
        alignItems:"center",
        paddingRight:32,
    },

    buttonText:{
        fontFamily:'Poppins_700Bold',
        color:'#FCFCFF',
        fontSize:20,
      },

    displayText:{
        fontFamily:'Poppins_400Regular',
        fontSize:20,
        color:'#FCFCFF',
        
      },

    displayBigText:{
        fontFamily:'Roboto_400Regular',
        fontSize:120,
        color:'#231123',


      }, 

    displaySmallText:{
        fontFamily:'Roboto_400Regular',
        fontSize:55,
        color:'#231123',

      },

      iconRotate:{

       
      }

})

export default styles
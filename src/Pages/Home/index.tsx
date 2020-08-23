import React,{useState,useEffect} from 'react';
import {View, Text,ImageBackground,Image,Animated} from 'react-native'
import styles from './styles'
import {RectButton} from 'react-native-gesture-handler'
import {SafeAreaView} from 'react-native-safe-area-context'
import giveClassesBgImage from '../../assets/give-classes-background.png'
import logo from '../../../assets/splash3.jpg'

import api from '../../services/api'
import axios from 'axios'

import { 
     FontAwesome5,
     AntDesign,
        MaterialCommunityIcons,
} from '@expo/vector-icons';


function Home (){

const [ url , setUrl] = useState([])

const [ loading , setLoading] = useState(false)

const [ day , setDay] = useState([])
const [ calendar , setCalendar] = useState([])


const [ humidity , setHumidity] = useState([])
const [ temperature , setTemperature ]  = useState([])

const [ startButtonUpdate, setstartButtonUpdate] = useState('Atualizar')





useEffect( ()=>{
       api.get('/').then(response=>{
            setUrl(response.data)
      })     
 
},[])


async function handleUpdate(){
      setLoading(false)
      setstartButtonUpdate('Atualizando...')


      if(url){
            const raspberryUrl = axios.create({
                  baseURL: `${url}`
            })

     const data =  await raspberryUrl.get('/')
     const {date , humidity , temperature} = data.data
     const [calendar , day] = date.split(" ")
   
      setCalendar(calendar)
      setDay(day)
      setHumidity(humidity)
      setTemperature(temperature)
      setLoading(true)
      setstartButtonUpdate('Atualizado')
} 

}
    return ( <>
          <SafeAreaView>
             <Image source={logo}  style={styles.imageLogo} /> 
              

             <View style={styles.container}>
             <ImageBackground
                resizeMode="contain"
                source={giveClassesBgImage}
                style={styles.content}
                >


            { /*Parte de cima do código*/}
                <View style={styles.displayTop}>


                { /*temperatura e umidade*/}
                  <View style={styles.temperatureAndHumidity}>  

                           <View style={styles.temperature}>  

                                 <View style={styles.temperatureIcon}>
                                       <FontAwesome5 name="temperature-low" size={36} color="black" />
                                 </View>

                              <View style={styles.alignTemperatureBig}>

                                       <View style={styles.temperatureBigNumber}>
                                             <Text style={styles.displayBigText}>{loading?temperature:"00"}</Text>
                                       </View>

                                 <View style={styles.temperatureSmallNumberAndCelsius}>

                                       <View style={styles.temperatureCelsius}>
                                             <Text style={styles.displaySmallText}> Cº</Text>
                                       </View>  
                                      

                                    
                                             </View>     
                                 </View>                   
                 

                           </View>

                           <View style={styles.humidity}>
 
                                 <View style={styles.humidityIcon}>
                                       <MaterialCommunityIcons name="water-outline" size={48} color="black" />
                                 </View>

                                 <View style={styles.alignHumidityBig}>


                                        <View style={styles.humidityBigNumber}>

                                              <Text style={styles.displayBigText}>{loading?humidity:"00"}</Text>
                     </View>

                                        <View style={styles.humiditySmallNumberAndPercentage}>

                              <View style={styles.humidityPercentage}>
                                       <Text style={styles.displaySmallText}> %</Text>
                              </View>
                                 
                         

                        </View>
                  
                      </View>
                           </View> 
                      
                  </View>
                



                   { /*calendario e camera no rodapé*/}

                  <View style={styles.calendarAndClock}>

                            <View style={styles.calendar}>
                                    <AntDesign name="calendar" size={24} color="white" />
                                    <Text style={styles.displayText}> {loading?calendar:"??/??/??"} </Text>
                            </View>

                            <View style={styles.clock}>
                                    <FontAwesome5 name="clock" size={24} color="white" />
                                    <Text style={styles.displayText}> {loading?day:"??:??:??"}</Text>

                            </View>
                  </View>

             </View>

             {/*Parte de baixo do código*/}
                      
            <View style={styles.alignButtonDown} >



             <RectButton style={styles.displayBotton} onPress={handleUpdate} >  

                <AntDesign 
                name="sync"
                 size={24}
                  color="black"
                   style={styles.iconRotate}
                   
                   
                   />
                <View style={styles.atualizar} >   
                    <Text style={styles.buttonText}>  {startButtonUpdate}</Text>
                </View>
               
             </RectButton>


             </View>
             </ImageBackground>
                </View>
            
               </SafeAreaView>
           
              </>)
}

export default Home

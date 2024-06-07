import { View , StyleSheet, Alert} from "react-native"
import StopWatch from "./stop-watch"
import { useState } from "react"
import CircleButton from "./circle-button"


const CountDownTimes = ()=>{
  const [min , setMin] = useState(1)
     
    return <View style={styles.main} key={min}>
         <StopWatch minutes={min}/>
         <View style={styles.container}>
             <CircleButton number={10} onPress={()=> {
                 setMin(10);
             }}/>
             <CircleButton number={5} onPress={()=> setMin(5)}/>
             <CircleButton number={0.2} onPress={()=> setMin(0.2)}/>
             <CircleButton number={20} onPress={()=> setMin(20)}/>
         </View>
    </View>
}

const styles = StyleSheet.create({
    main : {
      flex : 0.5,
      justifyContent : 'center',
      alignItems : 'center',
    gap : 30,
      flexDirection: "column"
    },
     container : {
         flex : 1, 
         flexDirection : 'row',
         gap : 20,
         justifyContent : 'center',
         alignItems : 'center',
         marginTop : 20,
         marginBottom : 20,
         width : '100%'
     }
})

export default CountDownTimes
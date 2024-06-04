import { TouchableOpacity , Text, View , StyleSheet, Alert} from "react-native"




const PlusIcon = ()=>{

    return <TouchableOpacity onPress={()=>{
         Alert.alert('Button Pressed')
 
    }}  style={styles.button} activeOpacity={0.9}>
           <View>
            <Text>

                +
            </Text>
           </View>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
     button :  {
         width : 50,
         height : 50,
         borderRadius : 25,
         backgroundColor : 'orange',
         justifyContent : 'center',
         alignItems : 'center'
     }
})



export default PlusIcon;
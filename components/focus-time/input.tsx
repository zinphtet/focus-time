import { TextInput , StyleSheet} from "react-native"


const InputElement = ()=>{

    return <TextInput placeholder="enter your focus " style={styles.input}>
           
    </TextInput>
}

const styles = StyleSheet.create({
   input : {
     borderWidth  : 1,
     borderColor : 'black',
     flex : 1,
     padding : 10,
     margin : 10,
     borderRadius : 10,
     fontSize : 20

   }
})

export default InputElement;
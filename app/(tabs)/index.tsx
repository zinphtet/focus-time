import InputElement from "@/components/focus-time/input";
import PlusIcon from "@/components/focus-time/plus";
import { Colors } from "@/constants/Colors";
import { View , Text , StyleSheet, Platform, StatusBar} from "react-native";


export default function HomeScreen (){
   
  return <View style={styles.container}>
      <Text style={styles.text}>Focus Time App</Text>
      <View style={styles.inputGroup}>
      <InputElement/>
      <PlusIcon/>
      </View>
      
  </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
    color : Colors.light.text,
     padding : 20,
  },
  text : {
     color: Colors.light.text,
     fontSize : 30
  },
  inputGroup : {
     flexDirection : 'row',
     justifyContent :'space-between',
     alignItems : 'center',
     marginTop : 20
  }
})
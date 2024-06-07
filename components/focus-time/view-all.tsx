
import { useFocusItems } from "@/context/foucs-provider"
import { View  , Text , StyleSheet} from "react-native";
const ViewAll = ()=>{
   const {state} = useFocusItems();
   return <View style={styles.container}>
       {/* {state.focusItems.map((item,idx)=>{
           return <Text key={idx}>{item}</Text>
       })} */}

   {
    state.focusItems.length > 0 && <Text>Focus on ---- {state.focusItems.at(-1)}</Text>
   }
   </View>
}

const styles = StyleSheet.create({
      container : {
         padding : 50,
         gap : 10
      }
})

export default ViewAll;
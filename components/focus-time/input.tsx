import { useContext, useState } from "react";
import {
  TextInput,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useFocusItems } from "@/context/foucs-provider";

const InputElement = () => {
    const [text , setText] = useState('')
    const {dispatch } = useFocusItems()
    const onPressHandler = ()=>{
      if(!text.trim()) return;
        dispatch({type : 'SET_FOCUS_ITEMS' , payload : text})
        setText('')
    }
  return (
    <View style={styles.inputGroup}>
      <TextInput
        placeholder="enter your focus "
        style={styles.input}
        defaultValue={text}
        onChangeText={(txt)=> setText(txt)}
      ></TextInput>

      <TouchableOpacity
        onPress={onPressHandler}
        style={styles.button}
        activeOpacity={0.9}
      >
        <View >
          <Text>+</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "black",
    flex: 1,
    padding: 10,
    margin: 10,
    borderRadius: 10,
    fontSize: 20,
  },
  inputGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  button: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "orange",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default InputElement;

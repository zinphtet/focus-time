import InputElement from "@/components/focus-time/input";
import PlusIcon from "@/components/focus-time/plus";
import { Colors } from "@/constants/Colors";
import { View, Text, StyleSheet, Platform, StatusBar, Alert } from "react-native";
import { FocusItemsProvider } from "@/context/foucs-provider";
import ViewAll from "@/components/focus-time/view-all";
import StopWatch from "@/components/focus-time/stop-watch";
import CircleButton from "@/components/focus-time/circle-button";
import CountDownTimes from "@/components/focus-time/coutdonw-times";
import { useFocusItems } from "@/context/foucs-provider";
export default function HomeScreen() {

  return (
    <FocusItemsProvider>
      <View style={styles.container}>
        <Text style={styles.text}>Focus Time App</Text>
        <View style={styles.inputGroup}>
          <InputElement />
         
        </View>
        <ViewAll/>
        <CountDownTimes />
        
      </View>
    </FocusItemsProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
    color: Colors.light.text,
    padding: 20,
  },
  text: {
    color: Colors.light.text,
    fontSize: 30,
  },
  inputGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
});

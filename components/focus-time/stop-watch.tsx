import { useFocusItems } from "@/context/foucs-provider";
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet , Vibration } from "react-native";

interface StopWatchProps {
  minutes: number;
}

const StopWatch: React.FC<StopWatchProps> = ({ minutes }) => {
  const [timeLeft, setTimeLeft] = useState(minutes * 60); // Convert minutes to seconds
  const { state } = useFocusItems();
  useEffect(() => {
    if (timeLeft <= 0) {
        Vibration.vibrate([0, 500, 500, 500, 500, 500, 500, 500, 500])
         return;
    }

    const interval = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  const formatTime = (time: number) => {
    const mins = Math.floor(time / 60);
    const secs = time % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <View  >
      {state.focusItems.length > 0 && (
        <View style={styles.container}>
          <Text style={styles.timeText}>{formatTime(timeLeft)}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
    width: 150,
    height: 150,
    borderRadius: 50,
    // paddinInl
    borderWidth: 10,
    borderColor: "white",
  },
  timeText: {
    fontSize: 48,
    fontWeight: "bold",
  },
});

export default StopWatch;

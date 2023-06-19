/* The `HomeScreen` class is a React component that displays a quiz buzzer app home screen with team
buttons that navigate to the buzzer page with a selected team color. */
import * as React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { Audio } from "expo-av";

class HomeScreen extends React.Component {
  /* `goToBuzzerScreen` is a method that takes in a parameter `buzzercolor`. When called, it navigates
  to the 'Buzzerpage' screen and passes the `buzzercolor` as a prop with the key 'color'. This
  method is used as an onPress event for each of the team buttons on the HomeScreen. */
  goToBuzzerScreen = (buzzercolor) => {
    this.props.navigation.navigate("Buzzerpage", { color: buzzercolor });
  };

  render() {
    return (
      <View>

        <Text
          style={{
            fontWeight: "bold",
            fontSize: 40,
            backgroundColor: "orange",
            textAlign: "center",
          }}
        >
          QUIZ BUZZER
        </Text>

        <Text
          style={{
            alignSelf: "center",
            fontSize: 20,
            fontWeight: "bold",
            marginTop: 15,
          }}
        >
          {" "}
          please choose your team!
        </Text>

        {/* This is rendering a group of `TouchableOpacity` components inside a `View` component. Each
        `TouchableOpacity` has a different background color and an `onPress` event that calls the
        `goToBuzzerScreen` method with a different color parameter. The `Text` component inside each
        `TouchableOpacity` displays the team color. This code is creating team buttons for the quiz
        buzzer app home screen. */}
        <View>
          <TouchableOpacity
            style={[styles.buttonStyle, { backgroundColor: "red" }]}
            onPress={() => {
              this.goToBuzzerScreen("red");
            }}
          >
            <Text style={styles.buttonText}>t: red</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.buttonStyle, { backgroundColor: "yellow" }]}
            onPress={() => {
              this.goToBuzzerScreen("yellow");
            }}
          >
            <Text style={styles.buttonText}>t: yellow</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.buttonStyle, { backgroundColor: "blue" }]}
            onPress={() => {
              this.goToBuzzerScreen("blue");
            }}
          >
            <Text style={styles.buttonText}>t: blue</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.buttonStyle, { backgroundColor: "green" }]}
            onPress={() => {
              this.goToBuzzerScreen("green");
            }}
          >
            <Text style={styles.buttonText}>t: green</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  buttonStyle: {
    marginTop: 50,
    borderWidth: 2,
    borderColor: "rgba(0,0,0,0.2)",
    /* `alignSelf: "center",` is a style property that centers the child element horizontally within
    its container. In this case, it is used to center the text inside the `TouchableOpacity`
    components horizontally. */
    alignSelf: "center",
    /* `alignItems: "center",` is a style property that centers the child elements horizontally within
    a container. In this case, it is used to center the text inside the `TouchableOpacity`
    components horizontally. */
    alignItems: "center",
    /* `justifyContent: "center"` is a style property that centers the child elements vertically within
    a container. In this case, it is used to center the text inside the `TouchableOpacity`
    components vertically. */
    justifyContent: "center",
    width: 150,
    height: 100,
    borderRadius: 100,
  },

  buttonText: {
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default HomeScreen;

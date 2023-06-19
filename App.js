/* This is a React Native app that uses react-navigation to switch between two screens, HomeScreen and
BuzzerScreen. */

import * as React from "react";
import { View } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import BuzzerScreen from "./screens/BuzzerScreen";

/* Importing two functions, `createAppContainer` and `createSwitchNavigator`, from the
`react-navigation` library. These functions are used to create a container and a navigator for the
app's screens, allowing the user to switch between them. */
import { createAppContainer, createSwitchNavigator } from "react-navigation";

export default class App extends React.Component {
  /**
   * This is a render function that returns a View component containing an AppContainer component.
   * @returns A View component containing an AppContainer component.
   * 
   * In React, Render is the technique that can redirect a page with the help of function render(). 
   * Most importantly, render a function we can use to define the HTML code within the HTML element. 
   * It helps to display certain views in the UI using certain logic defined in the render function 
   * and returns the output.
   */
  render() {
    /* This is the render function of the `App` component, which returns a `View` component containing
    an `AppContainer` component. The `AppContainer` component is responsible for rendering the
    screens of the app, which are defined in the `AppNavigator` using the `createSwitchNavigator`
    function. By wrapping the `AppContainer` component in a `View` component, it ensures that the
    `AppContainer` is displayed within a container that can be styled and positioned as needed. */
    return (
      /* `<View><AppContainer /></View>` is rendering the `AppContainer` component within a `View`
      component. This is done to ensure that the `AppContainer` is displayed within a container that
      can be styled and positioned as needed. The `AppContainer` component is responsible for
      rendering the screens of the app, which are defined in the `AppNavigator` using the
      `createSwitchNavigator` function. By wrapping the `AppContainer` component in a `View`
      component, it ensures that the `AppContainer` is displayed within a container that can be
      styled and positioned as needed. */
      <View>
        {/* `<AppContainer />` is rendering the screens of the app, which are defined in the
       `AppNavigator` using the `createSwitchNavigator` function. It is responsible for displaying
       the current screen that the user is on and allowing the user to switch between screens. It is
       wrapped in a `View` component to ensure that it is displayed within a container that can be
       styled and positioned as needed. */}
        <AppContainer />
      </View>
    );
  }
}
/* `var AppNavigator` is creating a navigator for the app's screens using the `createSwitchNavigator`
function from the `react-navigation` library. The `createSwitchNavigator` function takes an object
with key-value pairs, where the key is the name of the screen and the value is the component that
should be rendered for that screen. In this case, the object has two key-value pairs: `Homepage:
HomeScreen` and `Buzzerpage: BuzzerScreen`. This means that the `AppNavigator` will have two
screens: `Homepage` and `Buzzerpage`, and when the user navigates to each screen, the corresponding
component (`HomeScreen` or `BuzzerScreen`) will be rendered. */
var AppNavigator = createSwitchNavigator({
  Homepage: HomeScreen,
  Buzzerpage: BuzzerScreen,
});

/* `const AppContainer = createAppContainer(AppNavigator);` is creating a container for the app's
screens using the `createAppContainer` function from the `react-navigation` library. The
`createAppContainer` function takes a navigator as its argument and returns a component that can be
rendered to display the screens defined in the navigator. In this case, the `AppContainer` component
is created using the `createAppContainer` function and is passed the `AppNavigator` as its argument.
This means that the `AppContainer` component will render the screens defined in the `AppNavigator`
and allow the user to switch between them. */
const AppContainer = createAppContainer(AppNavigator);

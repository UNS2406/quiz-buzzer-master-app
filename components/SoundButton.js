/* The SoundButton class is a React component that plays a buzzer sound when pressed and displays a
button with customizable color. */
import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';

class SoundButton extends React.Component {
  /* `playSound` is an asynchronous function that uses the `Audio` module from the `expo-av` library to
  create a new sound object and play a buzzer sound when called. It takes no arguments and uses the
  `createAsync` method to create a new sound object with the specified URI and options. The
  `shouldPlay` option is set to `true` to automatically play the sound when it is loaded. The
  `await` keyword is used to wait for the sound object to be created before continuing with the
  function. */
  playSound = async () => {
    await Audio.Sound.createAsync(
      { uri: 'http://soundbible.com/mp3/Buzzer-SoundBible.com-188422102.mp3' },
      { shouldPlay: true }
    );
  };


  /**
   * This function updates the database with the current time and sets a flag indicating that a buzzer
   * of a certain color has been pressed.
   * @param buttonColor - The color of the button that was pressed. It is used to identify which team
   * pressed their buzzer.
   */
  isBuzzerPressed(colorPressed) {
    var time = new Date().getTime();

    var query = db.ref('TEAMS/' + colorPressed + '/').update({
      TEAMNAME:colorPressed,
      ISBUZZERPRESSED: true,
      TIMESTAMP: time,
    });
  }


  /**
   * This is a render function that returns a TouchableOpacity component with a button and text that
   * triggers a sound when pressed.
   * @returns A TouchableOpacity component with a Text child component inside it. The TouchableOpacity
   * has an onPress event listener that calls the playSound function. The TouchableOpacity also has a
   * style prop that sets the background color to the value of the color prop passed down from its
   * parent component.
   */
  render() {
    return (
      <TouchableOpacity onPress={this.playSound}>
      style={[styles.button, {backgroundColor: this.props.color}]}
        <Text style={styles.buttonText}>Press Me</Text>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    marginTop: 200,
    marginLeft: 100,
    borderWidth: 1,
    /* `borderColor: 'rgba(0,0,0,0.2)',` is setting the color of the border of the `TouchableOpacity`
    component to a semi-transparent black color. The `rgba` value stands for red, green, blue, and
    alpha (transparency) values, respectively. In this case, the red, green, and blue values are all
    0 (black), and the alpha value is 0.2, which makes the border semi-transparent. */
    borderColor: 'rgba(0,0,0,0.2)',
    /* `alignItems: 'center', justifyContent: 'center'` are style properties that are applied to the
    `TouchableOpacity` component. */
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 200,

    borderRadius: 100,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});

/* `export default SoundButton;` is exporting the `SoundButton` class as the default export of this
module. This means that when another module imports this module, they can import the `SoundButton`
class directly without having to specify its name in curly braces. For example, if another module
wanted to use the `SoundButton` class, they could simply write `import SoundButton from
'./SoundButton';` instead of `import { SoundButton } from './SoundButton';`. */
export default SoundButton;

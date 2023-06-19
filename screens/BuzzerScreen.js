/* The `BuzzerScreen` class renders a `View` component that contains a `SoundButton` component with a
`color` prop obtained from the navigation parameters. */
import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import SoundButton from '../components/SoundButton';

 export default class BuzzerScreen extends React.Component {
  render() {
    return (
      /* Rendering a `View` component that contains a `SoundButton` component with a `color` prop
      passed to it. The `color` prop is obtained from the navigation parameters using
      `this.props.navigation.getParam('color')`. */
      <View>
        <SoundButton color = {this.props.navigation.getParam('color')}/>
      </View>
    );
  }
}


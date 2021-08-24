/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import React , {useEffect} from 'react';
 import { Text, View, StyleSheet,Button, Alert  } from 'react-native';

var Sound = require('react-native-sound');



 const styles = StyleSheet.create({
  center: {
    alignItems: 'center'
  }
})

const App = (...props) => {
  useEffect(() => {
    Sound.setCategory('Playback');

    var whoosh = new Sound('_jingle_debut_de_parcours.wav', Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log('failed to load the sound', error);
        return;
      }
     
      console.log('duration in seconds: ' + whoosh.getDuration() + 'number of channels: ' + whoosh.getNumberOfChannels());

      whoosh.play((success) => {
        if (success) {
          console.log('successfully finished playing');
        } else {
          console.log('playback failed due to audio decoding errors');
        }
      });
    });
  }, [])
  
  function baseclick() {

    var whoosh = new Sound('_basic_clic.wav', Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log('failed to load the sound', error);
        return;
      }
     
      console.log('duration in seconds: ' + whoosh.getDuration() + 'number of channels: ' + whoosh.getNumberOfChannels());

      whoosh.play((success) => {
        if (success) {
          console.log('successfully finished playing');
        } else {
          console.log('playback failed due to audio decoding errors');
        }
      });
    });
    
  }


  return (
    <View style={[styles.center, {top: 50}]}>
          <Text>L'app joue un son au lancement apres c'est un simple bouton </Text>

          <Button
          onPress={() => baseclick()}
          style={{top: 50}}
          title="Play sound _basic_click.wav"
          color="#841584"
         
        />
    </View>
  );
}

export default App;
Commande :  npm install react-native-sound --save

2 façons d'installer les sounds 

ANDROID : dans le dossier (que j'ai crée) android/app/src/main/res/raw
    /!\ Il faut que tout les formats de son sois nommer de facons a respecter _name_word_word.extensions
IOS: (Pas test kappa) Dans Xcode (click droit dans le projet et "ADD FILES" to [PROJECTNAME])
//L'app prend actuellement en charge les .wav et .mp3 (Donc logiquement tout les format possible)


Config :

// Importation du module
var Sound = require('react-native-sound');
 
// Activé la lecture en mode silence (?)
Sound.setCategory('Playback');
 
// Chargez le fichier son 'whoosh.mp3' à partir du paquet d'applications.
// Voir les notes ci-dessous concernant le préchargement des sons dans le code d'initialisation ci-dessous.
var whoosh = new Sound('whoosh.mp3', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('failed to load the sound', error);
    return;
  }
  // Chargé correctement
  console.log('duration in seconds: ' + whoosh.getDuration() + 'number of channels: ' + whoosh.getNumberOfChannels());
 
  // Jouez le son avec un rappel a la fin
  whoosh.play((success) => {
    if (success) {
      console.log('successfully finished playing');
    } else {
      console.log('playback failed due to audio decoding errors');
    }
  });
});
 
//Réduire le volume de moitié
whoosh.setVolume(0.5);
 
// Positionner le son à fond à droite dans un champ stéréo
whoosh.setPan(1);
 
// Boucle indéfiniment jusqu'à ce que stop() soit appelé.
whoosh.setNumberOfLoops(-1);
 
// Obtenir les propriétés de l'instance du lecteur
console.log('volume: ' + whoosh.getVolume());
console.log('pan: ' + whoosh.getPan());
console.log('loops: ' + whoosh.getNumberOfLoops());
 
// Recherche d'un point précis en quelques secondes
whoosh.setCurrentTime(2.5);
 
// Obtenir le point de lecture actuel en secondes
whoosh.getCurrentTime((seconds) => console.log('at ' + seconds));
 
// Mettre le son en pause
whoosh.pause();
 
// Arrêtez le son et revenez au début.
whoosh.stop(() => {
   // Note : Si vous voulez jouer un son après l'avoir arrêté et rembobiné,
  // il est important d'appeler play() dans un callback.
  whoosh.play();
});
 
// Libérer la ressource du lecteur audio
whoosh.release();
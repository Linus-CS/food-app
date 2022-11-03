import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image } from 'react-native';
import Navigator from './src/misc/Navigator';
import Home from './src/screens/Home';
import Discovery from './src/screens/Discovery';
import Profile from './src/screens/Profile';
import Settings from './src/screens/Settings';

const home = require("./assets/home.png")
const search = require("./assets/search.png")
const user = require("./assets/user.png")
const settings = require("./assets/settings.png")

export default function App() {
  return (
    <View style={styles.container}>
      <Navigator default="Home">
        <Home>Home<Image style={styles.img} source={home} /></Home>
        <Discovery>Discovery<Image style={styles.img} source={search} /></Discovery>
        <Profile>Profile<Image style={styles.img} source={user} /></Profile>
        <Settings>Settings<Image style={styles.img} source={settings} /></Settings>
      </Navigator>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 35,
    height: 35,
  }
});

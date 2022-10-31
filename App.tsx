import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Navigator from './src/misc/Navigator';
import Home from './src/screens/Home';
import Discovery from './src/screens/Discovery';
import Profile from './src/screens/Profile';
import Settings from './src/screens/Settings';

export default function App() {
  return (
    <View style={styles.container}>
      <Navigator default="Home">
        <Home>Home</Home>
        <Discovery>Discovery</Discovery>
        <Profile>Profile</Profile>
        <Settings>Settings</Settings>
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
});

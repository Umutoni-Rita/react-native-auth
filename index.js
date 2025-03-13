
import 'react-native-gesture-handler'; // Must be at the top
import { registerRootComponent } from 'expo';
import './controllers/firebaseConfig';
import App from './App';

registerRootComponent(App);
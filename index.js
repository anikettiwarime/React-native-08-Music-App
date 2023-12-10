/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';

// Music Service Registration
import TrackPlayer from 'react-native-track-player';
import { musicPlayerService } from './musicPlayerService';

AppRegistry.registerComponent(appName, () => App);
TrackPlayer.registerPlaybackService(() => musicPlayerService);

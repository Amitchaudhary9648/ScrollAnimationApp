import React, { useState, useEffect, useRef } from 'react';

import {
    FlatList,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import AnimatedSplashScreen from './src/screens/AnimatedSplashScreen';
import Animation1 from './src/screens/Animation1';
import WhatsappAnimation from './src/screens/WhatsappAnimation';

function App() {

    return (
        //<Animation1 />
        //<WhatsappAnimation />
        <AnimatedSplashScreen />
    );
}


export default App;

import * as React from 'react'
import {Text, View} from 'react-native'
import HomeScreen from './HomeScreen'
import Splash from './Splash'

export default function AnimatedSplashScreen(): JSX.Element {
    const [isLoading, setIsLoading] = React.useState<boolean>(true)
    return isLoading ? <Splash setIsLoading={setIsLoading } /> : <HomeScreen />;
}
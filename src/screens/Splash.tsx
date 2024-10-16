import LottieView from 'lottie-react-native'
import React, {SetStateAction, Dispatch} from 'react'
import {Text, View} from 'react-native'

interface SplashProps {
    setIsLoading: Dispatch<SetStateAction<boolean>>
}

export default function Splash({setIsLoading}: SplashProps): JSX.Element {
    return(
        <View style={{flex:1, alignItems: 'center'}}>
            < LottieView 
                source={require("../assets/animation.json")}
                autoPlay
                loop={true}
                resizeMode={"cover"}
                onAnimationFinish={() => setIsLoading(false)}
                />
        </View>
    )
}
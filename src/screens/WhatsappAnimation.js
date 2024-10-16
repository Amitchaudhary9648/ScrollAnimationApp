import React, { useState } from 'react';
import {
    View,
    Text,
    ScrollView,
    Image
} from 'react-native';
import { MotiView, SafeAreaView, useDynamicAnimation } from 'moti';

const WhatsappAnimation = () => {
    const [yValue, setYValue] = useState(0);
    const animation = useDynamicAnimation(() => {
        return {
            width: "100%",
            height: 150
        }
    })
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <MotiView
                state={animation}
                delay={'10000'}
                style={{
                    backgroundColor: yValue > 30 ? '#128C7E': '#fff',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <MotiView 
                        from={{
                            scale: 0,
                            translateX: 0,
                            translateY: 0
                        }}
                        animate={{
                            scale: 1,
                            translateX: yValue > 30  ? -130 : 0,
                            translateY: yValue > 30 ? -20 : 0
                        }}
                        style={{
                            flexDirection: 'row',
                            marginTop: 20,
                            justifyContent: 'center'
                        }}
                        >
                            <Image 
                                source={require('../assets/profile_placeholder.png')}
                                style={{width: yValue> 30 ? 40 : 120, height: yValue> 30 ? 40: 120,alignSelf: 'center'}}/>
                    </MotiView>
                </MotiView>
            <ScrollView 
                style={{flex: 1, backgroundColor: '#fff'}}
                onScroll={event => {
                    const offSet = event.nativeEvent.contentOffset.y;
                    if(offSet.toFixed(0) > 30){
                        animation.animateTo({width: '100%', height: 60})
                    } else {
                        animation.animateTo({width: '100%', height: 150})
                    }
                    setYValue(offSet.toFixed(0))
                }}>
                <View style={{height: 1000, width: "100%"}}></View>
            </ScrollView>
            <View style>

            </View>


        </SafeAreaView>
    )
}

export default WhatsappAnimation
import React, {useState, useEffect, useRef} from 'react';

import {
    FlatList,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

const Animation1 = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const flatListRef = useRef(null)
    const data = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
    useEffect(() => {
        flatListRef.current.scrollToIndex({
            index: selectedIndex,
            animated: true
        })
    },[selectedIndex])
    return(
        <SafeAreaView style={{flex: 1,  alignItems: 'center'}}>
            <View style={{marginTop: 20, width: "100%", alignItems: 'center', justifyContent: 'center'}}>
                <FlatList
                    ref={flatListRef}
                    data={data}
                    initialScrollIndex={selectedIndex}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({item, index}) => {
                        return (
                            <TouchableOpacity
                                style={{
                                    width: 50, 
                                    height: 50,
                                    marginLeft: 10,
                                    borderWidth: 1,
                                    borderRadius: 10,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor: selectedIndex == index ? '#000' : '#fff'
                                }}
                                onPress={() => setSelectedIndex(index)}>
                                    <Text style={{ color: selectedIndex == index ? "#fff" : "#000"}}>{index + 1}</Text>
                            </TouchableOpacity>
                        )
                    }}
                    
                />
            </View>

            <View style={{marginTop: 20, width: "100%"}}>
                <FlatList
                    //ref={flatListRef}
                    data={data}
                    initialScrollIndex={selectedIndex}
                    showsVerticalScrollIndicator={false}
                    onScroll={event => {
                        const index = event.nativeEvent.contentOffset.y/50
                        if(index >= 0 && index <=19)
                        setSelectedIndex(index.toFixed(0))
                    }}
                    renderItem={({item, index}) => {
                        return (
                            <TouchableOpacity
                                style={{
                                    width: "90%", 
                                    height: 50,
                                    alignSelf: 'center',
                                    marginTop: 10,
                                    borderWidth: 1,
                                    borderRadius: 10,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor: selectedIndex == index ? '#000' : '#fff',
                                    marginBottom: data.length -1 === index ? 300 : 0
                                }}
                                >
                                    <Text style={{ color: selectedIndex == index ? "#fff" : "#000"}}>{index + 1}</Text>
                            </TouchableOpacity>
                        )
                    }}
                    
                />
            </View>

            

        </SafeAreaView>

    )
}

export default Animation1
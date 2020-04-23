import React from 'react'
import FlashMessage from "react-native-flash-message";

const PopUp = () => {
    return (
        <FlashMessage 
            position="bottom" 
            style={{alignItems: 'center', justifyContent: 'center'}} 
            titleStyle={{fontSize: 16}}/>
    )
}

export default PopUp

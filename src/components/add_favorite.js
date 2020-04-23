import React, {useState} from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import Favorite from '../assets/images/navigation/favorited.png'
import Favorited from '../assets/images/home/favorited.svg'
import Colors from '../consts/colors'

const AddFavorite = (props) => {
    const [isClicked, setClicked] = useState()

    const setFavorited = () => {
        if(isClicked){
            props.remove();
            setClicked(false)
        }
        else{
            props.set();
            setClicked(true)
        }
    }

    return (
        <TouchableOpacity style={styles.container} onPress={setFavorited}>
        {
            isClicked ? 
                <Favorited 
                    width={24} 
                    height={24} 
                    fill={Colors.buttonPurple}
                    style={{marginLeft: -4}}
                    />
                :
                <Image source={ Favorite } style={styles.icon}/>
        }
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 44,
        height: 44,
        padding: 10,
        marginTop: 10,
    },
    icon: {
        marginLeft: -4,
        width: 24,
        height: 24,
      }
  });


export default AddFavorite

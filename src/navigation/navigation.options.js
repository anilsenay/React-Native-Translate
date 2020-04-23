import React from 'react'
import { TouchableOpacity, Image } from 'react-native'
import Settings from '../assets/images/navigation/settings.png'
import Logout from '../assets/images/navigation/logout.png'

const options = {
    title: 'Translate',
    headerTitleAlign: 'center',
    headerTransparent: true,
    headerRight: () => (
      <TouchableOpacity style={styles.optionsButton} >
        <Image source={ Settings } style={styles.icon}/>
      </TouchableOpacity>
    ),
    headerLeft: () => (
      <TouchableOpacity style={styles.optionsButton}>
        <Image source={ Logout } style={styles.icon}/>
      </TouchableOpacity>
    )
}

const styles = {
    optionsButton: {
      padding: 16,
    },
    icon: {
      width: 24,
      height: 24,
    }
};

export default options
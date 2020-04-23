import React from 'react'
import { SafeAreaView } from 'react-native'
import FavoritedView from './favorited_views/favorited.view'

const Favorited = ({ route, navigation }) => {

    navigation.setOptions({
        headerRight: () => null,
        title: 'Favorites',
    })

    return (
        <SafeAreaView>
            <FavoritedView />
        </SafeAreaView>
    )
}

export default Favorited

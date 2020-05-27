import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { TouchableWithoutFeedback } from 'react-native'

import { Button, Label } from './styles'
import varStyles from '../../varStyles'

export default function PlayButton({onPress, focused}){
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <Button
                style={
                    focused ? {backgroundColor: varStyles.colors.secundaria}:{backgroundColor: 'gray'}} >
                <Icon 
                    name="play-circle-o"
                    size={35}
                    color={
                        focused ?'#fff':"#000"
                    } />
                <Label focused={focused}>Jogar</Label>
            </Button>
        </TouchableWithoutFeedback>
        
    )
}
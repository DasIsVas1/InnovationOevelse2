import React, {Component} from 'react'
import {View, Text, Button } from 'react-native'


export default class StateButton extends Component {

    state = {
        boxTitle: 'Empty Box',
        clicked:false
    }

    onPress = () => {
        if(!this.state.clicked) {
            this.setState({
                boxTitle: 'Filled Box',
                clicked:true
            })
        } else {
            this.setState( {
                boxTitle: 'Empty Box',
                clicked:false
            })
        }
    };

    render() {
        return (
            <View style = {{paddingTop: 25}}>

                <Text>3. State Render Funktion</Text>

                <Button title={this.state.boxTitle} onPress={this.onPress} />

            </View>
        )
    }

}
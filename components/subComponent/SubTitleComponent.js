import React, {Component} from 'react'
import {Text, View, Button, TextInput, Stylesheet} from 'react-native'

export default class SubTitleComponent extends Component {
    state = {title: 'TEST'}

    // Kald når den nuværende title skal skiftes med en ny titel

    setTitle = (title) => this.setState({title});

    render() {
        return (
            <View style = {{paddingTop: 25}}>

                <Text> Her er den nye title --> {this.state.title}</Text>

            </View>
        )
    };
};
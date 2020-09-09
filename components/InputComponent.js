import React, {Component} from 'react'
import {Text, View, Button, TextInput, Stylesheet} from 'react-native'
import SubTitleComponent from "./subComponent/SubTitleComponent";

export default class InputComponent extends Component {

    // Init value
    state = {Bob: ''}

    // Laver en reference sø value kan sættes
    subtitle = React.createRef();

    // Hent text input med text prop felt og sætter det i state
    handleTextChange = (text) => {
        this.setState({Bob: text})
    }

    // Sæt input value til vores subTitle reference i BoxComponenten via Set
    handleButtonPressing = () => {
        // Se om knappen virker console.Log
        console.log(this.state.Bob)
        this.subtitle.current.setTitle(this.state.Bob)
    }

    render() {
        return (
            <View style={{paddingTop: 25}}>

                <Text>4. References og Input Value</Text>

                <TextInput
                    placeholder = 'Input text here'
                    onChangeText = {this.handleTextChange}
                />

                <Button onPress = {this.handleButtonPressing} title = 'Sæt ny title' />

                {/* Referencen er ligesom vores Title i TitleComponent og passer data videre */}

                <SubTitleComponent ref = {this.subtitle} />

            </View>
        )
    };
};
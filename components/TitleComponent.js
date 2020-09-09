import React, {Component} from 'react'
import View from "react-native-web/dist/exports/View";
import Text from "react-native-web/src/exports/Text";

export default class TitleComponent extends Component {
    render() {

        const {title}=this.props

        return (
            <View style = {{paddingTop: 25}}>

                <Text>2. Dette er anden component, som er en Title Component</Text>
                <Text>Dette er min prop title: '{title}'</Text>

            </View>
        )
    }
}
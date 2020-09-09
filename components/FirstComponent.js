import React, {Component} from 'react'
import View from "react-native-web/dist/exports/View";
import Text from "react-native-web/dist/exports/Text";

export default class FirstComponent extends Component {
    render() {
        return(
            <View>
                <Text>1.  Dette er min første component </Text>
            </View>
        )
    }
}
import React from 'react'
import { View, Text, TextInput } from 'react-native'

function InputWithLabel(props) {
    const { label, placeholder, value, onChangeText, secureTextEntry, onSubmitEditing } = props;
    return(
        <View style={{
            padding: 16,
            fontSize: 18,
        }}> 
            <Text>{label}</Text>
            <TextInput
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
                onSubmitEditing={onSubmitEditing}
            />
        </View>
    )
}

export default InputWithLabel;
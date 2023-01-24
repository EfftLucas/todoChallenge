import React from "react";
import {Text, TouchableOpacity, View} from "react-native";
import {styles} from "./styles";
import BouncyCheckbox from "react-native-bouncy-checkbox";

type TaskProps = {
    text: string;
    onRemove: () => void;
    isFinish: boolean;

    onFinish: () => void;
}
export function Task({ text, onRemove, isFinish, onFinish }: TaskProps): React.ReactElement {
    return (
        <View style={styles.taskContainer}>
            <View>
                <BouncyCheckbox
                    size={20}
                    fillColor={'#5E60CE'}
                    unfillColor={'transparent'}
                    onPress={onFinish}
                />
            </View>
            <View style={styles.textContainer}>
                <Text  style={isFinish ? styles.textContainerTextCheck :  styles.textContainerText}>
                    {text}
                </Text>
            </View>
            <View style={styles.deleteContainer}>
                <TouchableOpacity>
                    <Text style={{ color: '#fff'}} onPress={onRemove}>X</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
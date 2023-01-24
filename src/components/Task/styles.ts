import {StyleSheet} from "react-native";


export const styles = StyleSheet.create({
    taskContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 12,
        gap: 8,
        width: '100%',
        height: 64,
        backgroundColor: '#262626',
        marginBottom: 10,
        borderRadius: 5,
    },
    textContainer: {
        flex: 1,
    },
    textContainerText: {
        color: '#F2F2F2',
        fontWeight: '400',
        fontSize: 14
    },
    textContainerTextCheck: {
        color: '#808080',
        fontWeight: '400',
        textDecorationLine: 'line-through',
        fontSize: 14
    },
    deleteContainer: {
        width: 32,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
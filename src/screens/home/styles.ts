import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#0D0D0D'
    },
    header: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0D0D0D',
        height: 173,
    },
    inputContainer: {
        flexDirection: 'row',
        position: 'absolute',
        backgroundColor: 'transparent',
        top: 142,
        right: 24,
        left: 24,
        height: 54,
        gap: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        width: 271,
        height: 54,
        backgroundColor: '#262626',
        border: '1px solid #0d0d0d',
        borderRadius: 6,
        padding: 16,
        color: '#fff',
        flex: 1
    },
    button: {
        width: 52,
        height: 52,
        backgroundColor: '#1e6f9f',
        borderRadius: 6,
        marginLeft: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16
    },
    taskContainer: {
        marginTop: 30,
        flex: 1,
        width: '100%',
        backgroundColor: '#0D0D0D'
    },
    infoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        width: 327,
        height: 19,
        marginLeft: 24,
        marginRight: 24
    },
    createdContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 8,
        width: 87,
        height: 19
    },
    createdText: {
        color: '#4ea8de',
        fontSize: 14,
        fontWeight: '700',
        lineHeight: 17,
    },
    createdCounterContainer: {
        width: 25,
        height: 19,
        backgroundColor: '#333333',
        borderRadius: 999,
        gap: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    createdCounterText: {
        color: '#D9D9D9',
        fontSize: 12,
        lineHeight: 15,
        fontWeight: '700',
    },
    doneContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 8,
        width: 100,
        height: 19
    },
    doneText: {
        color: '#8284FA',
        fontSize: 14,
        fontWeight: '700',
        lineHeight: 17,
    },
    doneCounterContainer: {
        width: 25,
        height: 19,
        backgroundColor: '#333333',
        borderRadius: 999,
        justifyContent: 'center',
        alignItems: 'center',
    },
    doneCounterText: {
        color: '#D9D9D9',
        fontSize: 12,
        lineHeight: 15,
        fontWeight: '700',
    }
})
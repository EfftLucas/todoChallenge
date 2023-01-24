import React, {useEffect, useState} from "react";
import {Alert, FlatList, Image, Text, TextInput, TouchableOpacity, View} from "react-native";
import {styles} from "./styles";
import {PlusCircle} from "phosphor-react-native";
import {Task} from "../../components/Task";

type Task = {
    name: string;
    isFinished: boolean;
}
export function Home(): React.ReactElement {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [finishTask, setFinishTask] = useState<Task[]>([])
    const [task, setTask] = useState('');


    function handleNewTask() {
        setTasks((prevState) => [...prevState, {  name: task, isFinished: false }]);
        setTask('');
    }

    function handleRemoveTask(task: string) {
        Alert.alert('Remover', `Deseja remover a tarefa ${task}`, [
            {
                text: 'Sim',
                onPress: () => {
                    setTasks(tasks.filter(t => t.name !== task))
                }
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ])
    }

    function handleFinishTask(task: string) {
        const updatedTasks: Task[] = tasks.map(t => {
            if(t.isFinished === true) {
                t.isFinished = false;
                return t;
            }
            if(t.name === task) {
                t.isFinished = true;
            }
            return t;
        })
        setTasks(updatedTasks)
    }

    useEffect(() => {
        const result = tasks.filter(task => task.isFinished === true);
        setFinishTask(result)
    }, [tasks])
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require('../../../assets/Logo.png')} />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder='Digite a sua tarefa'
                    placeholderTextColor="#6b6b6b"
                    onChangeText={setTask}
                    value={task} />
                <TouchableOpacity style={styles.button} onPress={handleNewTask}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.taskContainer}>
                <View style={styles.infoContainer}>
                    <View style={styles.createdContainer}>
                        <View>
                            <Text style={styles.createdText}>
                                Criadas
                            </Text>
                        </View>
                        <View style={styles.createdCounterContainer}>
                            <Text style={styles.createdCounterText}>
                                {tasks.length}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.doneContainer}>
                        <View>
                            <Text style={styles.doneText}>
                                Concluídas
                            </Text>
                        </View>
                        <View style={styles.doneCounterContainer}>
                            <Text style={styles.doneCounterText}>
                                {finishTask.length}
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={{ marginRight: 12, marginLeft: 12, marginTop: 12}}>
                    <FlatList
                        data={tasks}
                        keyExtractor={(item) => item.name}
                        renderItem={({ item }) => (
                            <Task isFinish={item.isFinished} onFinish={() => handleFinishTask(item.name)} onRemove={() =>  handleRemoveTask(item.name)} text={item.name} />
                        )}
                        showsVerticalScrollIndicator={false}
                        ListEmptyComponent={() => (
                            <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 100}}>
                                <Image style={{ marginBottom: 30, width: 80, height: 80}} source={require('../../../assets/Clipboard.png')} />
                                <Text style={{ color: '#808080', fontWeight: 'bold', fontSize: 16}}>Você ainda não tem tarefas cadastradas</Text>
                                <Text style={{ color: '#808080', fontSize: 14}}>Crie tarefas e organize seus itens a fazer</Text>
                            </View>
                        )}
                    />
                </View>
            </View>
        </View>
    )
}
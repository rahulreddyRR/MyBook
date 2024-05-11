import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import FIcon from 'react-native-vector-icons/FontAwesome'
import AIcon from 'react-native-vector-icons/AntDesign'
import { IconButton } from 'react-native-paper'

interface TodolistInterfaceProps {
    task: string;
    status: boolean;
    uid: string;
    onClickStatusChange: (uid: string) => void;
    onClickStatusEdit: (uid: string) => void;
    onClickStatusDelete: (uid: string) => void;
  }

const TaskList: FC<TodolistInterfaceProps> = ({ task, status, uid, onClickStatusChange, onClickStatusEdit, onClickStatusDelete }) => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.TaskSub}>
                <IconButton
                    icon={() => <Icon size={24} name={status ? 'checkmark-circle' : "checkmark-circle-outline"} color={'#0d766e'} />}
                    size={6}
                    onPress={() => onClickStatusChange(uid)}
                />
                <Text style={styles.TaskName}>{task}</Text>
            </View>

            <View style={{ flexDirection: 'row' }}>
                <IconButton
                    icon={() => <FIcon size={24} name={"edit"} color={'#0d766e'} />}
                    onPress={() => onClickStatusEdit(uid)}
                />
                <IconButton
                    icon={() => <AIcon size={22} name={"delete"} color={'#0d766e'} />}
                    onPress={() => onClickStatusDelete(uid)}
                />
            </View>
        </View>
    )
}

export default TaskList

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        borderColor: '#0d766e',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 10,

    },
    TaskSub: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,

    },
    TaskName: {
        fontSize: 18,
        fontWeight: 'bold',
    }
})
import {StyleSheet, View} from 'react-native';
import React, {FC} from 'react';
import {Button, TextInput} from 'react-native-paper';

interface props {
  onClickAddTask: (newtask: string, isEditing: boolean, uid?: string) => void;
  setNewTask: (prevState: any) => void;
  newTask: any;
}

const Addtodoicon: FC<props> = ({onClickAddTask, newTask, setNewTask}) => {
  return (
    <View style={styles.mainContainer}>
      <TextInput
        label="New Task"
        value={newTask.newTask}
        onChangeText={text =>
          setNewTask((prevS: any) => ({...prevS, newTask: text}))
        }
        mode="outlined"
        style={styles.Inputtask}
        outlineColor="#0d766e"
        activeOutlineColor="#0d766e"
      />
      <Button
        icon="plus"
        mode="elevated"
        onPress={() =>
          onClickAddTask(newTask.newTask, newTask.isEditing, newTask.uid)
        }
        buttonColor="#0d766e"
        textColor="white"
        disabled={!newTask.newTask}
        >
        {newTask.isEditing ? 'edit Task' : 'Add Task'}
      </Button>
    </View>
  );
};

export default Addtodoicon;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  Inputtask: {
    width: '60%',
    height: 40,
  },
});

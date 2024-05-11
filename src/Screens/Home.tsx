import {
  FlatList,
  StyleSheet,
  View,
} from 'react-native';
import React, {FC, useState} from 'react';
import Addtodoicon from '../Components/Addtodoicon';
import TaskList from '../Components/TaskList';
import _ from 'lodash';

export interface TodolistInterface {
  task: string;
  status: boolean;
  uid: string;
}

const Home: FC = () => {
  const [TodoList, setTodoList] = useState<TodolistInterface[]>([]);
  const [newTask, setNewTask] = useState({
    newTask: '',
    isEditing: false,
    uid: '',
  });
  console.log('🚀 ~ newTask:', newTask);
  console.log('🚀 ~ TodoList:', TodoList);

  const onClickAddTask = (newTask: string, isEditMode: boolean, uid?:string) => {
    if(isEditMode){
      const tasktoupdate = TodoList.map(item => {
        if (item.uid == uid) {
          return {
            ...item,
            task: newTask,
          };
        }
        return item;
      });
      setTodoList(tasktoupdate);
    }else{
      setTodoList([
        ...TodoList,
        {task: newTask, status: false, uid: _.uniqueId()},
      ]);
    }
   
    setNewTask({
      newTask: '',
      isEditing: false,
      uid: '',
    })
  };

  const onClickStatusChange = (uid: string) => {
    const tasktoupdate = TodoList.map(item => {
      if (item.uid == uid) {
        return {
          ...item,
          status: !item.status,
        };
      }
      return item;
    });
    setTodoList(tasktoupdate);
  };

  const onClickStatusEdit = (uid: string) => {
    const oldTask = TodoList.find((item) => item.uid== uid)
    setNewTask({newTask: oldTask?.task ?? "", isEditing: true, uid: oldTask?.uid});
  };
  const onClickStatusDelete = (uid: string) => {
    const filterednewList = TodoList.filter((item) => item.uid !== uid)
    setTodoList(filterednewList);
  };
  return (
    <>
      <View style={styles.mainContainer}>
        <Addtodoicon
          onClickAddTask={onClickAddTask}
          setNewTask={setNewTask}
          newTask={newTask}
        />

        <FlatList
          data={TodoList}
          renderItem={({item}) => (
            <TaskList
              task={item.task}
              status={item.status}
              uid={item.uid}
              onClickStatusChange={onClickStatusChange}
              onClickStatusEdit={onClickStatusEdit}
              onClickStatusDelete={onClickStatusDelete}
            />
          )}
          keyExtractor={item => item.uid}
          ItemSeparatorComponent={() => <View style={{marginVertical: 8}} />}
        />
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainContainer: {
    paddingVertical: 16,
    height: '100%',
    backgroundColor: '#e4e7eb',
    paddingHorizontal: 8,
    gap: 8,
  },
});

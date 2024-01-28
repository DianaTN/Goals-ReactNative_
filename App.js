import { View, TextInput, Button, Text, StyleSheet, FlatList } from 'react-native';
import { useState } from 'react';


export default function App() {

  // Declaramos el hook de estado, el cual es un array, con el componente "New Goal"
  const [newGoal, setNewGoal] = useState("");
  const [myGoals, setMyGoals] = useState([]);

  function textChangeHandler(enteredText) {
    setNewGoal(enteredText);
  }

  function addGoalHandler() {
    setMyGoals(myCurrentGoals => [...myCurrentGoals,
    {
      id: Date.now(),
      text: newGoal,
    }]);
    setNewGoal("");

  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={textChangeHandler}
          style={styles.textInput}
          value={newGoal}
          placeholder='Input your Goal!!'
        />
        <Button
          title='Add Goal'
          onPress={addGoalHandler}
        />
      </View>
      <View style={styles.goalsContainer}>

        <FlatList
          data={myGoals}
          renderItem={(dataItem) => (
            <View style={styles.goalItem} key={dataItem.item.id}>
              <Text style={styles.goalText}>{dataItem.item.text}</Text>
            </View>
          )
          }
        />





      </View>
    </View>
  );
}

const styles = new StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 15
  },

  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#48cae4",
    alignItems: 'center'
  },

  textInput: {
    borderColor: "#48cae4",
    borderWidth: 1,
    width: "70%",
    padding: 10
  },

  goalsContainer: {
    flex: 14,
  },

  goalItem: {
    padding: 20,
    backgroundColor: "#ade8f4",
    marginBottom: 10,
    borderRadius: 12,
  },
  goalText: {
    color: "black"
  }


})
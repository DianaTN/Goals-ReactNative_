import { View, TextInput, Button, Text, StyleSheet, FlatList } from 'react-native';
import { useState } from 'react';


export default function App() {

  // Declaramos el hook de estado, el cual es un array, con el componente "New Goal"
  const [newGoal, setNewGoal] = useState("");
  const [listaGoals, setListGoals] = useState([]);

  function textChangeHandler(enteredText) {
    setNewGoal(enteredText);
  }

  function addGoalHandler() {
    setListGoals(myCurrentGoals => [...myCurrentGoals, newGoal])
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={textChangeHandler}
          placeholder='Input your goal'
        />
        <Button
          title='Add Goal'
          onPress={addGoalHandler}
        />
      </View>

      <View style={styles.goalsContainer}>

        <FlatList
          data={listaGoals}
          renderItem={(dataItem) => {

            <View style={styles.goalStyle} key={dataItem.item}>
              <Text style={styles.goalText}>{dataItem.item}</Text>
            </View>

          }
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
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#48cae4",
    paddingBottom: 20,
    alignItems: "center",
    flex: 1
  },

  textInput: {
    borderWidth: 1,
    borderColor: "#48cae4",
    width: "70%",
    padding: 10
  },

  goalsContainer: {
    flex: 14
  },

  goalStyle: {
    padding: 20,
    backgroundColor: "#ade8f4",
    marginBottom: 10,
    borderRadius: 12
  },

  goalText: {
    color: "white"
  }
})
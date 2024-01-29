import { View, TextInput, Button, Text, StyleSheet, FlatList } from 'react-native';
import { useState } from 'react';

// Añadimos import para el componente
import GoalInput from './components/GoalInput';


export default function App() {

  // Declaramos el hook de estado, el cual es un array, con el componente "New Goal"
  const [myGoals, setMyGoals] = useState([]);

  function addGoalHandler(newGoalText) {
    setMyGoals(myCurrentGoals => [...myCurrentGoals,
    {
      id: Date.now(),
      text: newGoalText,
    }]);
  }

  return (
    <View style={styles.container}>

      <GoalInput onNewGoal={addGoalHandler} />

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

    </View >
  );
}

const styles = new StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 15
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
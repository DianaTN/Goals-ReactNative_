import { View, TextInput, Button, Text, StyleSheet, FlatList } from 'react-native';
import { useState } from 'react';

// Añadimos import para el componente
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';



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
            <GoalItem key={dataItem.item.id} goal={dataItem.item} />
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
  }
})